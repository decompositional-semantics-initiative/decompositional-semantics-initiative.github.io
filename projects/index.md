---
layout: page
title: Projects
excerpt: "Projects pursued by the Decompositional Semantics Initiative."
search_omit: true
---

<center>
{% for link in site.data.projects %}
  {% if link.url contains 'http' %}
      {% assign domain = '' %}
  {% else %}
      {% assign domain = site.url %}
  {% endif %}
  <a href="{{ domain }}{{ link.url }}" {% if link.url contains 'http' %}target="_blank"{% endif %}>{{ link.title }}</a><br/>
{% endfor %}
</center>
