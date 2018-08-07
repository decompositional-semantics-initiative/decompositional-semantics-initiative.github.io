---
layout: page
title: Projects
excerpt: "Projects pursued by the Decompositional Semantics Initiative."
search_omit: true
---

{% assign allprojects = site.data.projects.code | concat: site.data.projects.data %}

<center>
{% for project in allprojects %}
  {% if project[1].url contains 'http' %}
      {% assign domain = '' %}
  {% else %}
      {% assign domain = site.url %}
  {% endif %}
  <a href="{{ domain }}{{ project[1].url }}" {% if project[1].url contains 'http' %}target="_blank"{% endif %}>{{ project[1].title }}</a><br/>
{% endfor %}
</center>
