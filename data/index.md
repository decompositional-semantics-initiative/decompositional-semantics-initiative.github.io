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
                <th class="numeric-col">Train</th>
                <th class="numeric-col">Dev</th>
                <th class="numeric-col">Test</th>
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
                    <td class="numeric-col">{{ dataset.trainsize | default: "—" }}</td>
                    <td class="numeric-col">{{ dataset.devsize | default: "—" }}</td>
                    <td class="numeric-col">{{ dataset.testsize | default: "—" }}</td>
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

