---
title: 'SEO Checklist'
layout: blog-post
root: blog
nav-blog: true
date: 2016-03-17
collection:
  - blog
  - webdev

thumbnail: blog/seo-checklist/thumbnail.png

description: "Concise and easy methods to give your website a competitive edge in search engine rankings"
---

Search Engine Optimization is a tricky subject which has gone over many significant changes over the years. One of the best resources to learn modern SEO techniques is through the [SEO Moz Blog](https://moz.com/blog). However, it is very in-depth with over 12 years worth of detailed blog entries written by industry leading experts. If you are just starting out, the Moz Blog may be too advanced for your needs. In that case, I have listed concise and easy methods to give your website a competitive edge in search engine rankings. This article was written from the perspective of a developer, for other developers, and only lists *technical* recommendations.

### Setting Proper META Tags ###

Setting up META tags properly is the most basic yet also one of the most **crucial** thing to do for SEO. META tags give search engines more information about a web page. There are many META tags, but the SEO relevant ones are the Title tag and the Description tag.

```html
<head>
    <title>SEO Checklist</title>
    <meta name="description" content="Concise and easy methods to give your website a competitive edge in search engine rankings">
</head>
```

When a user searches for your website, the Title and Description tag is what they see in the result entry.

*Further Readings:* [Meta Tags and SEO - TutsPlus](http://webdesign.tutsplus.com/articles/meta-tags-and-seo--webdesign-9683)

### Semantic Markup ###

Semantic markup sounds complicated, but is actually an easy concept to grasp.

>Semantic markup is a fancy way of saying you can use HTML tags to tell search engines exactly what a specific piece of content is.

Semantic markup helps to index your content faster and more accurately. Semantic markup includes: 

* `h1` through `h6`
* HTML5 elments: `header`, `nav`, `section`, `article`, `aside`, `footer`
* `form`
* `table`
* `img`

In order to correctly make use of semantic markup, you must use each of the tags the way they were intended to. Your `h1` should describe the most important title. The `nav` should describe the navigation, and et cetera. 

Although semantic markup provides information about the *type* of the content, it does not provide information about the content itself. This can be resolved with marking up your content with Microdata.

>Your web pages have an underlying meaning that people understand when they read the web pages. But search engines have a limited understanding of what is being discussed on those pages. By adding additional tags to the HTML of your web pages—tags that say, "Hey search engine, this information describes this specific movie, or place, or person, or video"—you can help search engines and other applications better understand your content and display it in a useful, relevant way. Microdata is a set of tags, introduced with HTML5, that allows you to do this.
><cite>schema.org</cite>

I will not go in-depth about Microdata in this blog post due to its complexity. Just know that it is possible and will help your website get ranked much more accurately.

*Further readings:* [Schema.org Documentation](http://schema.org/docs/gs.html)

### Use A Single Domain ###

Instead of having several domains all connected to your website, it is much better to have a single "main" domain. This includes the `www` subdomain. If you are running Apache with `mod_rewrite` enabled, you can include this script in your `.htaccess` file to easily redirect `www` requests to your actual domain name: 

```
RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_HOST} !www.yourwebsite.com$ [NC]
RewriteRule ^(.*)$ http://www.yourwebsite.com/$1 [L,R=301] 
```

### Page Speed ###

The time it takes to load a page is a major component of UX (user experience), and it also affects your SEO rankings. Google's [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) is a great way to improve your website's load times.

### Responsive Layouts ###

Websites that employ Responsive Web Design are ranked higher for mobile searchers than non-responsive websites. If your website is not responsive yet, you should definitely  make it a priority for your next re-design. Be sure to put this code in the `head` of your html:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Readable URLs ###

The URLs for each page of your site should be human readable and convey exactly what the page is about. Here is an example of a *bad* URL:

```
http://www.pets.com/get_product_by_name.php?product_name=norwegian-blue
http://www.pets.com/pet_care_info_07_07_2008.php
```

This can be improved into:

```
http://www.pets.com/parrots/norwegian-blue/
http://www.pets.com/pet-care/
```

This is again done with `mod_rewrite` and the `.htaccess` file. Another thing to be wary of is duplicated URL that leads to the same content. Consider the following URLs:

```
http://pets.com/page/?search=keyword&page=5&from=homepage
http://pets.com/page/?page=5&search=keyword&from=homepage
http://pets.com/search/keyword/?page=5
```

Google and many other search engines do not like duplicate content. If those three distinct URLs all have the exact same content, your SEO score will be penalized for that.

*Further Readings:* [URL Rewriting For Beginners](https://www.addedbytes.com/articles/for-beginners/url-rewriting-for-beginners/) - AddedBytes

### Sitemap.xml ###

Sitemap.xml is a structured document that gives the search engine a full list of your web pages and when they were last updated. XML sitemaps serve as a way to communicate directly with the search engines, alerting them to new or changed content very quickly and helping to ensure that the content is indexed faster.

It is recommended to also use Google Search Console (previously known as Google Webmaster Tools). Google Search Console allows you to claim ownership of your website, and gives you many tools to monitor its SEO rankings. One of these is direct uploading of a sitemap.xml for Google Bot to crawl.

*Further Readings:* [The Importance Of XML Sitemaps In The Age Of Panda](http://searchengineland.com/importance-xml-sitemaps-age-panda-214952) - SearchEngineLand

### Conclusion ###

SEO is very important these days for growing your brand or business. These suggestions I gave are purely *technical* ones, and there is more to SEO than just technical improvements. If you want to get deeper into SEO, I highly recommend subscribing to the [SEO Moz Blog](https://moz.com/blog). One more thing to keep in mind is that no matter how optimized your website is for SEO, content is still the most important thing there is. If you have great and frequently updated content, your website will naturally be highly ranked even without any SEO tricks. Good luck!