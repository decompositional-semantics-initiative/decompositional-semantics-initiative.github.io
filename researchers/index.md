---
layout: page
title: Researchers
excerpt: "Researchers who are part of the Decompositional Semantics Initiative."
search_omit: true
---

{% for group in site.data.researchers %}
<h2>{{ group.name }}</h2>
  {% for researcher in group.people %}
    {% if link.url contains 'http' %}
        {% assign domain = '' %}
    {% else %}
        {% assign domain = site.url %}
    {% endif %}
<center>
<a href="{{ researcher.website }}"><img src="{{ site.url }}/images/{{ researcher.avatar }}" class="bio-photo-about" alt="{{ researcher.name }} bio photo"/></a><br/><a href="{{ researcher.website }}"><b>{{ researcher.name }}</b></a><br/>{{ researcher.role }}<br/>{{ researcher.affiliation }}<br/>
</center>
  {% endfor %}
{% endfor %}
