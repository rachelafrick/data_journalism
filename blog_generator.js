const fs = require('fs');
const ejs = require('ejs');

let coverage= fs.readFileSync('data/coverage.json', 'utf8');
coverage = JSON.parse(coverage)

//generate index
let index_template = fs.readFileSync('src/views/index.ejs', 'utf8');
index_html = ejs.render(index_template, {
  filename: __dirname + '/src/views/index.ejs',
  data: coverage

});
fs.writeFileSync("build/index.html", index_html, 'utf8');

//generate about
let about_template = fs.readFileSync('src/views/about.ejs', 'utf8');
about_html = ejs.render(about_template, {
  filename: __dirname + '/src/views/about.ejs',
  data: coverage

});
fs.writeFileSync("build/about.html", about_html, 'utf8');

//generate microsummaries
let blog_template = fs.readFileSync('src/views/microsum.ejs', 'utf8');

for (let i=1; i<coverage.length; i++ ){
let title = coverage[i]["location"].trim().replace(/ /g, "_")+".html";

blog_html = ejs.render(blog_template, {
  filename: __dirname + '/src/views/microsum.ejs',
  data: coverage[i]

});


fs.writeFileSync(`build/${title}`, blog_html, 'utf8');


}
