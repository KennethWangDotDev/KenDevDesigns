---
title: Conditional Critical CSS
layout: blog-post
root: blog
nav-blog: true
date: 2016-05-16
collection:
  - blog
  - webdev

thumbnail: blog/conditional-critical-css/thumbnail.png

description: "Conditional Critical CSS is an advanced method of improving page speed. It improves upon the original critical CSS technique by adding in conditionals using server side includes (SSI)."
---


Conditional Critical CSS is an advanced method of improving page speed. It improves upon the original critical CSS technique by adding in conditionals using server side includes (SSI). I also use it as a font loading technique. Before I explain Conditional Critical CSS, let me refresh your memory on the original method of inlining critical CSS.

## Critical CSS

When you reference a file in the `<head>` of the document, such as a CSS file, page render is blocked until the entire file is downloaded. Unsurprisingly, this is pretty bad in terms of page speed. The philosophy behind Critical CSS is that the only CSS important enough to block page rendering are the styles for the first screen's worth of content (*above the fold content*). CSS for other parts of the site can be loaded *asynchronously* without blocking page render. I use [Filament Group's loadCSS](https://github.com/filamentgroup/loadCSS) to load CSS asynchronously.


A HTML implementation looks something like this.

```html
<!doctype html>
<head>
  <style> /* inlined critical CSS */ </style>
  <script> loadCSS('main.css'); </script>
</head>
<body>
  [ Content ]
</body>
</html>
````

One of the caveats of Critical CSS is that the inlined critical CSS are not cached, and that it adds additional bytes to the HTML file of every page. However, inlining critical CSS is shown to almost always improve initial page render anyway, making it a strong recommendation for anyone looking to increase page speed.


## Conditional Critical CSS

Conditional Critical CSS further improves the concept. It's easier to show and then explain, so here's a sample source code.

```html
<!doctype html>
<!--#if expr="$HTTP_COOKIE=/fonts-loaded=true/" -->
<html lang="en" class="fonts-loaded">
<!--#else -->
<html lang="en">
<!--#endif -->
  <head> 
    <!--#if expr="$HTTP_COOKIE=/fonts-loaded=true/" -->
      <link rel="stylesheet" href="/assets/css/main.css">
    <!--#else -->
      <style type="text/css">
        /* inlined critical css */
      </style>
      <script id="loadcss">
        loadCSS( "/assets/css/main.css", document.getElementById("loadcss") );
      </script>
      <noscript><link rel="stylesheet" href="/assets/css/main.css"></noscript>
    <!--#endif -->
  </head>
  <body>
    
    [ Content ]
    
    <!--#if expr="$HTTP_COOKIE=/fonts-loaded=true/" -->
    <!--#else -->
      <script src="/assets/js/fontfaceobserver.js">
      <script>
      function createCookie(name,value,days) {
          if (days) {
              var date = new Date();
              date.setTime(date.getTime()+(days*24*60*60*1000));
              var expires = "; expires="+date.toGMTString();
          } 
          else {
              var expires = "";
          }
          document.cookie = name+"="+value+expires+"; path=/";
      }

      var fontA = new FontFaceObserver('nimbus-sans-condensed');
      var fontB = new FontFaceObserver('proxima-nova');

      Promise.all([fontA.load(), fontB.load()]).then(function () {
          document.documentElement.className += "fonts-loaded";
          createCookie("fonts-loaded", true, 365);
      });
      </script>
    <!--#endif -->

  </body>
```


Okay, that's a lot of code. So what exactly is going on here? The first thing to note is that we use server side includes that check if the cookie `fonts-loaded=true` is set. The script at the very bottom sets this cookie when all fonts are loaded. We can split the HTML into two separate parts -- the *first request* and then *future requests*.

For the *first request*:

1. Critical CSS is inlined, and the main CSS file is loaded asynchronously.
2. Font Face Observer monitors the loading status of the fonts. When all fonts are loaded, it adds the class `.fonts-loaded` to the `html`, and creates the `font-loaded: true` cookie. A FOUT occurs on this initial request.
3. All fonts are cached, as well as the main CSS file.

For all *future requests* on all pages:

1. The HTML starts with the `.fonts-loaded` class immediately due to the cookie, and fonts are cached and can be used immediately without a FOUT or FOIT due to caching.
2. CSS is not inlined which saves bytes, and the main CSS file is loaded. Render is not blocked because the CSS file is cached.
3. Font Face Observer is no longer needed, and is not loaded either to save bytes.


## Font Loading

You may be wondering why it is necessary to add `.fonts-loaded` to `html`. The purpose it to prevent Flashes of Invisible Text. In modern browsers, if you try to use a font while it is detected but still loading, the text will turn invisible until font finishes loading. FOIT is the absolute worst for user experience of people with slower connections, and we actually want a Flash of *Unstyled* Content instead. Yes, FOUT is actually the optimal scenario. For more information, read the [Font Loading](http://typographyhandbook.com/#font-loading) section from my web book [Typography Handbook](http://typographyhandbook.com/).


I use this mixin to help manage my CSS code. 

```scss
@mixin body-font {
  font-family: "proxima-nova", Helvetica, arial, sans-serif;
  .fonts-loaded & {
    font-family: "Helvetica Neue", "proxima-nova", Helvetica, arial, sans-serif;
  }  
}
```


I can then just call `@include body-font` everywhere I want to use it, and not have to worry about FOITs.


## Page Speed Results


I recorded some page speed results with my internet throttled to the "Good 2G 150ms, 450kb/s, 150kb/s" option on Chrome DevTools.

**First request on Home Page:**

<figure>
<img src="/assets/images/blog/conditional-critical-css/first.jpg">
</figure>


* Above the fold content loaded with fallback fonts after *0.24s*. 
* CSS for the entire page applied after *1.9s*.
* All fonts loaded and applied (FOUT), page finishes loading after *5.84s*.

**First time visiting the Blog Page after that first request:**

<figure>
<img src="/assets/images/blog/conditional-critical-css/second.jpg">
</figure>

* HTML and CSS both fully loaded after *0.6s*. 
* Fonts load immediately after (FOUT / FOIT avoided), *0.7s*.
* After all 11 thumbnails finishes downloading, entire page finishes loading after *1.64s*.

This is incredibly good for the first visit of a new page at 2G internet!

## Closing Words

I hope that this blog article has helped you. I am still experimenting with this method, and already have ideas to improve it. It can be easily combined with [Flash of Faux Text](https://www.zachleat.com/web/foft/), a method that involves initially loading only the normal Roman version and then loading the various type-families. Mess around with it, and see if you can come up with more further optimizations!