#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directories to scan for image references
const SOURCE_DIRS = ['src', 'scripts'];
const CONTENT_DIRS = ['src/content'];
const PUBLIC_DIR = 'public';
const IMAGES_DIR = 'public/images';

// File extensions to scan for references
const SOURCE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'];
const CONTENT_EXTENSIONS = ['.md', '.mdx'];

/**
 * Recursively get all files with specific extensions
 */
function getFilesRecursively(dir, extensions) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getFilesRecursively(fullPath, extensions));
    } else if (extensions.includes(path.extname(item).toLowerCase())) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Get all image files in the public/images directory
 */
function getAllImageFiles() {
  const imageFiles = [];
  
  if (!fs.existsSync(IMAGES_DIR)) {
    console.log('Images directory not found:', IMAGES_DIR);
    return imageFiles;
  }
  
  function scanDir(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else {
        // Check if it's an image file
        const ext = path.extname(item).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.bmp'].includes(ext)) {
          // Store relative path from public directory
          const relativePath = path.relative(PUBLIC_DIR, fullPath).replace(/\\/g, '/');
          imageFiles.push(relativePath);
        }
      }
    }
  }
  
  scanDir(IMAGES_DIR);
  return imageFiles;
}

/**
 * Find all image references in source files
 */
function findImageReferences() {
  const references = new Set();
  
  // Scan source files
  const sourceFiles = [];
  SOURCE_DIRS.forEach(dir => {
    sourceFiles.push(...getFilesRecursively(dir, SOURCE_EXTENSIONS));
  });
  
  // Scan content files
  const contentFiles = [];
  CONTENT_DIRS.forEach(dir => {
    contentFiles.push(...getFilesRecursively(dir, CONTENT_EXTENSIONS));
  });
  
  const allFiles = [...sourceFiles, ...contentFiles];
  
  for (const file of allFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Find all /images/ references
      const imageMatches = content.match(/\/images\/[^'"\s)>]+/g);
      if (imageMatches) {
        imageMatches.forEach(match => {
          // Remove leading slash to match our image file format
          references.add(match.substring(1));
        });
      }
      
      // Find src="/images/ references specifically
      const srcMatches = content.match(/src=["']\/images\/[^"']+["']/g);
      if (srcMatches) {
        srcMatches.forEach(match => {
          const imagePath = match.match(/\/images\/[^"']+/)[0].substring(1);
          references.add(imagePath);
        });
      }
      
    } catch (error) {
      console.warn(`Error reading file ${file}:`, error.message);
    }
  }
  
  return Array.from(references);
}

/**
 * Main function to identify unused assets
 */
function findUnusedAssets(dryRun = true) {
  console.log('🔍 Scanning for image files...');
  const allImages = getAllImageFiles();
  console.log(`Found ${allImages.length} image files`);
  
  console.log('🔍 Scanning for image references in code...');
  const referencedImages = findImageReferences();
  console.log(`Found ${referencedImages.length} image references`);
  
  // Find unused images
  const unusedImages = allImages.filter(image => !referencedImages.includes(image));
  
  console.log('\n📊 Results:');
  console.log(`Total images: ${allImages.length}`);
  console.log(`Referenced images: ${referencedImages.length}`);
  console.log(`Unused images: ${unusedImages.length}`);
  
  if (unusedImages.length > 0) {
    console.log('\n🗑️  Unused images:');
    unusedImages.forEach(image => {
      console.log(`  - ${image}`);
    });
    
    if (!dryRun) {
      console.log('\n🗑️  Deleting unused images...');
      let deletedCount = 0;
      let totalSize = 0;
      
      unusedImages.forEach(image => {
        const fullPath = path.join(PUBLIC_DIR, image);
        try {
          const stats = fs.statSync(fullPath);
          totalSize += stats.size;
          fs.unlinkSync(fullPath);
          deletedCount++;
          console.log(`  ✅ Deleted: ${image}`);
        } catch (error) {
          console.warn(`  ❌ Failed to delete ${image}:`, error.message);
        }
      });
      
      console.log(`\n✅ Deleted ${deletedCount} files (${(totalSize / 1024 / 1024).toFixed(2)} MB)`);
      
      // Clean up empty directories
      console.log('\n🧹 Cleaning up empty directories...');
      cleanupEmptyDirectories(IMAGES_DIR);
    } else {
      console.log('\n💡 Run with --delete flag to actually delete these files');
      
      // Calculate total size
      let totalSize = 0;
      unusedImages.forEach(image => {
        const fullPath = path.join(PUBLIC_DIR, image);
        try {
          const stats = fs.statSync(fullPath);
          totalSize += stats.size;
        } catch (error) {
          // File might not exist, skip
        }
      });
      
      console.log(`📦 Total size of unused assets: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    }
  } else {
    console.log('\n✅ No unused images found!');
  }
  
  return unusedImages;
}

/**
 * Clean up empty directories
 */
function cleanupEmptyDirectories(dir) {
  if (!fs.existsSync(dir)) return;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      cleanupEmptyDirectories(fullPath);
      
      // Check if directory is now empty
      const remainingItems = fs.readdirSync(fullPath);
      if (remainingItems.length === 0) {
        fs.rmdirSync(fullPath);
        console.log(`  🗂️  Removed empty directory: ${path.relative(PUBLIC_DIR, fullPath)}`);
      }
    }
  }
}

// CLI handling
const args = process.argv.slice(2);
const shouldDelete = args.includes('--delete') || args.includes('-d');
const helpRequested = args.includes('--help') || args.includes('-h');

if (helpRequested) {
  console.log(`
Usage: node cleanup-unused-assets.js [options]

Options:
  --delete, -d    Actually delete the unused files (default: dry run)
  --help, -h      Show this help message

Examples:
  node cleanup-unused-assets.js           # Dry run - show what would be deleted
  node cleanup-unused-assets.js --delete  # Actually delete unused files
`);
  process.exit(0);
}

console.log('🧹 Unused Assets Cleanup Tool\n');

if (shouldDelete) {
  console.log('⚠️  WARNING: This will permanently delete unused image files!');
  console.log('Make sure you have a backup of your files.\n');
}

findUnusedAssets(!shouldDelete);