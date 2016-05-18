---
title: KenDevDesigns.com 2.0
layout: blog-post
root: blog
nav-blog: true
date: 2016-05-17
collection:
  - blog
  - webdesign
  - webdev

thumbnail: blog/kendevdesigns-2.0/thumbnail.png

description: "Welcome to KenDevDesigns 2.0. I completely re-did this entire website, mostly for fun experimenting around with new technology, but also for a couple of tiny things that were bothering me."
---


Welcome to KenDevDesigns 2.0. I completely re-did this entire website, mostly for fun experimenting around with new technology, but also for a couple of tiny things that were bothering me.

## Using Metalsmith

The original version was powered by [Jekyll](https://jekyllrb.com/), which I chose initially because it was highly recommended and was easy to set up with GitHub Pages. However, I soon realized that I had problems trying to configure Jekyll to my liking. Don't get me wrong, Jekyll is not bad, but the problem was that I didn't know any Ruby at all. In fact, I had zero Ruby experience before trying out Jekyll. I didn't understand how Jekyll worked and I hated that.

It's around this time when I discovered [Metalsmith](http://metalsmith.io). Metalsmith is a *modular* JavaScript static site generator. Key word being modular -- every function in Metalsmith is achieved by chaining together Metalsmith plugins. Here is an example given in Metalsmith's docs:

```js
Metalsmith(__dirname)
  .use(drafts())
  .use(markdown())
  .use(permalinks('posts/:title'))
  .use(layouts('handlebars'))
  .build(function(err) {
    if (err) throw err;
  });
```

I'm a sucker for modular stuff. I love the concept so much. Metalsmith is like a "Build Your Own Static Site Generator" workshop. It also allows you to use any templating engine of your choice, and I chose Handlebars. I configured Metalsmith to use the following file structure:

```
KenDevDesigns/ (Root)
├───app (Source files)
│   ├───assets
│   │   ├───fonts
│   │   ├───images
│   │   │   ├───blog
│   │   │   ├───personal
│   │   │   └───portfolio
│   │   ├───js
│   │   │   └───polyfill
│   │   └───scss
│   │       ├───base
│   │       ├───layout
│   │       ├───modules
│   │       └───pages
│   ├───pages
│   │   ├───blog
│   │   ├───personal
│   │   └───portfolio
│   └───templates
│       ├───handlebar-helpers
│       ├───layouts
│       └───partials
│ 
├───dist (Ouput)
```

This file structure is a vast improvement over version 1.0 which had files all over the place. In this new version (listed above), the `Gulpfile`, `package.json`, and any other meta files sit directly in the root folder. All page files sit in `app/pages`. There are also various folders inside `app/pages` to organize them even more. Layouts and partials are used, which go in `app/templates`. When I run `gulp build` on the site, all the file output goes in `dist`.


If you're like me and comfortable with JavaScript, then I highly recommend Metalsmith. Metalsmith offers way more flexibility than any other static site generator, and is easy to set up.

## Portfolio Page Redesign

The biggest weakness in the original version was the Portfolio page. The design tried to fit too much content for each portfolio entry into a small box. I decided to completely redesign my portfolio page. This time, each portfolio entry actually has its own Project Overview page. This meant that on the overall Portfolio page that showcases every entry, I could simply have a short description and image for each entry, with a button linking to the Project Overview page where more information and images are shown.

<figure>
<img src="/assets/images/blog/kendevdesigns-2.0/portfolio-old.png">
<figcaption>Original portfolio design that I felt was too cramped</figcaption>
</figure>

<figure>
<img src="/assets/images/blog/kendevdesigns-2.0/portfolio-new.png">
<figcaption>New design - Project Overview links to page with more information and images</figcaption>
</figure>

## Page Speed

One goal of Version 2.0 was to make the site even faster. I'm pretty happy with the end result.

<figure>
<img src="/assets/images/blog/kendevdesigns-2.0/pagespeed-mobile.jpg">
<img src="/assets/images/blog/kendevdesigns-2.0/pagespeed-desktop.jpg">
<figcaption>Google PageSpeed Insights</figcaption>
</figure>

<figure>
<img src="/assets/images/blog/kendevdesigns-2.0/pingdom.jpg">
<figcaption>Pingdom Speed Test</figcaption>
</figure>


How did I make it so fast?
* Every HTML file is minified
* Critical CSS for each page inlined in HTML `<style>`
* Concatenated and minified CSS and JavaScript file
* Every image compressed
* Uses InstantClick which pre-loads the page upon hovering over a link to it
* Gzip compression of important assets
* No render-blocking of any kind
* CSS, JavaScript, and fonts are cached and are used in all pages

## Font Optimizations

KenDevDesigns 2.0 uses the webfonts Helvetica Neue, FF Meta Serif, and Montserrat. I split every font file into *type-families* (font-weight and normal/oblique) and only included the ones which I actually use. To further reduce redundancy (and file size), I used a technique called font subsetting and removed glyphs that I do not use.


I used a generator that provided me with `eot`, `ttf`, `woff`, and `woff2` formats for each type-family. On the server-side, I enabled Gzip compression for `eot` and `ttf` files to further reduce the file size. The `woff` and `woff2` files do not need to be Gzip compressed since they are already compressed. Finally, I used the [Hardened Bulletproof Fontspring Syntax](http://blog.fontspring.com/2011/02/further-hardening-of-the-bulletproof-syntax/) to include them in my stylesheet. 


For font loading, I used a strategy I invented which I call "Conditional Critical CSS". [Read more about it here](104.236.93.62/blog/conditional-critical-css).

## LucidCSS


LucidCSS is a CSS style guide that I have been developing. For an extremely short summary of it, LucidCSS's goal is to keep things simple, which is achieved by having only a single class per element. I experimented a lot with LucidCSS on this site and figured out some new rules and optimizations for it. [Read more about it here](http://lucidcss.io).

## Closing Words

The entire re-work process took me exactly 1 week. Even though that the original version was honestly fine and there was not really a need for me to do this, I'm so glad that I did and am very pleased with the end result. I hope you enjoyed this write-up and could take something away from it!
