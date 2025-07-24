---
layout: page
title: Data
subtitle: "Datasets from the Decompositional Semantics Initiative"
---

<div class="data-stats">
    <div class="stat-card">
        <h3 class="gradient-text">{{ site.data.projects | size }}</h3>
        <p>Projects</p>
    </div>
    <div class="stat-card">
        <h3 class="gradient-text">
            {% assign total_datasets = 0 %}
            {% for project in site.data.projects %}
                {% if project[1].datasets %}
                    {% assign total_datasets = total_datasets | plus: project[1].datasets.size %}
                {% endif %}
            {% endfor %}
            {{ total_datasets }}
        </h3>
        <p>Datasets</p>
    </div>
    <div class="stat-card">
        <h3 class="gradient-text">200K+</h3>
        <p>Annotations</p>
    </div>
</div>

<div class="data-intro card">
    <div class="intro-content">
        <h3>Universal Decompositional Semantics</h3>
        <p>
            The <strong>Universal Decompositional Semantics (UDS)</strong> dataset represents a new approach to semantic annotation, 
            breaking down complex meaning into simple, answerable questions.
        </p>
        <p>
            Access the complete dataset through our <a href="https://github.com/decompositional-semantics-initiative/decomp">decomp toolkit</a>, 
            or download individual datasets below. Learn more about our methodology in 
            <a href="https://www.aclweb.org/anthology/2020.lrec-1.699.pdf">our LREC 2020 paper</a>.
        </p>
        <div class="cta-buttons">
            <a href="https://github.com/decompositional-semantics-initiative/decomp" 
              target="_blank"
              style="display: inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white !important; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1.1rem; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);">
                <span style="color: white !important;">Get Decomp Toolkit →</span>
            </a>
        </div>
    </div>
</div>

<h2 style="margin-bottom: 2rem;"><span class="gradient-text">Available Datasets</span></h2>

<div class="data-table">
    <table>
        <thead>
            <tr>
                <th>Project</th>
                <th>Dataset</th>
                <th>Corpus</th>
                <th>Train</th>
                <th>Dev</th>
                <th>Test</th>
                <th>Download</th>
            </tr>
        </thead>
        <tbody>
        {% for project in site.data.projects %}
            {% assign currproj = project[1] %}
            {% if currproj.datasets %}
                {% for dataset in currproj.datasets %}
                <tr>
                    {% if forloop.first %}
                    <td rowspan="{{ currproj.datasets.size }}">
                        <a href="{{ '/projects/' | append: currproj.url | relative_url }}">{{ currproj.title }}</a>
                    </td>
                    {% endif %}
                    <td>{{ dataset.name | default: "—" }}</td>
                    <td>{{ dataset.corpus | default: "—" }}</td>
                    <td>{{ dataset.trainsize | default: "—" }}</td>
                    <td>{{ dataset.devsize | default: "—" }}</td>
                    <td>{{ dataset.testsize | default: "—" }}</td>
                    <td>
                        <a href="{{ '/projects/' | append: currproj.url | append: dataset.url | relative_url }}" 
                           class="download-btn"
                           title="Download {{ dataset.name }} dataset">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                            </svg>
                            <span>
                            {% if dataset.filetype %}
                                {{ dataset.filetype | upcase }}
                            {% elsif dataset.url contains '.zip' %}
                                ZIP
                            {% elsif dataset.url contains '.tar.gz' %}
                                TAR.GZ
                            {% elsif dataset.url contains '.csv' %}
                                CSV
                            {% else %}
                                Download
                            {% endif %}
                            </span>
                        </a>
                    </td>
                </tr>
                {% endfor %}
            {% endif %}
        {% endfor %}
        </tbody>
    </table>
</div>

<style>
/* Statistics Cards */
.data-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.stat-card {
    background: var(--bg-card);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid var(--border);
    text-align: center;
}

.stat-card h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.stat-card p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin: 0;
}

/* Data Introduction Card */
.data-intro {
    margin-bottom: 3rem;
    padding: 3rem;
    background: var(--bg-card);
    border-radius: 24px;
    border: 1px solid var(--border);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.data-intro::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    pointer-events: none;
}

.intro-content {
    position: relative;
    z-index: 1;
}

.intro-content h3 {
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    font-size: 1.5rem;
}

.intro-content p {
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--text-secondary);
}

.intro-content p:last-of-type {
    margin-bottom: 2rem;
}

.data-intro a {
    color: var(--accent-primary);
    font-weight: 600;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.data-intro a:hover {
    color: var(--accent-secondary);
    border-bottom-color: var(--accent-secondary);
}

/* Buttons */
.cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn {
    display: inline-block;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    z-index: 10;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    color: white;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

/* Data Table */
.data-table {
    overflow-x: auto;
    margin-bottom: 3rem;
    border-radius: 20px;
}

.data-table table {
    min-width: 800px;
}

.data-table td[rowspan] {
    vertical-align: middle;
    font-weight: 600;
    background: var(--bg-secondary);
}

.data-table td[rowspan] a {
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: 700;
}

.data-table td[rowspan] a:hover {
    color: var(--accent-secondary);
}

.data-table tbody tr:nth-child(even) {
    background: rgba(99, 102, 241, 0.05);
}

/* Download Buttons */
.download-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 1rem;
    background: var(--accent-primary);
    color: white;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
    white-space: nowrap;
}

.download-btn:hover {
    background: var(--accent-secondary);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow-primary);
}

.download-btn svg {
    margin-right: 0.5rem;
    flex-shrink: 0;
    fill: white;
}

.download-btn span {
    color: white;
    display: inline-block;
    line-height: 1;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .data-stats {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .data-intro {
        padding: 2rem 1.5rem;
    }
    
    .intro-content h3 {
        font-size: 1.3rem;
    }
    
    .intro-content p {
        font-size: 1rem;
    }
    
    .btn {
        padding: 0.8rem 2rem;
        font-size: 1rem;
    }
    
    .data-table table {
        font-size: 0.85rem;
    }
    
    .data-table th,
    .data-table td {
        padding: 0.75rem 0.5rem;
    }
    
    .download-btn {
        padding: 0.3rem 0.8rem;
        font-size: 0.8rem;
    }
    
    .download-btn svg {
        width: 14px;
        height: 14px;
    }
}
</style>