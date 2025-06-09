#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Configuration
const config = {
  inputDir: path.join(__dirname, '..', 'public', 'images'),
  outputDir: path.join(__dirname, '..', 'public', 'images-optimized'),
  
  // Quality settings
  jpegQuality: 85,
  webpQuality: 80,
  avifQuality: 60,
  
  // Size limits (in pixels)
  maxWidth: 2000,
  maxHeight: 2000,
  
  // Thumbnail sizes for common images
  thumbnailSizes: [150, 300, 600, 800, 1200],
  
  // Image types to process
  supportedExtensions: ['.jpg', '.jpeg', '.png', '.gif'],
  
  // Skip these directories
  skipDirs: ['node_modules', '.git', '.next', 'out']
}

// Check if ImageMagick is available
function checkImageMagick() {
  try {
    execSync('magick -version', { stdio: 'ignore' })
    console.log('✅ ImageMagick found')
    return true
  } catch (error) {
    console.error('❌ ImageMagick not found. Please install ImageMagick first.')
    console.error('   macOS: brew install imagemagick')
    console.error('   Ubuntu: sudo apt-get install imagemagick')
    process.exit(1)
  }
}

// Get all image files recursively
function getImageFiles(dir, files = []) {
  const items = fs.readdirSync(dir)
  
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    
    if (stat.isDirectory() && !config.skipDirs.includes(item)) {
      getImageFiles(fullPath, files)
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase()
      if (config.supportedExtensions.includes(ext)) {
        files.push(fullPath)
      }
    }
  }
  
  return files
}

// Get image dimensions
function getImageDimensions(imagePath) {
  try {
    const output = execSync(`magick identify -ping -format "%w %h" "${imagePath}"`, { encoding: 'utf8' })
    const [width, height] = output.trim().split(' ').map(Number)
    return { width, height }
  } catch (error) {
    console.error(`Error getting dimensions for ${imagePath}:`, error.message)
    return null
  }
}

// Get file size in KB
function getFileSize(filePath) {
  const stats = fs.statSync(filePath)
  return Math.round(stats.size / 1024)
}

// Optimize single image
function optimizeImage(inputPath, outputDir) {
  const relativePath = path.relative(config.inputDir, inputPath)
  const outputPath = path.join(outputDir, relativePath)
  const outputDirPath = path.dirname(outputPath)
  
  // Create output directory
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true })
  }
  
  const ext = path.extname(inputPath).toLowerCase()
  const baseName = path.basename(inputPath, ext)
  const baseOutputPath = path.join(outputDirPath, baseName)
  
  const originalDimensions = getImageDimensions(inputPath)
  if (!originalDimensions) return
  
  const originalSize = getFileSize(inputPath)
  
  console.log(`📸 Processing: ${relativePath} (${originalDimensions.width}x${originalDimensions.height}, ${originalSize}KB)`)
  
  const results = {
    original: { path: inputPath, size: originalSize },
    optimized: []
  }
  
  try {
    // Determine optimal resize dimensions
    let { width, height } = originalDimensions
    if (width > config.maxWidth || height > config.maxHeight) {
      const ratio = Math.min(config.maxWidth / width, config.maxHeight / height)
      width = Math.round(width * ratio)
      height = Math.round(height * ratio)
    }
    
    // 1. Optimized JPEG/PNG (primary format)
    const optimizedExt = ext === '.png' ? '.png' : '.jpg'
    const optimizedPath = `${baseOutputPath}${optimizedExt}`
    
    let optimizeCmd = `magick "${inputPath}"`
    
    // Resize if needed
    if (width !== originalDimensions.width || height !== originalDimensions.height) {
      optimizeCmd += ` -resize ${width}x${height}`
    }
    
    // Quality settings based on format
    if (ext === '.png') {
      optimizeCmd += ` -strip -define png:compression-level=9`
    } else {
      optimizeCmd += ` -strip -quality ${config.jpegQuality} -sampling-factor 4:2:0`
    }
    
    optimizeCmd += ` "${optimizedPath}"`
    
    execSync(optimizeCmd, { stdio: 'ignore' })
    const optimizedSize = getFileSize(optimizedPath)
    results.optimized.push({
      format: optimizedExt.slice(1),
      path: optimizedPath,
      size: optimizedSize,
      savings: Math.round(((originalSize - optimizedSize) / originalSize) * 100)
    })
    
    // 2. WebP version
    const webpPath = `${baseOutputPath}.webp`
    const webpCmd = `magick "${optimizedPath}" -quality ${config.webpQuality} "${webpPath}"`
    execSync(webpCmd, { stdio: 'ignore' })
    const webpSize = getFileSize(webpPath)
    results.optimized.push({
      format: 'webp',
      path: webpPath,
      size: webpSize,
      savings: Math.round(((originalSize - webpSize) / originalSize) * 100)
    })
    
    // 3. AVIF version (best compression)
    const avifPath = `${baseOutputPath}.avif`
    try {
      const avifCmd = `magick "${optimizedPath}" -quality ${config.avifQuality} "${avifPath}"`
      execSync(avifCmd, { stdio: 'ignore' })
      const avifSize = getFileSize(avifPath)
      results.optimized.push({
        format: 'avif',
        path: avifPath,
        size: avifSize,
        savings: Math.round(((originalSize - avifSize) / originalSize) * 100)
      })
    } catch (error) {
      console.log(`   ⚠️  AVIF not supported for this image`)
    }
    
    // Print results
    results.optimized.forEach(result => {
      console.log(`   ✅ ${result.format.toUpperCase()}: ${result.size}KB (${result.savings}% smaller)`)
    })
    
  } catch (error) {
    console.error(`   ❌ Error processing ${relativePath}:`, error.message)
  }
  
  return results
}

// Main optimization function
async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n')
  
  checkImageMagick()
  
  // Create output directory
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true })
  }
  
  // Get all image files
  const imageFiles = getImageFiles(config.inputDir)
  console.log(`Found ${imageFiles.length} images to process\n`)
  
  let totalOriginalSize = 0
  let totalOptimizedSize = 0
  let processedCount = 0
  
  // Process each image
  for (const imagePath of imageFiles) {
    const results = optimizeImage(imagePath, config.outputDir)
    if (results) {
      totalOriginalSize += results.original.size
      if (results.optimized.length > 0) {
        // Use the primary optimized version for size calculation
        totalOptimizedSize += results.optimized[0].size
      }
      processedCount++
    }
    console.log() // Empty line for readability
  }
  
  // Summary
  console.log('📊 Optimization Summary:')
  console.log(`   Images processed: ${processedCount}`)
  console.log(`   Original total size: ${Math.round(totalOriginalSize / 1024)}MB`)
  console.log(`   Optimized total size: ${Math.round(totalOptimizedSize / 1024)}MB`)
  console.log(`   Total savings: ${Math.round(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100)}%`)
  console.log(`\n✅ Optimization complete! Check the 'public/images-optimized' directory`)
}

// Run if called directly
if (require.main === module) {
  optimizeImages().catch(console.error)
}

module.exports = { optimizeImages }