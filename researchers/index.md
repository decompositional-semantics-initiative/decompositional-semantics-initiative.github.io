---
layout: page
title: Researchers
excerpt: "Researchers who are part of the Decompositional Semantics Initiative."
search_omit: true
---

## Faculty

{% for researcher in site.data.researchers.faculty %}
  {% if link.url contains 'http' %}
      {% assign domain = '' %}
  {% else %}
      {% assign domain = site.url %}
  {% endif %}
  <center>
  <a href="{{ researcher.website }}"><img src="{{ site.url }}/images/{{ researcher.avatar }}" class="bio-photo-about" alt="{{ researcher.name }} bio photo"/></a><br/><a href="{{ researcher.website }}"><b>{{ researcher.name }}</b></a><br/>{{ researcher.role }}<br/>{{ researcher.affiliation }}
  </center>
{% endfor %}

## Research Scientists

{% for researcher in site.data.researchers.researchscientists %}
  {% if link.url contains 'http' %}
      {% assign domain = '' %}
  {% else %}
      {% assign domain = site.url %}
  {% endif %}
  <center>
  <a href="{{ researcher.website }}"><img src="{{ site.url }}/images/{{ researcher.avatar }}" class="bio-photo-about" alt="{{ researcher.name }} bio photo"/></a><br/><a href="{{ researcher.website }}"><b>{{ researcher.name }}</b></a><br/>{{ researcher.role }}<br/>{{ researcher.affiliation }}
  </center>
{% endfor %}

## Postdocs

{% for researcher in site.data.researchers.postdocs %}
  {% if link.url contains 'http' %}
      {% assign domain = '' %}
  {% else %}
      {% assign domain = site.url %}
  {% endif %}
  <center>
  <a href="{{ researcher.website }}"><img src="{{ site.url }}/images/{{ researcher.avatar }}" class="bio-photo-about" alt="{{ researcher.name }} bio photo"/></a><br/><a href="{{ researcher.website }}"><b>{{ researcher.name }}</b></a><br/>{{ researcher.role }}<br/>{{ researcher.affiliation }}
  </center>
{% endfor %}

## Graduate Students

{% for researcher in site.data.researchers.students %}
  {% if link.url contains 'http' %}
      {% assign domain = '' %}
  {% else %}
      {% assign domain = site.url %}
  {% endif %}
  <center>
  <a href="{{ researcher.website }}"><img src="{{ site.url }}/images/{{ researcher.avatar }}" class="bio-photo-about" alt="{{ researcher.name }} bio photo"/></a><br/><a href="{{ researcher.website }}"><b>{{ researcher.name }}</b></a><br/>{{ researcher.role }}<br/>{{ researcher.affiliation }}
  </center>
{% endfor %}
