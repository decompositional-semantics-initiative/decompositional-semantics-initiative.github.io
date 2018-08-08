---
layout: page
title: Researchers
excerpt: "Researchers who are part of the Decompositional Semantics Initiative."
search_omit: true
---

{% assign cols = 2 %}

{% for group in site.data.researchers %}
<h2>{{ group.name }}</h2>
  <!-- for some reason I can't get tablerow to work here -->
  <table>
  {% for researcher in group.people %}
    {% assign modulo = forloop.index | mod: cols %}
    {% if modulo == 1 %}
    <tr>
    {% endif %}
      <td><center><a href="{{ researcher.website }}"><img src="{{ site.url }}/images/{{ researcher.avatar }}" class="bio-photo-about" alt="{{ researcher.name }} bio photo"/></a><br/><a href="{{ researcher.website }}"><b>{{ researcher.name }}</b></a><br/>{{ researcher.role }}<br/>{{ researcher.affiliation }}<br/></center></td>
    {% if modulo == cols %}
  </tr>
    {% endif %}
  {% endfor %}
  {% if modulo > 1 and modulo < cols %}
    {% for j in (i..cols) %}
    <td></td>
    </tr>
    {% endfor %}
  {% endif %}
  </table>
{% endfor %}
