---
layout: page
title: Projects
subtitle: Research initiatives pushing the boundaries of semantic understanding
custom_js:
  - /assets/js/projects-filter.js
---

<div class="projects-hero">
    <div class="hero-background"></div>
    <div class="hero-content">
        <p class="lead">
            Our research projects represent a comprehensive approach to decompositional semantics, 
            each tackling a fundamental aspect of meaning representation through innovative annotation frameworks.
        </p>
        <div class="project-stats">
            <div class="stat">
                <span class="stat-number gradient-text">{{ site.data.projects | size }}</span>
                <span class="stat-label">Projects</span>
            </div>
            <div class="stat">
                <span class="stat-number gradient-text">200K+</span>
                <span class="stat-label">Total Annotations</span>
            </div>
            <div class="stat">
                <span class="stat-number gradient-text">18</span>
                <span class="stat-label">Publications</span>
            </div>
        </div>
    </div>
</div>

<div class="projects-container">
    <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="toolkit">Code</button>
        <button class="filter-btn" data-filter="annotation">Annotations</button>
    </div>

    <div class="projects-showcase">
        {% for project in site.data.projects %}
        {% assign proj = project[1] %}
        <div class="project-showcase-card" data-category="{% if proj.repository %}toolkit{% else %}annotation{% endif %}">
            <div class="project-icon">
                {% case project[0] %}
                {% when 'spr' %}
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                {% when 'factuality' %}
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                {% when 'genericity' %}
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                {% when 'time' %}
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                {% when 'predpatt' %}
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                {% when 'parsing' %}
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                        <path d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm0 4h18v2H3zm0-8h18v2H3z"/>
                    </svg>
                {% when 'wsd' %}
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                {% when 'event-structure' %}
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                {% else %}
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                {% endcase %}
            </div>
            <div class="project-content">
                <h3>{{ proj.title }}</h3>
                <p class="project-description">
                    {% case project[0] %}
                    {% when 'spr' %}
                        Fine-grained thematic role properties that capture how events relate to their participants through decomposed semantic features.
                    {% when 'factuality' %}
                        Determining whether events described in text actually happened, incorporating speaker confidence and evidentiality.
                    {% when 'genericity' %}
                        Distinguishing generic statements about kinds from specific episodic events through multi-dimensional annotation.
                    {% when 'time' %}
                        Real-valued temporal relations and event durations for constructing precise document-level timelines.
                    {% when 'predpatt' %}
                        Universal predicate-argument extraction that bridges deep syntax and shallow semantics across languages.
                    {% when 'parsing' %}
                        Joint syntactic and semantic parsing models that learn to extract graph structures and attributes from text.
                    {% when 'wsd' %}
                        Word sense disambiguation through simple binary questions about meaning in context.
                    {% when 'event-structure' %}
                        Capturing complex event structures including subparts, participants, and their relationships over time.
                    {% when 'decomptoolkit' %}
                        Comprehensive Python toolkit for working with Universal Decompositional Semantics datasets and models.
                    {% else %}
                        Advanced semantic annotation project within the decompositional semantics framework.
                    {% endcase %}
                </p>
                <div class="project-meta">
                    {% if proj.datasets %}
                    <div class="meta-item">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                        <span>{{ proj.datasets | size }} datasets</span>
                    </div>
                    {% endif %}
                    {% if proj.references %}
                    <div class="meta-item">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                        <span>{{ proj.references | size }} papers</span>
                    </div>
                    {% endif %}
                    {% if proj.repository %}
                    <div class="meta-item">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span>Open Source</span>
                    </div>
                    {% endif %}
                </div>
                <a href="{{ '/projects/' | append: proj.url | relative_url }}" class="project-link">
                    Explore Project
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                </a>
            </div>
        </div>
        {% endfor %}
    </div>
</div>


