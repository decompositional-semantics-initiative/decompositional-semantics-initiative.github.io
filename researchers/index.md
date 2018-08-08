---
layout: page
title: Researchers
excerpt: "Researchers who are part of the Decompositional Semantics Initiative."
search_omit: true
---

{% assign cols = 2 %}

{% for group in site.data.researchers %}
<h2>{{ group[1].name }}</h2>
  <!-- for some reason I can't get tablerow to work here -->
  <table>
  {% for researcher in group[1].people %}
    {% assign modulo = forloop.index | mod: cols %}
    {% if modulo == 1 %}
    <tr>
    {% endif %}
      <td><center><a href="{{ researcher[0] }}/"><img src="{{ site.url }}/images/{{ researcher[0] }}.jpg" class="bio-photo-about" alt="{{ researcher[1].name }} photo"/></a><br/><a href="{{ researcher[0] }}/"><b>{{ researcher[1].name }}</b></a><br/>{{ researcher[1].role }}<br/>{{ researcher[1].affiliation }}<br/></center></td>
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
