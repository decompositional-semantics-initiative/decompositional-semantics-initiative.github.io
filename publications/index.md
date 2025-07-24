---
layout: page
title: Publications
subtitle: Research papers from the Decompositional Semantics Initiative
---

<div class="publications-list">
{% assign all_papers = "" | split: "" %}

<!-- Collect all papers from projects -->
{% for project in site.data.projects %}
    {% if project[1].references %}
        {% for paper in project[1].references %}
            {% assign all_papers = all_papers | push: paper %}
        {% endfor %}
    {% endif %}
{% endfor %}

<!-- Sort and display papers -->
{% for paper in all_papers %}
<div class="publication-item card">
    <p class="citation">{{ paper.citation }}</p>
    {% if paper.links %}
    <div class="publication-links">
        {% for link in paper.links %}
        <a href="{{ link.href }}" class="pub-link">
            <span class="link-icon">📄</span> {{ link.label }}
        </a>
        {% endfor %}
    </div>
    {% endif %}
</div>
{% endfor %}
</div>

<style>
.publications-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.publication-item {
    padding: 2rem;
}

.citation {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.publication-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.pub-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.pub-link:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateY(-2px);
}

.link-icon {
    font-size: 1rem;
}
</style>
