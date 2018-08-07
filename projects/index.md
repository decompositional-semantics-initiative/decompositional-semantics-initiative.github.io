---
layout: page
title: Projects
excerpt: "Projects pursued by the Decompositional Semantics Initiative."
search_omit: true
---

<center>
{% for category in site.data.projects %}
  {% for project in category[1] %}
    <a href="{{ page.url | append: project[1].url }}">{{ project[1].title }}</a><br/>
  {% endfor %}
{% endfor %}
</center>
