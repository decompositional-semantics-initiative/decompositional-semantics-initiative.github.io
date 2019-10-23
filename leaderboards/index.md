---
layout: page
title: "Leaderboard for UDS1.0"
search_omit: true
---

This leaderboard tracks the current state-of-the-art for decompositional semantic parsing. A description of the metrics can be found in [Stengel-Eskin et al. 2019](https://arxiv.org/abs/1910.10138). To submit new results to this board, please send an email to [leaderboard@decomp.io](mailto:leaderboard@decomp.io).

<table>
  <tr>
    <th align="left">Model</th>
    <th align="right">SemOnly</th>
    <th align="right">Syn+Sem</th>
    <th align="right">Syn+Sem+Attr</th>
    <th align="right">AttrOnly</th>
    <!-- <th align="right">F1<sup><a href="#metric1">[1]</a></sup></th>
    <th align="right">F1<sup><a href="#metric2">[2]</a></sup></th>
    <th align="right">F1<sup><a href="#metric3">[3]</a></sup></th>
    <th align="right">F1<sup><a href="#metric4">[4]</a></sup></th> -->
  </tr>
{% for project in site.data.leaderboard %}
  {% assign currproj = project[1] %}
  {% for model in currproj.models %}
    <tr>
    <td align="left">{{ model.name }} (<a href="{{ currproj.url }}">{{ currproj.citation }}</a>)</td>
    <td align="right">{% if model.sota contains "semonly" %}<b>{{ model.semonly }}</b>{% else %}{{ model.semonly }}{% endif %}</td>
    <td align="right">{% if model.sota contains "synsem" %}<b>{{ model.synsem }}</b>{% else %}{{ model.synsem }}{% endif %}</td>
    <td align="right">{% if model.sota contains "synsemattr" %}<b>{{ model.synsemattr }}</b>{% else %}{{ model.synsemattr }}{% endif %}</td>
    <td align="right">{% if model.sota contains "attronly" %}<b>{{ model.attronly }}</b>{% else %}{{ model.attronly }}{% endif %}</td>
    </tr>
  {% endfor %}
{% endfor %}

<!-- <p><small>
<sup id="metric1">[1]</sup> F1 for both syntax and semantics nodes.<br/>
<sup id="metric2">[2]</sup> F1 for semantics nodes only.<br/>
<sup id="metric3">[3]</sup> F1 for both syntax and semantics nodes with attributes.<br/>
<sup id="metric4">[4]</sup> Macro-average F1 for all attributes.
</small>
</p> -->

