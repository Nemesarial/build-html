var args = process.argv.splice(process.execArgv.length + 2)
var root = process.env.PWD+'/'

var fIn = root+args[0];
var fOut= root+args[1];

console.log(`rebuilding from ${fIn} to ${fOut}`)

var fs = require('fs')
var min = require('html-minifier').minify
var $=require('cheerio').load(fs.readFileSync(root+args[0]))

$('[data-build-remove]').remove()

var html=$.html()

html=min(html.replace(/\<build-script ([^\>]*)\>\<\/build-script\>/i,'<script $1></script>'),{
      collapseWhitespace: true
})

fs.writeFileSync(fOut,html)

// console.log(html)


