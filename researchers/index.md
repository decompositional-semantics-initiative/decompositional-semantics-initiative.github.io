---
layout: page
title: Researchers
excerpt: "Researchers who are part of the Decompositional Semantics Initiative."
search_omit: true
---

{% assign cols = 2 %}
{% assign colsminus1 = cols | minus: 1 %}

{% for group in site.data.researchers %}
<h2>{{ group[1].name }}</h2>
  <!-- for some reason I can't get tablerow to work here -->
  <table>
  {% assign i = 0 %}
  {% for researcher in group[1].people %}
    {% if i == 0 %}
    <tr>
    {% endif %}
      <td><center><a href="{{ researcher[0] }}/"><img src="{{ site.url }}/images/{{ researcher[0] }}.jpg" class="bio-photo-about" alt="{{ researcher[1].name }} photo"/></a><br/><a href="{{ researcher[0] }}/"><b>{{ researcher[1].name }}</b></a><br/>{{ researcher[1].role }}<br/>{{ researcher[1].affiliation }}<br/></center></td>
    {% if i == colsminus1 %}
  </tr>
    {% assign i = 0 %}
    {% else %}
    {% assign i = i | plus: 1 %}
    {% endif %}
  {% endfor %}
  {% if i > 0 and i < cols %}
    {% for j in (i..colsminus1) %}
    <td></td>
    {% endfor %}
    </tr>
  {% endif %}
  </table>
{% endfor %}
