---
layout: page
title: Projects
excerpt: "Projects pursued by the Decompositional Semantics Initiative."
search_omit: true
---

<center>
{% for project in site.data.projects %}
    <a href="{{ page.url | append: project[1].url }}">{{ project[1].title }}</a><br/>
{% endfor %}
</center>
