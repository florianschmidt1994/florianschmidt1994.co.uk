"use strict";(self.webpackChunkflorianschmidt_me=self.webpackChunkflorianschmidt_me||[]).push([[678],{812:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294);function l(e){var t=e.children;return n.createElement("div",{className:"grid grid-cols-[1fr_min(900px,100%)_1fr]"},t)}},8652:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(1597),l=r(7294);function a(){return l.createElement("header",{className:"py-12 px-10 flex flex-col items-center"},l.createElement("h1",{className:"text-5xl text-terracotta-500"},"Florian Schmidt"),l.createElement("nav",{className:"mt-8"},l.createElement("ul",{className:"font-bold flex flex-row space-x-10 uppercase text-xs opacity-80"},l.createElement("li",null,l.createElement(n.rU,{to:"/"},"Home")),l.createElement("li",null,l.createElement(n.rU,{to:"/blog"},"Blog")),l.createElement("li",null,l.createElement(n.rU,{to:"/projects"},"Passion Projects")),l.createElement("li",null,l.createElement(n.rU,{to:"/about-me"},"About me")))))}function c(){return l.createElement("footer",{className:"my-10 w-full text-center flex items-center justify-center font-bold"},l.createElement(n.rU,{className:"hover:underline",to:"/imprint"},"Imprint"))}function o(e){var t=e.children;return l.createElement(l.Fragment,null,l.createElement(a,null),l.createElement("main",null,t),l.createElement(c,null))}},9314:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(1597),l=r(7294);function a(e){var t=e.node;return l.createElement(l.Fragment,null,l.createElement(n.rU,{className:"text-xl block text-orange-600 font-bold",to:t.frontmatter.slug},t.frontmatter.title),l.createElement("span",{className:"block text-xs mb-2 font-bold opacity-80"},t.frontmatter.date),l.createElement("span",{className:"text-md mr-2"},t.excerpt),l.createElement(n.rU,{to:t.frontmatter.slug},"Read More"))}function c(e){var t=e.articles,r=e.header,c=e.moreText,o=e.moreLink;return l.createElement("section",{className:"col-[2] px-10 mt-12"},r&&l.createElement("h2",{className:"text-xl font-bold mb-5"},r),l.createElement("ul",{className:"flex flex-col space-y-10"},t.map((function(e){return l.createElement("li",null,l.createElement(a,{node:e}))}))),l.createElement(n.rU,{className:"text-terracotta-600 hover:underline w-full block text-center my-10",to:o},c))}},6558:function(e,t,r){r.r(t);var n=r(7294),l=r(8652),a=r(9314),c=r(812);function o(){return n.createElement("section",{className:"col-[2] text-xl lg:text-3xl mt-12 px-10"},"Hi 👋 I'm a software developer with a heart for non-profits. I like to develop applications all across the stack!")}t.default=function(e){var t=e.data;e.location;console.log(t);var r=t.allMarkdownRemark.nodes.filter((function(e){return e.frontmatter.tags&&e.frontmatter.tags.includes("blog")})).slice(0,4),m=t.allMarkdownRemark.nodes.filter((function(e){return e.frontmatter.tags&&e.frontmatter.tags.includes("passion-project")})).slice(0,4);return n.createElement(l.Z,null,n.createElement(c.Z,null,n.createElement(o,null),n.createElement(a.Z,{articles:r,moreText:"Show all blog posts",moreLink:"/blog",header:"My Blog"}),n.createElement(a.Z,{articles:m,header:"Passion Projects",moreText:"Show all passion projects",moreLink:"/projects"})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6680b165e2ed20806116.js.map