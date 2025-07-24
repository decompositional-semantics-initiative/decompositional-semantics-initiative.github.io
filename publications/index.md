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
        <a href="{{ link.href }}" class="pub-link pub-link-{{ link.label | downcase }}" target="_blank" rel="noopener noreferrer">
            <span class="link-icon">
                {% case link.label | downcase %}
                {% when 'pdf' %}
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L8,14H10L11.5,17.5L13,14H15L13,19H10Z"/>
                    </svg>
                {% when 'doi' %}
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"/>
                    </svg>
                {% when 'bib' %}
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                {% when 'code' %}
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                {% when 'data' %}
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
                    </svg>
                {% else %}
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                {% endcase %}
            </span> {{ link.label | upcase }}
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
    position: relative;
    z-index: 1;
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
    position: relative;
    z-index: 5;
}

.pub-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--text-primary);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    z-index: 10;
}

.pub-link:hover {
    background: var(--accent-primary);
    color: white;
    border-color: var(--accent-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-primary);
}

.link-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.link-icon svg {
    width: 16px;
    height: 16px;
}
</style>
