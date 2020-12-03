const fs = require('fs');
const ejs = require('ejs');


let post = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
let blog_template = fs.readFileSync('views/blog_posts.ejs', 'utf8');

let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let index_html = ejs.render(index_template, {
	filename: __dirname + '/views/index.ejs',
	blog_array: post
})
fs.writeFileSync('build/index.html', index_html, 'utf8')

let about_template = fs.readFileSync('views/about.ejs', 'utf8');
let about_html = ejs.render(about_template, {
	filename: __dirname + '/views/about.ejs',
	blog_array: post
})
fs.writeFileSync('build/about.html', about_html, 'utf8')





for (i = 0; i < post.length; i++) {
  let blog_html = ejs.render(blog_template, {
    filename: __dirname + '/views/blog_posts.ejs',
    data: post[i],
    blog_array: post
  });

  let name = "build/" + post[i]["title"].trim().replace(/ /g, "_") + ".html";
  fs.writeFileSync(name, blog_html, 'utf8');
}
