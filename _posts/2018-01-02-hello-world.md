---
layout: post
section-type: post
title: "Initial site: post"
category: productivity
tags: [atom, productivity, markdown, config]
---

I don't intend to blog often, but will if I have any compelling ideas, thoughts to share with the world. Hopefully it happens more often than I think it will.

## Config for Atom that changed my life

### Disable Autocomplete-plus on certain file types
I've finally had enough of Atom suggesting text when I'm typing up documentation / just using Atom as a notepad. (I swear it has become a habit to hit my escape key, to close the autocomplete suggestion, when I type.)

The package `autocomplete-plus` should be installed as a `Core Package` for you. Find that package and add `*.md, *.txt` and any other file extensions to be on the `File Blacklist`.

![Autocomplete-plus](./autocomplete-plus.jpg)

### Soft wrap on specific file markdown
The default settings for soft wrap are all encompassing by default, which is not what I wanted given sometimes its nice to see code as its written. Markdown was one place where I wanted a soft wrap by default and I was annoying toggling the default settings in my Atom editor every time I typed up markdown.

Open up your Atom config, it should open a file called `config.cson`.

Put this at the the left most level indentation:
```json
".gfm.source":
  editor:
    softWrapAtPreferredLineLength: true
```
