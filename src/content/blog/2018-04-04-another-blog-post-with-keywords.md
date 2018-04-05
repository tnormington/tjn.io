---
layout: blog
title: Complete Website Overhaul
date: '2018-04-01T14:30:09-06:00'
keywords:
  - Gatsby
  - Github
  - Netlify
  - GraphQL
  - React
---
It's time I wrote a real blog post, so here it is. I recently did a complete website overhaul, moving from a LAMP stack + Wordpress to a JAM stack + Gatsby. I've been hearing a whole lot about Gatsby, GraphQL, and Netlify lately, so this past weekend I decided to give it a whirl.

First thing, I was amazed at how easy it was to get up and running. Part of that could be my level of experience compared to what it was when I last attempted working with a static site generator. But most of the reason is the really well written tutorials and starter kits provided by the community.

For those who are not familiar with [GatsbyJS](https://www.gatsbyjs.org/), it is a static site generator that uses a React component system to build elements of your website. Static site generators are usually a tool that takes in templates, assets, and data, and builds a folder of more folders & files that, when hosted, is a website. The benefit of these generators is mostly performance, by removing the need for a framework like Wordpress or Drupal you skip a bunch of unnecessary steps including querying a database. That, combined with the power of a single page application built with React, and you get an incredibly fast website.

For hosting I decided to terminate my AWS EC2 instance and test out [Netlify](https://www.netlify.com/). Configuring my free Netlify account to deploy from a Github repo was super simple, it auto detected Gatsby and setup the build commands itself. Now, whenever I push to the master branch of that repo Netlify will detect that new commit and compile the new code for deployment. So I've got a free hosting option, much better than the $10/mo for a micro EC2 running a bunch of stuff I don't need.
