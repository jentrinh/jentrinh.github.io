
Keep posts written in *Markdown* here. These will appear in the **News** section on the main page of website and on the **Blog** page  section of the website 

## File Name

Create a new file and name it using this convention: `YYYY-MM-DD-thisismytitle.md`

The data portion  controls blog post order and is used to auto display the date with the posts. Multiple posts on the same day are ordered numerically then alphabetically using the title. Order would go:

* `2016-04-04-1titlewithnumber.md`
* `2016-04-04-2titlewithnumber.md`
* `2016-04-04-titlenonumber.md`


## Front Matter

Make sure to add *front-matter* to each post (i.e., some metadata text at the top). This is used by Jekyll to grab the markdown files and turn them into formatted html pages that are linked elsewere. Front matter users the following convention:

```
---
title: This is the title of my blog post. It can be long or short, doesn't matter
img: default.jpg
thumbnail: default-thumbnail.jpg
layout: post
---
```

Tnclude the triple-dash `---` at top and bottom.

`title` - title of the article here. this will be used for the main header of the post and all links to the post

`img` - name of the image file you want to appear at the top of blog post. Save the image in the repository to the `cleanrobotics.github.io/img/posts` folder. Use `default.jpg` if you don't have an image-the pop-cans will be placed there instead.

`thumbnail` - name of the thumbnail image file you want to appear on the website's main **News** section tiles. Save the thumbnail image in the repository to the `cleanrobotics.github.io/img/posts` folder. Use `default.jpg` if you don't have an image-the pop-cans will be placed there instead.

`layout` - this needs to say `post`. In the future we may add other types of posts and have different layouts, which would specified here.

After the final `---`, begin typing your post.


## Using Prose.io

[Prose.io](http://prose.io) is an online text editor made with writing and publishing blog posts like this in mind.

A key difference is that once you've published a post with prose.io, you access the Front Matter from the **metadata** window.
