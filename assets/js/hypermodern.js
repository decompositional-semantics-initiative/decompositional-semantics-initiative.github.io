// Hypermodern Decomp JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileToggle.addEventListener('click', function() {
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Mobile submenu toggles
    const submenuToggles = document.querySelectorAll('.has-submenu');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('active');
            this.querySelector('.arrow').textContent = submenu.classList.contains('active') ? '▲' : '▼';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offset = 80; // navbar height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger animations for grid items
                if (entry.target.parentElement.classList.contains('grid') || 
                    entry.target.parentElement.classList.contains('features-grid') ||
                    entry.target.parentElement.classList.contains('projects-grid')) {
                    
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .feature-card, .project-card, .researcher-card, .card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add fade-in class to elements
    document.querySelectorAll('.section-header, .hero-content').forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.float-elem');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((elem, index) => {
            const speed = 0.5 + (index * 0.2);
            elem.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Dynamic particle background (optional enhancement)
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(99, 102, 241, 0.5);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            z-index: -1;
        `;
        
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const duration = 5000 + Math.random() * 5000;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        
        document.body.appendChild(particle);
        
        // Animate particle
        particle.animate([
            { 
                opacity: 0,
                transform: 'translate(0, 0) scale(0)'
            },
            { 
                opacity: 1,
                transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(1)`
            },
            { 
                opacity: 0,
                transform: `translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(0)`
            }
        ], {
            duration: duration,
            easing: 'ease-in-out'
        }).onfinish = () => particle.remove();
    }
    
    // Create particles periodically
    if (window.innerWidth > 768) {
        setInterval(createParticle, 300);
    }
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // Copy code functionality
    document.querySelectorAll('pre').forEach(pre => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.25rem 0.75rem;
            background: var(--accent-primary);
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 0.8rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        pre.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });
        
        button.addEventListener('click', async () => {
            const code = pre.querySelector('code').textContent;
            await navigator.clipboard.writeText(code);
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        });
    });
    
    // Enhanced hover effects
    document.querySelectorAll('.card, .feature-card, .project-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            this.style.background = `
                radial-gradient(
                    circle at ${x}% ${y}%,
                    rgba(99, 102, 241, 0.1) 0%,
                    transparent 50%
                ),
                var(--bg-card)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'var(--bg-card)';
        });
    });
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(elem => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = elem.getAttribute('data-tooltip');
        tooltip.style.cssText = `
            position: absolute;
            background: var(--bg-card);
            color: var(--text-primary);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.9rem;
            pointer-events: none;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 1000;
            border: 1px solid var(--border);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        
        document.body.appendChild(tooltip);
        
        elem.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.bottom + 10 + 'px';
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
        });
        
        elem.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
        });
    });
    
    // Page load animations
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero elements
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((elem, index) => {
            elem.style.opacity = '0';
            elem.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                elem.style.transition = 'all 0.8s ease';
                elem.style.opacity = '1';
                elem.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });
    
    // Form interactions
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Loading states
    function addLoadingState(element) {
        element.classList.add('loading');
        element.setAttribute('data-original-text', element.textContent);
        element.innerHTML = '<span class="spinner"></span> Loading...';
    }
    
    function removeLoadingState(element) {
        element.classList.remove('loading');
        element.textContent = element.getAttribute('data-original-text');
    }
    
    // Export functions for use in other scripts
    window.DecompUI = {
        addLoadingState,
        removeLoadingState,
        createParticle,
        observer
    };
});