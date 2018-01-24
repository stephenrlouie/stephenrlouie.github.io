webpackJsonp([0x834755aae49e],{473:function(e,A){e.exports={data:{site:{siteMetadata:{title:"Steve Louie Personal Site",author:"Steve Louie"}},markdownRemark:{id:"/Users/stephenlouie/Documents/React/site/src/blog/hello-world/index.md absPath of file >>> MarkdownRemark",html:'<p>I don\'t intend to blog often, but will if I have any compelling ideas, thoughts to share with the world. Hopefully it happens more often than I think it will.</p>\n<h2>Weekend Project</h2>\n<p>This site is a weekend project in an attempt to learn more web technologies. Since I primarily do systems level programming I figured it would be useful to get my feet wet with React. It has certainly been a humbling experience because I have <strong>A LOT</strong> to learn when it comes to web technologies.</p>\n<h2>How did I get started?</h2>\n<p>It seemed like React was the new <em>hotness</em> so I figured I\'d try it. I found the <a href="https://discord.gg/CNdSkN">reactiflux discord</a> and saw some of their learning resources. I ended up watching some react videos and walking through the basics at <a href="https://reactjs.org/">reactjs.org</a>.</p>\n<p>I was planning on making a Heroes of the Storm timer app as my first project, but also realized I could make a personal site for myself. (Something I\'ve been putting off for years) So here we are, and as you can see its not the most beautiful site in the world. I hope to touch it up as I learn more.</p>\n<h2>Config for Atom that changed my life</h2>\n<h3>Disable Autocomplete-plus on certain file types</h3>\n<p>I\'ve finally had enough of Atom suggesting text when I\'m typing up documentation / just using Atom as a notepad. (I swear it has become a habit to hit my escape key, to close the autocomplete suggestion, when I type.)</p>\n<p>The package <code>autocomplete-plus</code> should be installed as a <code>Core Package</code> for you. Find that package and add <code>*.md, *.txt</code> and any other file extensions to be on the <code>File Blacklist</code>.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/site/static/autocomplete-plus-98f37a4a9c3e068968b2285e0a028186-6b9d4.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 12.393681652490887%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAACABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAcqCAf/EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABUQAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEBAAE/IW//2gAMAwEAAgADAAAAEAw//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERIVH/2gAIAQEAAT8QZ5pX0rP/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Autocomplete-plus"\n        title=""\n        src="/site/static/autocomplete-plus-98f37a4a9c3e068968b2285e0a028186-dce6a.jpg"\n        srcset="/site/static/autocomplete-plus-98f37a4a9c3e068968b2285e0a028186-a774e.jpg 148w,\n/site/static/autocomplete-plus-98f37a4a9c3e068968b2285e0a028186-0f476.jpg 295w,\n/site/static/autocomplete-plus-98f37a4a9c3e068968b2285e0a028186-dce6a.jpg 590w,\n/site/static/autocomplete-plus-98f37a4a9c3e068968b2285e0a028186-3f26a.jpg 885w,\n/site/static/autocomplete-plus-98f37a4a9c3e068968b2285e0a028186-029a7.jpg 1180w,\n/site/static/autocomplete-plus-98f37a4a9c3e068968b2285e0a028186-6b9d4.jpg 1646w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>Soft wrap on specific file markdown</h3>\n<p>The default settings for soft wrap are all encompassing by default, which is not what I wanted given sometimes its nice to see code as its written. Markdown was one place where I wanted a soft wrap by default and I was annoying toggling the default settings in my Atom editor every time I typed up markdown.</p>\n<p>Open up your Atom config, it should open a file called <code>config.cson</code>.</p>\n<p>Put this at the the left most level indentation:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token property">".gfm.source"</span><span class="token operator">:</span>\n  editor<span class="token operator">:</span>\n    softWrapAtPreferredLineLength<span class="token operator">:</span> <span class="token boolean">true</span>\n</code></pre>\n      </div>',frontmatter:{title:"Hello World!",date:"January 07, 2018"}}},pathContext:{slug:"/hello-world/"}}}});
//# sourceMappingURL=path---hello-world-b2992bc98da6e3d4942f.js.map