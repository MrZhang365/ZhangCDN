const fs = require('fs')
const allFilesInTree = require('all-files-in-tree')
const tree = require('pretty-file-tree')

const files = allFilesInTree.sync('static')
const fileTree = tree(files)
fs.writeFileSync('packages.txt', fileTree)
console.info(fileTree)
console.info('Done.')
