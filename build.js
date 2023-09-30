const fs = require('fs')
const path = require('path')

const packages = fs.readdirSync('./static').filter(d => !fs.statSync(path.resolve(__dirname, 'static', d)).isFile())
fs.writeFileSync('packages.txt', packages.join('\n'))
