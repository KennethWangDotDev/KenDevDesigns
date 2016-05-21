---
title: 'Responsive Web Design'
layout: blog-post
root: blog
nav-blog: true
date: 2016-03-02
collection:
  - blog
  - webdesign

thumbnail: blog/responsive-web-design/thumbnail.png

description: "In this day and age, a good website must not only look and function well on your computer, but it must look and function well across every single device."
---

For every single one of my clients' sites, I incorporate a technique called Responsive Web Design. I'm often asked by them what exactly it is, and what problem it tries to solve. This article should answer those exact questions.


### The Mobile Age ###


We are currently living in an age where mobile devices is becoming more and more prevalent every day. A [recent statistic](http://www.smartinsights.com/mobile-marketing/mobile-marketing-analytics/mobile-marketing-statistics/) shows that mobile and tablet usage is now *greater than* Desktop usage. Designing a website solely for Desktop and PC is no longer an option. In this day and age, a good website must not only look and function well on your computer, but it must look and function well across *every* device. 


One solution that people used in the past was having a mobile version of the site. However, this is really an archaic workaround and **I do not recommend having a separate mobile site at all** for most websites. A **separate mobile site falls short** on the following:

* **More work to maintain.** Having two sites instead of one literally doubles your maintenance time and cost.
* **One layout can't support every single mobile device.** We currently have the BlackBerry, the iPhone, the iPad, the netbook, the Kindle, the Surface, and hundreds of different Android devices. They all use *different resolutions!* And who knows what new device will come out in the next 10 years.
* **Bad UX when sharing mobile links.** When you're on a mobile site and you want to share the link, the people who receive it that are on Desktop will also see the mobile version. This is just bad UX.


### Introducing Responsive Web Design ###

The modern solution to this mobile problem is known as **Resposive Web Design**. This is a term coined by [Ethan Marcotte](http://alistapart.com/article/responsive-web-design), the father of Responsive Web Design, in May 2010. The idea of Responsive Web Design is that the HTML is the foundation of the site. It's building block of the site and defines the site's contents, and should not change across devices.

Here is a quote from Ethan Marcotte that describes the nature of being *responsive*:

>Recently, an emergent discipline called “responsive architecture” has begun asking how physical spaces can respond to the presence of people passing through them. Through a combination of embedded robotics and tensile materials, architects are experimenting with art installations and wall structures that bend, flex, and expand as crowds approach them. Motion sensors can be paired with climate control systems to adjust a room’s temperature and ambient lighting as it fills with people. Companies have already produced “smart glass technology” that can automatically become opaque when a room’s occupants reach a certain density threshold, giving them an additional layer of privacy.
><br/><br/>This is our way forward. Rather than tailoring disconnected designs to each of an ever-increasing number of web devices, we can treat them as facets of the same experience. We can design for an optimal viewing experience, but embed standards-based technologies into our designs to make them not only more flexible, but more adaptive to the media that renders them. In short, we need to practice *responsive web design*.
><cite>Ethan Marcotte</cite>


In short, **Responsive Web Design** is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, images and an intelligent use of CSS media queries. As the user switches from their laptop to iPad, the website should automatically switch to accommodate for resolution, image size and scripting abilities. In other words, the website should have the technology to automatically respond to the user’s preferences. This would eliminate the need for a different design and development phase for each new gadget on the market. ([Smashing Magazine](https://www.smashingmagazine.com))

<figure>
<img src="/assets/images/blog/responsive-web-design/responsive.jpg">
</figure>

<figure>
<a class="embedly-card" href="https://gfycat.com/ReflectingSerpentineGopher">KenDevDesigns - Responsive Design</a>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
<figcaption>Examples of responsive web design on this website</figcaption>
</figure>


You can think of Responsive Web Design as "fluid layout with the same content". From a technical point of view, Responsive Web Design can be built with smart CSS Media Queries. Here is a starter template from Andy Clark. 

``` css
/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {
/* Styles */
}

/* Smartphones (landscape) ----------- */
@media only screen
and (min-width : 321px) {
/* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen
and (max-width : 320px) {
/* Styles */
}
```

Media Queries are not the only element of Responsive Web Design. Every asset (CSS, JavaScript, images, fonts) must all be optimized for mobile. Often times, you do not need to display a HD image to mobile users. Instead, show them a thumbnail of the same image, which will vastly improve loading times.


### Conclusion ###

Ethan Marcotte predicted five years ago that one day mobile users will overtake PC users. That age and day is now. Technology is evolving, and so is modern web design and development. Support for all devices is extremely vital currently, and responsive web design is the perfect answer to that. 