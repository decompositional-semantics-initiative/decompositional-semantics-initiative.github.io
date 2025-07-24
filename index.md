---
layout: home
title: Decompositional Semantics Initiative
---

<section class="hero" id="home">
    <div class="floating-elements">
        <div class="float-elem"></div>
        <div class="float-elem"></div>
        <div class="float-elem"></div>
    </div>
    <div class="hero-content">
        <h1>
            <span class="gradient-text">Decompositional</span><br>
            Semantics Initiative
        </h1>
        <p class="hero-subtitle">
            Semantic annotation through simple, commonsensical questions.
        </p>
        <div class="cta-buttons">
            <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">
                Explore Projects →
            </a>
            <a href="{{ '/data/' | relative_url }}" class="btn btn-secondary">
                Access Data
            </a>
        </div>
    </div>
</section>

<section class="section" id="about">
    <div class="container">
        <div class="section-header">
            <h2><span class="gradient-text">Revolutionizing Semantic Annotation</span></h2>
        </div>
        <div class="grid grid-2">
            <div class="fade-in">
                <h3>The Problem</h3>
                <p>Traditional semantic annotation frameworks require highly trained experts, complex category systems, and struggle with non-prototypical instances. They're expensive, slow, and often fail to capture the nuances of natural language.</p>
            </div>
            <div class="fade-in">
                <h3>Our Solution</h3>
                <p>Decompose complex semantic questions into simple, intuitive queries that anyone can answer. By breaking down meaning into its fundamental components, we achieve expert-level quality through crowd-sourcing while maintaining theoretical rigor.</p>
            </div>
        </div>
    </div>
</section>

<section class="section" id="features">
    <div class="container">
        <div class="section-header">
            <h2><span class="gradient-text">Why Choose Decomp?</span></h2>
            <p>A semantic annotation paradigm that's simple and scalable</p>
        </div>
        <div class="features-grid">
            <div class="feature-card fade-in">
                <div class="feature-icon">
                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
                    </svg>
                </div>
                <h3>Simple Questions</h3>
                <p>Break down complex semantics into easy questions that anyone can answer. No linguistic expertise required.</p>
            </div>
            <div class="feature-card fade-in">
                <div class="feature-icon">
                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M13 3v18c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-5v-2h5c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-5V5h5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1zM3 3v4c0 .55.45 1 1 1h5v2H4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5v2H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
                    </svg>
                </div>
                <h3>Crowd-Scalable</h3>
                <p>Designed for massive annotation campaigns with built-in quality control and intuitive interfaces.</p>
            </div>
            <div class="feature-card fade-in">
                <div class="feature-icon">
                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                </div>
                <h3>Theory-Driven</h3>
                <p>Grounded in decades of linguistic research while remaining accessible to everyone.</p>
            </div>
            <div class="feature-card fade-in">
                <div class="feature-icon">
                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
                <h3>High Quality</h3>
                <p>Achieve annotation quality that rivals expert linguists through decomposition and aggregation.</p>
            </div>
            <div class="feature-card fade-in">
                <div class="feature-icon">
                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>
                <h3>Universal</h3>
                <p>Framework designed to work across languages and domains without modification.</p>
            </div>
            <div class="feature-card fade-in">
                <div class="feature-icon">
                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                    </svg>
                </div>
                <h3>Production Ready</h3>
                <p>Lightweight annotations perfect for real-world NLP systems and applications.</p>
            </div>
        </div>
    </div>
</section>

<section class="section" id="projects-preview">
    <div class="container">
        <div class="section-header">
            <h2><span class="gradient-text">Featured Projects</span></h2>
        </div>
        <div class="projects-grid">
            {% for project in site.data.projects limit:2 %}
            <a href="{{ '/projects/' | append: project[1].url | relative_url }}" class="project-card fade-in">
                <div class="project-header">
                    <h3>{{ project[1].title }}</h3>
                </div>
                <div class="project-body">
                    <p>{{ project[1].description | default: "" }}</p>
                    {% if project[1].datasets %}
                    <div class="project-stats">
                        <span class="stat">{{ project[1].datasets | size }} datasets</span>
                        <span class="stat">Active</span>
                    </div>
                    {% endif %}
                </div>
            </a>
            {% endfor %}
        </div>
        <div style="text-align: center; margin-top: 3rem;">
            <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">View All Projects →</a>
        </div>
    </div>
</section>

<section class="section" id="impact">
    <div class="container">
        <div class="section-header">
            <h2><span class="gradient-text">Our Impact</span></h2>
            <p>Numbers that showcase our contribution to the field</p>
        </div>
        <div class="grid grid-3">
            <div class="card fade-in">
                <h3 class="gradient-text">{{ site.data.projects | size }}</h3>
                <p>Research projects</p>
            </div>
            <div class="card fade-in">
                <h3 class="gradient-text">
                    {% assign total_datasets = 0 %}
                    {% for project in site.data.projects %}
                        {% if project[1].datasets %}
                            {% assign total_datasets = total_datasets | plus: project[1].datasets.size %}
                        {% endif %}
                    {% endfor %}
                    {{ total_datasets }}
                </h3>
                <p>Datasets available</p>
            </div>
            <div class="card fade-in">
                <h3 class="gradient-text">
                    {% assign total_papers = 0 %}
                    {% for project in site.data.projects %}
                        {% if project[1].references %}
                            {% assign total_papers = total_papers | plus: project[1].references.size %}
                        {% endif %}
                    {% endfor %}
                    {{ total_papers }}
                </h3>
                <p>Research publications</p>
            </div>
        </div>
    </div>
</section>

<section class="section" id="get-started">
    <div class="container">
        <div class="section-header">
            <h2><span class="gradient-text">Get Started</span></h2>
            <p>Let's get decomposing!</p>
        </div>
        <div class="grid grid-3">
            <div class="card fade-in">
                <h3>Use the Toolkit</h3>
                <p>Get started with the Decomp toolkit - our comprehensive Python library for working with UDS data.</p>
                <a href="https://github.com/decompositional-semantics-initiative/decomp" class="btn btn-secondary">
                    View on GitHub
                </a>
            </div>
            <div class="card fade-in">
                <h3>Explore Data</h3>
                <p>Access our growing collection of high-quality semantic annotations across multiple languages and domains.</p>
                <a href="{{ '/data/' | relative_url }}" class="btn btn-secondary">
                    Browse Datasets
                </a>
            </div>
            <div class="card fade-in">
                <h3>Collaborate</h3>
                <p>Join our community of researchers pushing the boundaries of semantic understanding.</p>
                <a href="mailto:contact@decomp.io" class="btn btn-secondary">
                    Get in Touch
                </a>
            </div>
        </div>
    </div>
</section>

