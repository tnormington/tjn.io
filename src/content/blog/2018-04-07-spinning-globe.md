---
layout: blog
title: Spinning Globe
date: '2018-04-01T14:30:09-06:00'
keywords:
  - CSS
  - Animation
---

I first got my hands dirty with programming back in freshman year of college. Back then my major was Interactive Development and Design before I switched over to 3D Digital Graphics, ironically I now do more development work than 3d design, but I am trying to balance that out. Anyway, we were learning how to write actionscript in some Adobe flash editor and it confused me, lots. The assignment was to create a 2 - 3 minute animation for a music video or speech.

I chose to use [Pale Blue Dot](https://www.youtube.com/watch?v=GO5FwsblpT8) by Carl Sagan, I wanted the result to be profound and life-altering, this was my first assignment as a freshman in college after-all.

The first element I wanted to put on the screen was slow zoom of a spinning earth starting from very far away. So I thought about how to create this element in this 2d graphics editor and I came up with a solution involving a circle mask ontop of a flat map of earth. I would pan the flat map horizontally while it was clipped to only show a circlular portion, once it got to the end of the flat map it would repeat. This would simulate a 3D spinning earth. 

I wish I could find the original final result, it's got to be somewhere on a hard-drive, I will update this post if I end up finding it.

But anyway, the other day I was having some internet trouble and couldn't connect to slack. If you haven't experienced this before, slack has a standard screen informing you that you don't have internet connection, this is accompanied by a nice spinning globe gif. Here is a motionless screenshot:

ADD SCREENSHOT HERE

Now, I don't know how they created this animation, it could be another method entirely. Either way, it reminded me of that project I did almost 10 years ago and got me thinking to how easily/quickly I could build it today. So I whipped up a codepen in a couple minutes had the result, I used the same circle masking method with a CSS keyframe animation. Check it out.

<p data-height="320" data-theme-id="light" data-slug-hash="bvQmYd" data-default-tab="css,result" data-user="tnormington" data-embed-version="2" data-pen-title="Spinning Globe" class="codepen">See the Pen <a href="https://codepen.io/tnormington/pen/bvQmYd/">Spinning Globe</a> by Tim Normington (<a href="https://codepen.io/tnormington">@tnormington</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>