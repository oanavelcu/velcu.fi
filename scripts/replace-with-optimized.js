#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const config = {
  originalDir: path.join(__dirname, '..', 'public', 'images'),
  optimizedDir: path.join(__dirname, '..', 'public', 'images-optimized'),
  backupDir: path.join(__dirname, '..', 'public', 'images-backup')
}

function replaceWithOptimized() {
  console.log('🔄 Replacing original images with optimized versions...\n')
  
  // Create backup directory
  if (!fs.existsSync(config.backupDir)) {
    fs.mkdirSync(config.backupDir, { recursive: true })
    console.log('📦 Created backup directory')
  }
  
  // Move original images to backup
  if (fs.existsSync(config.originalDir)) {
    console.log('📦 Backing up original images...')
    fs.renameSync(config.originalDir, config.backupDir)
  }
  
  // Move optimized images to original location
  if (fs.existsSync(config.optimizedDir)) {
    console.log('✅ Moving optimized images to original location...')
    fs.renameSync(config.optimizedDir, config.originalDir)
  }
  
  console.log('\n🎉 Image replacement complete!')
  console.log('   ✅ Original images backed up to public/images-backup')
  console.log('   ✅ Optimized images now in public/images')
  console.log('   📝 Your site will now use the optimized images')
}

function restoreOriginal() {
  console.log('🔄 Restoring original images...\n')
  
  if (!fs.existsSync(config.backupDir)) {
    console.error('❌ No backup found. Cannot restore original images.')
    return
  }
  
  // Remove current optimized images
  if (fs.existsSync(config.originalDir)) {
    fs.rmSync(config.originalDir, { recursive: true })
  }
  
  // Restore from backup
  fs.renameSync(config.backupDir, config.originalDir)
  
  console.log('✅ Original images restored!')
}

// Command line interface
const command = process.argv[2]

if (command === 'restore') {
  restoreOriginal()
} else {
  replaceWithOptimized()
}