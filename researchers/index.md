---
layout: page
title: Researchers
subtitle: The team behind the Decompositional Semantics Initiative
---

<div class="researcher-grid">
{% for researcher in site.data.researchers %}
    <div class="researcher-card">
        <a href="{{ researcher[1].website }}">
            <img src="{{ site.url }}/assets/img/{{ researcher[0] }}.jpg" 
                 class="researcher-img" 
                 alt="{{ researcher[1].name }}"
                 onerror="this.src='{{ site.url }}/assets/img/default-avatar.png'">
        </a>
        <h3><a href="{{ researcher[1].website }}">{{ researcher[1].name }}</a></h3>
        <p>{{ researcher[1].affiliation }}</p>
        <div class="researcher-projects">
            {% for project in researcher[1].projects %}
                {% assign proj = site.data.projects[project] %}
                {% if proj %}
                    <a href="{{ '/projects/' | append: proj.url | relative_url }}" class="project-tag">
                        {{ proj.title }}
                    </a>
                {% endif %}
            {% endfor %}
        </div>
    </div>
{% endfor %}
</div>

<style>
.researcher-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 1rem; /* Add padding to prevent edge overflow */
    max-width: 100%; /* Ensure grid doesn't exceed container */
}

/* Remove fixed columns - let auto-fit handle it */
@media (min-width: 1200px) {
    .researcher-grid {
        gap: 2.5rem;
        padding: 0; /* Remove padding on larger screens */
    }
}

.researcher-card {
    text-align: center;
    padding: 2rem 1rem;
    background: var(--bg-card);
    border-radius: 20px;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0; /* Prevent flex items from overflowing */
    overflow: hidden; /* Hide any overflow */
}

.researcher-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px var(--shadow-primary);
}

.researcher-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 4px solid var(--border);
    transition: all 0.3s ease;
    object-fit: cover;
}

.researcher-card:hover .researcher-img {
    border-color: var(--accent-primary);
}

.researcher-card h3 {
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
    width: 100%;
}

.researcher-card h3 a {
    color: var(--text-primary);
    text-decoration: none;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.researcher-card h3 a:hover {
    color: var(--accent-primary);
}

.researcher-card p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.researcher-projects {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    justify-content: center;
    width: 100%;
}

.project-tag {
    background: var(--bg-secondary);
    padding: 0.25rem 0.6rem;
    border-radius: 15px;
    font-size: 0.8rem;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    white-space: nowrap;
}

.project-tag:hover {
    background: var(--accent-primary);
    color: white;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .researcher-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
    }
    
    .researcher-card {
        padding: 1.5rem 1rem;
    }
}

@media (max-width: 480px) {
    .researcher-grid {
        grid-template-columns: 1fr;
        padding: 0;
    }
}
</style>