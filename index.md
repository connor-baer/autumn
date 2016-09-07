---
layout: default
title: Embrace change.
image: 'dog'
theme: 
---

{% include navigation.html theme=page.theme %}

<header class="header">
  <div class="header-background" style="background-image: url('{{ site.baseurl }}/img/{{ page.image }}.jpg')">
    <svg class="header-large" viewBox="0 0 450 75" role="img" aria-labelledby="aria-header-large">
      <title id="aria-header-large">Made by Connor. - Logo</title>
      <defs>
        <g id="text-large">
          <text class="header-text" text-anchor="middle" x="225" y="55">Made by Connor.</text>
        </g>
        <mask id="mask-large" x="0" y="0" width="450" height="75">
          <rect x="0" y="0" width="450" height="75" fill="#fff"/>
          <use xlink:href="#text-large" />
        </mask>
      </defs>
      <rect x="0" y="0" width="450" height="75" mask="url(#mask-large)" fill="white" fill-opacity="1"/>
      <use xlink:href="#text-large" mask="url(#mask-large)" />
    </svg>
    <svg class="header-small" viewBox="0 0 245 150" aria-labelledby="aria-header-small">
      <title id="aria-header-small">Made by Connor. - Logo</title>
      <defs>
        <g id="text-top">
          <text class="header-text" x="15" y="53">Made by</text>
        </g>
        <mask id="mask-top" x="0" y="0" width="245" height="75" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="245" height="75" fill="#fff"/>
          <use xlink:href="#text-top" />
        </mask>
        <g id="text-bottom">
          <text class="header-text" x="15" y="128">Connor.</text>
        </g>
        <mask id="mask-bottom" x="0" y="75" width="225" height="75" maskUnits="userSpaceOnUse">
          <rect x="0" y="75" width="225" height="75" fill="#fff"/>
          <use xlink:href="#text-bottom" />
        </mask>
      </defs>
      <rect x="0" y="0" width="245" height="75" mask="url(#mask-top)" fill="white" fill-opacity="1"/>
      <use xlink:href="#text-top" mask="url(#mask-top)" />
      <rect x="0" y="75" width="225" height="75" mask="url(#mask-bottom)" fill="white" fill-opacity="1"/>
      <use xlink:href="#text-bottom" mask="url(#mask-bottom)" />
    </svg>
  </div>
</header>

<section id="about" class="section">
  <h2 class="section-title">1. About Me</h2>
  <article>
    <h1 class="section-header">Problem solving is my passion.</h1>
    <p class="section-body -large">{{ site.tagline }}</p>
    <a class="section-link -large" href="#contact" data-scroll>Let's create solutions together</a>
  </article>
</section>

<section id="creating" class="section">
  <h2 class="section-title">2. Creating</h2>
  <div class="section-creating">
    {% assign projects = site.data.projects | sort: 'order' | limit: 4 %}
    {% for project in projects %}
      <div class="section-project">
        <h3 class="section-header">{{ project.title }}</h3>
        <p class="section-body">{{ project.description }}</p>
        <a href="{{ project.url }}" class="section-link" target="_blank" rel="noopener noreferrer">{{ project.cta }}</a>
      </div>
    {% endfor %}
  </div>
</section>

<section id="writing" class="section">
  <h2 class="section-title">3. Writing</h2>
  <div class="section-writing">
    {% assign posts = site.posts | sort: 'order' | limit: 3 %}
    {% for post in posts %}
    <article>
      <a href="https://blog.connorbaer.io/{{ post.medium }}" class="post-link" target="_blank" rel="noopener noreferrer">
        <h3 class="section-header">{{ post.title }}</h3>
        <div class="section-post">
          <p class="section-body post-body">{{ post.content | strip_html | truncatewords: 28 }}</p>
          {% if post.image %}
          <div class="post-image" style="background-image: url('{{ site.baseurl }}/img/{{ post.image }}-thumb.jpg')"></div>
          {% endif %}
        </div>
      </a>
    </article>
    {% endfor %}
  </div>
  <a href="https://blog.connorbaer.io/" class="section-link post-medium" target="_blank" rel="noopener noreferrer">Read more on Medium</a>
</section>

<section id="contact" class="section">
  <h2 class="section-title">4. Contact</h2>
   <h3 class="section-header">Get in touch!</h3>
  <form class="form" action="//formspree.io/hello@connorbaer.io" method="POST">
    <div class="form-group">
      <input class="form-input" type="email" name="_replyto" placeholder=" " pattern="[^ @]*@[^ @]*\.[a-zA-Z]{2,}" required>
      <span class="form-highlight"></span>
      <span class="form-underline"></span>
      <label class="form-label" for="_replyto">What’s your email address?</label>
      <p class="form-error"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>Please enter a valid email address.</p>
    </div>
    <div class="form-group">
      <textarea class="form-input" rows="3" name="message" placeholder=" " required></textarea>
      <span class="form-highlight"></span>
      <span class="form-underline"></span>
      <label class="form-label" for="message">What can I do for you?</label>
    </div>
    <input type="hidden" name="_subject" value="Form submission on connorbaer.io" />
    <input type="hidden" name="_next" value="//connorbaer.io/success/" />
    <input type="text" name="_gotcha" style="display:none" />
    <button class="button" type="submit">Send message →</button>
  </form>
</section>