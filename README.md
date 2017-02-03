# Clean Robotics website

*This site was built using the *Agency Jekyll theme*,  based on [Agency bootstrap theme ](http://startbootstrap.com/templates/agency/).*

# Authoring Content

This, like all web pages hosted on GitHub, is a Jekyll-powered site, which is a thing that generates the entire site magically from some templates that contain content authored in basic text and image files. Those basic text files are written in [Markdown](https://daringfireball.net/projects/markdown/). This means that you can author content for the site without coding.

For those unfamiliar with how Jekyll works, check out [jekyllrb.com](https://jekyllrb.com/) for all the details, or read up on just the basics of [front matter](https://jekyllrb.com/docs/frontmatter/), [writing posts](https://jekyllrb.com/docs/posts/), and [creating pages](https://jekyllrb.com/docs/pages/).

## Writing Posts for the News feed

To write a post, create a new markdown file in the `_posts` folder. Use the standard Jekyll dating format for naming the file: `YYYY-MM-DD-NameOfPost.md`. This is an out-of-the-box Jekyll convention.

Once published, posts will be accessed in a nested YYY/MM/DD/NameOfPost url (derived from the filename!), which is built automatically by Jekyll/GitHub Pages. Lists of posts are automatically generated for the News Section on the site's front page, and in the complete News feed listing.

### Post Front-Matter

At the top of each post, you must add Jekyll front-matter using these categories: 

```
---
layout: post
title: The Title of the Post
img: the-banner-image-of-the-post.jpg
thumbnail: a-thumbnail-image-for-the-post.jpg
---
```
A real one looks like:
```
---
layout: post
title: Governor Tom Wolf visits Alpha Lab Gear for innovation showcase
img: tom-wolf-at-alphalab-gear-9-1024x768.jpg
thumbnail: tom-wolf-at-alphalab-gear-9-thumbnail.jpg
---
```
^You can copy and paste this to get started.

### Images for posts

Put images used for blog posts are stored in the `\img\posts` folder. In the post front-matter, reference a full size picture for the `img` item, and a thumbnail-sized version for the `thumbnail`. Be sure to include the file extension (jpg, png).

Full size pictures should be at at least 1024x768 pixels. These appear as a banner at the top of the posts. Thumbnails should be a resolution of 400x300 pixels.

If you don't have images right now, use `img: default.jpg` and `thumbnail: default-thumbnail.jpg` for placeholders.

### Writing the post

After you're done with the front-matter, write your post in [Markdown](http://daringfireball.net/projects/markdown/basics). It's basically a plain text format with some additional simple syntax elements that allow for headers and other `html` elements to be automatically used.

### Publish the post

Once you're done, push changes to the repository. It will be added to the newsfeed list automatically.

## Team members

Team members and corresponding info are added via  '_config.yml' file. Team member images are in '/img/team/'. These images are 300x300 pixels.

## Social Media

Social media icons are generated from those listed in the '_config.yml' file.

## Careers

Right now, careers posts are generated from the '_config.yml' file. Each careers post is rendered from '_config.yml' as follows: 

* description: each bullet is rendered as a paragraph at the beginning
* scope, skills, quals, money: each bullet is rendered as a bullet
* date and contact: rendered on the side on desktop, before description in mobile
* postscript: each bullet is rendered as a paragraph at the end
* other: rendered as an italics paragraph after everything else

In the future we can generate these kinds of things the same way we write blog posts.

## Other content

Right now, everything else not mentioned above is managed through HTML files. The site uses the Bootstrap framework with jQuery and a few other plugins to make it all come together.
