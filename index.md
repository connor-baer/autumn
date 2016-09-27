---
layout: default
title: Embrace change.
image: '/img/dog.jpg'
theme: light
---

{% include core/navigation.html theme=page.theme %}

<header class="header">
  <div class="header-background" style="background-image: url('{{ site.baseurl }}{{ page.image }}')">
    <svg class="header-svg" viewBox="0 0 480 75" role="img" aria-labelledby="aria-header-svg">
      <title id="aria-header-svg">Made by Connor. - Logo</title>
      <defs>
        <g id="text-svg">
          <text class="header-text" text-anchor="middle" x="240" y="55">Embrace Change.</text>
        </g>
        <mask id="mask-svg" x="0" y="0" width="480" height="75">
          <rect x="0" y="0" width="480" height="75" fill="#fff"/>
          <use xlink:href="#text-svg" />
        </mask>
      </defs>
      <rect x="0" y="0" width="480" height="75" mask="url(#mask-svg)" fill="white" fill-opacity="1"/>
      <use xlink:href="#text-svg" mask="url(#mask-svg)" />
    </svg>
  </div>
</header>

<section id="about" class="section">
  <h2 class="section-title">1. About</h2>
  <article>
    <h1 class="section-header">{{ site.title }}</h1>
    <p class="section-body -large">{{ site.tagline }}</p>
    <a class="section-link -large" href="{{ site.github.repo }}">View on GitHub</a>
  </article>
</section>

<section id="blog" class="section">
  <h2 class="section-title">3. Blog</h2>
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

<section id="use" class="section">
  <h2 class="section-title">3. Use</h2>
  <article>
    <h1 class="section-header">How to set up Change.</h1>
    <p class="section-body -large">Change is very simple to configure.</p>
    <p class="section-body">I will tell you how...later.</p>
    <a class="section-link" href="{{ site.github.repo }}">Fork on GitHub</a>
  </article>
</section>
