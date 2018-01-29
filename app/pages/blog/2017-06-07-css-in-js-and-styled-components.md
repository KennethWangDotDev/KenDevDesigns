---
title: CSS-In-JS And Styled-Components
layout: blog-post
root: blog
nav-blog: true
date: 2017-06-07
collection:
  - blog
  - webdev

thumbnail: blog/css-in-js-and-styled-components/thumbnail.png

description: "With the rising popularity of JavaScript frontend frameworks, components have become the building blocks instead of HTML elements, and integrating maintainable CSS became even more convoluted. One solution that people turned to was CSS-In-JS."
---


Ever since the dawn of the internet, developers have been fighting with complexity and related bugs of cascading style sheets. There has been many proposed methodologies and solutions to organize and write maintainable CSS ([OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/), [ACSS](https://acss.io/), [BEM](https://en.bem.info/methodology/), [SMACSS](https://smacss.com/)), but they almost always are hard to manage and do not scale well without rigorous supervision. I personally have written [LucidCSS](http://kendevdesigns.com/other/lucidcss/), a Sass-enabled CSS methodology that I swore by for the longest time.

With the rising popularity of JavaScript frontend frameworks (React, Vue.js, Ember.js to name a few), components have become the building blocks instead of HTML elements, and integrating maintainable CSS became even more convoluted. One solution that people turned to was CSS-In-JS. 

### CSS-In-JS

The main premise for CSS-in-JS is that styles, JavaScript, and markup all have the same, shared concern and therefore should be tightly coupled. Problems with potential collisions are resolved by scoping styles to the component. We have a 0% chance of styles leaking. And if styles are updated in the component there are no ripple-effects across the DOM. What was once a best-practice / guideline is now strictly enforced by the nature of the tooling. By tying styles directly to your components, you can completely forget about massive stylesheets, or even separate CSS pipelines

A common critique of modern CSS-in-JS libraries is complexity (or at least a feeling of complexity), and that’s fair. But the appeal of CSS-in-JS is not simplicity, rather predictability and consistency. In the [famous talk "React: CSS in JS" by vjeux](https://speakerdeck.com/vjeux/react-css-in-js), he outlined 7 core problems with CSS:

![alt text](https://cdn-images-1.medium.com/max/800/1*CyoBdFHojKjEnQ8_CJRuKQ.png "Test")

Similar to how Facebook "solved" the majority of those listed problems with hacks and workarounds, my Gulp workflow implementing LucidCSS also "solved" most of the problems. Because of this, I've always stayed with regular CSS as it allowed me to easily integrate Sass and PostCSS.

However, this was all in the past before I discovered [styled-components](https://github.com/styled-components/styled-components).

### styled-components

One thing that immediately drew me towards styled-components is that their core philosophy aligns with my own philosophy: a singular "class" per element. This is something that I also strongly emphasize in LucidCSS. I am heavily against Bootstrap style utility classes where it is common to have six or seven classes strung onto a single element. However, styled-component goes one step farther and actually just removes the class attribute entirely and instead directly names elements.

In styled-components, something like this:
```html
<div class="home-container"></div>
```
```css
.home-container {
	display: block;
	background-color: #000;
}
```

becomes:
```html
<HomeContainer></HomeContainer>
```
```js
const HomeContainer = styled.div`
	display: block;
	background-color: #000;
`
```
Although it seems like a small change, it vastly improves the semantics and readability of your code, and reinforces good practices. Another great feature of styled-components is that the CSS you write using it in the named template literal is completely identical to regular CSS. This means that you do not need to learn a new API or syntax, and that a new team member can pick it up instantly. In addition, many Sass features are automatically enabled.

```javascript
const Link = styled.a`
  cursor: pointer;
  text-decoration: none;

  // Sass
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
```
As it is JavaScript based, you can take full advantages of its powerful features. Here is an example from a recent project I've been working on where I import functions and snippets into my styles:

```javascript
import styled from 'styled-components';
import { typography, colors } from '../../theme';
import { materialDepth, media } from '../../utils';

const RankingsTable = styled.table`
    width: 100%;
    ${materialDepth(5)};
`;
const TableHeader = styled.tr`
    background-color: ${colors.themeColor};
`;
const Label = styled.td`
    ${typography.size('h5')};
    ${typography.useTitleFont};
    padding: 2rem;
	${media.small(`
        padding: 1rem;
    `)};
`;
```
Similar to Sass mixins, this modular approach allows me to rapidly style new components.


### Conclusion

styled-components has been great for me, and I think it could be really useful for a lot of other teams as well. If you were like me and was hesitant to dive into CSS-In-JS, I strongly recommend you to just give styled-components a try.