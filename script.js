// Academic Website JavaScript
// Simplified vanilla JS implementation with all React functionality

// Global state management
const state = {
    currentSection: 'home',
    mobileMenuOpen: false,
    selectedProject: null,
    projectFilter: 'all',
    publicationSearch: '',
    publicationYear: 'all'
};

// Project data
const projects = [
    {
        id: 1,
        title: "Diagnósticos de Salud Impulsados por IA",
        description: "Desarrollo de modelos de aprendizaje automático para la detección temprana de enfermedades utilizando análisis de imágenes médicas y datos de pacientes.",
        longDescription: "Este proyecto integral de investigación se enfoca en crear algoritmos avanzados de IA que pueden analizar datos de imágenes médicas (rayos X, resonancias magnéticas, tomografías) para detectar signos tempranos de varias enfermedades. El sistema combina técnicas de aprendizaje profundo con conocimiento médico tradicional para proporcionar asistencia diagnóstica precisa y confiable a profesionales de la salud. Nuestro enfoque incluye preprocesamiento de datos, extracción de características, entrenamiento de modelos y validación en múltiples centros médicos. El proyecto ha mostrado resultados prometedores en la detección de enfermedades cardiovasculares, cáncer y condiciones neurológicas con altas tasas de precisión.",
        image: "images/research-lab.jpg",
        category: "ai",
        status: "ongoing",
        year: "2023-2024",
        collaborators: 8,
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Docker"],
        links: {
            github: "https://github.com/ejemplo/healthcare-ai",
            paper: "https://arxiv.org/ejemplo/healthcare-paper"
        }
    },
    {
        id: 2,
        title: "Plataforma de Análisis de Datos Ambientales",
        description: "Creación de soluciones escalables para procesar y analizar datos de sensores ambientales a gran escala para monitorear el cambio climático.",
        longDescription: "Este proyecto involucra el desarrollo de una plataforma integral para recopilar, procesar y analizar datos ambientales de múltiples fuentes incluyendo imágenes satelitales, estaciones meteorológicas y sensores IoT. La plataforma utiliza técnicas avanzadas de ciencia de datos para identificar patrones, predecir cambios ambientales y proporcionar información útil para tomadores de decisiones y científicos ambientales. Las características clave incluyen procesamiento de datos en tiempo real, modelado predictivo y paneles de visualización interactivos. El sistema ha sido desplegado en asociación con varias agencias ambientales y ha contribuido a iniciativas de investigación climática.",
        image: "images/data-science.webp",
        category: "data",
        status: "completed",
        year: "2022-2023",
        collaborators: 12,
        technologies: ["Python", "Apache Spark", "MongoDB", "React", "D3.js"],
        links: {
            demo: "https://demo.env-analytics.org",
            paper: "https://nature.com/ejemplo/env-paper"
        }
    },
    {
        id: 3,
        title: "Sistema de Monitoreo de Salud Inteligente",
        description: "Desarrollo de dispositivos IoT y algoritmos para monitoreo continuo de signos vitales y detección de anomalías de salud.",
        longDescription: "Este proyecto se centra en crear un ecosistema completo de dispositivos de monitoreo de salud que pueden rastrear continuamente los signos vitales de los pacientes y detectar automáticamente anomalías que pueden indicar problemas de salud. El sistema incluye sensores portátiles, algoritmos de procesamiento de señales y modelos de aprendizaje automático para análisis predictivo. La plataforma está diseñada para uso tanto en hospitales como en el hogar, proporcionando alertas tempranas y análisis de tendencias de salud a largo plazo.",
        image: "images/teaching.jpg",
        category: "health",
        status: "ongoing",
        year: "2023-2025",
        collaborators: 6,
        technologies: ["Arduino", "Python", "TensorFlow", "React Native", "AWS"],
        links: {
            github: "https://github.com/ejemplo/health-monitor"
        }
    },
    {
        id: 4,
        title: "Análisis Predictivo del Clima",
        description: "Modelado avanzado para predicción del clima utilizando datos satelitales y técnicas de aprendizaje profundo.",
        longDescription: "Este proyecto de investigación utiliza técnicas avanzadas de aprendizaje profundo para mejorar la precisión de las predicciones climáticas. Combinamos datos de múltiples fuentes satelitales con modelos de redes neuronales para crear predicciones más precisas del clima a corto y largo plazo. El trabajo tiene aplicaciones importantes en agricultura, gestión de desastres y planificación urbana.",
        image: "images/university.jpg",
        category: "env",
        status: "planned",
        year: "2024-2026",
        collaborators: 10,
        technologies: ["Python", "TensorFlow", "Satellite Data", "GIS", "Cloud Computing"],
        links: {
            paper: "https://climate-journal.org/ejemplo"
        }
    },
    {
        id: 5,
        title: "Asistente de Educación con IA",
        description: "Desarrollo de un sistema de tutoría inteligente que se adapta al estilo de aprendizaje individual de cada estudiante.",
        longDescription: "Este proyecto innovador se centra en crear un sistema de tutoría personalizado que utiliza técnicas de IA para adaptarse al estilo de aprendizaje único de cada estudiante. El sistema analiza patrones de aprendizaje, identifica áreas de dificultad y proporciona contenido educativo personalizado y estrategias de enseñanza. Ha sido probado en múltiples instituciones educativas con resultados prometedores en la mejora del rendimiento académico.",
        image: "images/conference.png",
        category: "ai",
        status: "completed",
        year: "2021-2022",
        collaborators: 4,
        technologies: ["Python", "Natural Language Processing", "React", "PostgreSQL"],
        links: {
            demo: "https://edu-ai-assistant.org",
            github: "https://github.com/ejemplo/edu-ai"
        }
    },
    {
        id: 6,
        title: "Red de Sensores Ambientales IoT",
        description: "Implementación de una red distribuida de sensores para monitoreo en tiempo real de la calidad del aire y agua.",
        longDescription: "Este proyecto implementa una red distribuida de sensores IoT para monitorear continuamente la calidad del aire y agua en áreas urbanas y rurales. Los datos recopilados se procesan en tiempo real y se visualizan en una plataforma web accesible para investigadores, autoridades y el público general. El sistema ha sido fundamental para identificar fuentes de contaminación y monitorear la efectividad de políticas ambientales.",
        image: "images/data-science.webp",
        category: "env",
        status: "ongoing",
        year: "2023-2024",
        collaborators: 15,
        technologies: ["Arduino", "LoRaWAN", "Python", "InfluxDB", "Grafana"],
        links: {
            demo: "https://sensor-network.org"
        }
    }
];

// Publications data
const publications = [
    {
        id: 1,
        title: "Advances in Medical AI: A Comprehensive Review",
        authors: "Dr. Nombre Académico, Dr. María González, Dr. Juan Pérez",
        venue: "Nature Machine Intelligence",
        year: "2024",
        abstract: "Una revisión exhaustiva de los avances recientes en inteligencia artificial aplicada a la medicina, incluyendo diagnóstico por imágenes, análisis de datos de pacientes y medicina personalizada.",
        links: {
            pdf: "https://nature.com/articles/ejemplo1",
            doi: "10.1038/ejemplo1"
        }
    },
    {
        id: 2,
        title: "Ethical Considerations in Healthcare AI",
        authors: "Dr. Nombre Académico, Dr. Ana Martínez",
        venue: "Science",
        year: "2023",
        abstract: "Análisis de las consideraciones éticas en el desarrollo e implementación de sistemas de IA en el cuidado de la salud, incluyendo sesgo algorítmico, privacidad y transparencia.",
        links: {
            pdf: "https://science.org/articles/ejemplo2",
            doi: "10.1126/ejemplo2"
        }
    },
    {
        id: 3,
        title: "Deep Learning for Environmental Monitoring",
        authors: "Dr. Nombre Académico, Dr. Carlos Rodriguez, Dr. Laura Silva",
        venue: "Proceedings of ICML",
        year: "2022",
        abstract: "Aplicación de técnicas de aprendizaje profundo para el monitoreo ambiental utilizando datos de sensores distribuidos y análisis de imágenes satelitales.",
        links: {
            pdf: "https://icml.cc/ejemplo3",
            code: "https://github.com/ejemplo/env-monitoring"
        }
    },
    {
        id: 4,
        title: "AI-Driven Climate Change Prediction Models",
        authors: "Dr. Nombre Académico, Dr. Sofia López, Dr. Miguel Torres",
        venue: "Nature Climate Change",
        year: "2021",
        abstract: "Desarrollo de modelos predictivos impulsados por IA para mejorar la precisión de las predicciones del cambio climático a largo plazo.",
        links: {
            pdf: "https://nature.com/nclimate/ejemplo4",
            doi: "10.1038/nclimate.ejemplo4"
        }
    },
    {
        id: 5,
        title: "Personalized Learning Through AI Tutoring Systems",
        authors: "Dr. Nombre Académico, Dr. Patricia Hernández",
        venue: "Computers & Education",
        year: "2020",
        abstract: "Investigación sobre sistemas de tutoría inteligente que se adaptan al estilo de aprendizaje individual de cada estudiante utilizando técnicas de IA.",
        links: {
            pdf: "https://sciencedirect.com/ejemplo5",
            doi: "10.1016/ejemplo5"
        }
    }
];

// DOM elements
let elements = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeEventListeners();
    initializeProjects();
    initializePublications();
    updateNavigation();
});

// Initialize DOM elements
function initializeElements() {
    elements = {
        // Navigation
        navbar: document.getElementById('navbar'),
        navLinks: document.querySelectorAll('.nav-link'),
        mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        mobileNav: document.getElementById('mobileNav'),
        
        // Sections
        sections: document.querySelectorAll('.section'),
        
        // Projects
        projectsGrid: document.getElementById('projectsGrid'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        projectModal: document.getElementById('projectModal'),
        modalClose: document.getElementById('modalClose'),
        modalTitle: document.getElementById('modalTitle'),
        modalImage: document.getElementById('modalImage'),
        modalCategory: document.getElementById('modalCategory'),
        modalStatus: document.getElementById('modalStatus'),
        modalYear: document.getElementById('modalYear'),
        modalDescription: document.getElementById('modalDescription'),
        modalTechnologies: document.getElementById('modalTechnologies'),
        modalLinks: document.getElementById('modalLinks'),
        
        // Publications
        publicationsList: document.getElementById('publicationsList'),
        publicationSearch: document.getElementById('publicationSearch'),
        yearFilter: document.getElementById('yearFilter'),
        
        // Contact form
        contactForm: document.getElementById('contactForm'),
        
        // CV
        downloadCV: document.getElementById('downloadCV'),
        
        // Notification
        notification: document.getElementById('notification'),
        notificationMessage: document.getElementById('notificationMessage')
    };
}

// Initialize event listeners
function initializeEventListeners() {
    // Navigation event listeners
    elements.navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    elements.mobileNavLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Mobile menu toggle
    elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Project filter buttons
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', handleProjectFilter);
    });
    
    // Modal event listeners
    elements.modalClose.addEventListener('click', closeModal);
    elements.projectModal.addEventListener('click', function(e) {
        if (e.target === elements.projectModal) {
            closeModal();
        }
    });
    
    // Publications search and filter
    elements.publicationSearch.addEventListener('input', handlePublicationSearch);
    elements.yearFilter.addEventListener('change', handleYearFilter);
    
    // Contact form
    elements.contactForm.addEventListener('submit', handleContactForm);
    
    // CV download
    elements.downloadCV.addEventListener('click', handleCVDownload);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Scroll to top on page load
    window.addEventListener('load', function() {
        window.scrollTo(0, 0);
    });
}

// Navigation functions
function handleNavigation(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const sectionId = href.substring(1); // Remove the '#'
    
    showSection(sectionId);
    closeMobileMenu();
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showSection(sectionId) {
    // Hide all sections
    elements.sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        state.currentSection = sectionId;
        updateNavigation();
        
        // Add fade-in animation
        targetSection.classList.add('fade-in');
        setTimeout(() => {
            targetSection.classList.remove('fade-in');
        }, 500);
    }
}

function updateNavigation() {
    // Update desktop navigation
    elements.navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === state.currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Update mobile navigation
    elements.mobileNavLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        if (href === state.currentSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    
    if (state.mobileMenuOpen) {
        elements.mobileNav.classList.add('active');
        elements.mobileMenuBtn.classList.add('active');
    } else {
        elements.mobileNav.classList.remove('active');
        elements.mobileMenuBtn.classList.remove('active');
    }
}

function closeMobileMenu() {
    state.mobileMenuOpen = false;
    elements.mobileNav.classList.remove('active');
    elements.mobileMenuBtn.classList.remove('active');
}

// Project functions
function initializeProjects() {
    renderProjects();
}

function renderProjects() {
    const filteredProjects = filterProjects();
    elements.projectsGrid.innerHTML = '';
    
    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        elements.projectsGrid.appendChild(projectCard);
    });
}

function filterProjects() {
    if (state.projectFilter === 'all') {
        return projects;
    }
    
    return projects.filter(project => project.category === state.projectFilter);
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    
    const statusClass = `project-status ${project.status}`;
    const statusText = {
        'ongoing': 'En Progreso',
        'completed': 'Completado',
        'planned': 'Planificado'
    }[project.status];
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <div class="project-meta">
                <span class="project-category">${getCategoryName(project.category)}</span>
                <span class="${statusClass}">${statusText}</span>
                <span class="project-year">${project.year}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openProjectModal(project));
    
    return card;
}

function getCategoryName(category) {
    const categoryNames = {
        'ai': 'IA & ML',
        'data': 'Ciencia de Datos',
        'health': 'Salud',
        'env': 'Medio Ambiente'
    };
    return categoryNames[category] || category;
}

function handleProjectFilter(e) {
    const category = e.target.getAttribute('data-category');
    state.projectFilter = category;
    
    // Update active filter button
    elements.filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Re-render projects
    renderProjects();
}

function openProjectModal(project) {
    state.selectedProject = project;
    
    // Populate modal content
    elements.modalTitle.textContent = project.title;
    elements.modalImage.src = project.image;
    elements.modalImage.alt = project.title;
    elements.modalCategory.textContent = getCategoryName(project.category);
    elements.modalStatus.textContent = {
        'ongoing': 'En Progreso',
        'completed': 'Completado',
        'planned': 'Planificado'
    }[project.status];
    elements.modalStatus.className = `project-status ${project.status}`;
    elements.modalYear.textContent = project.year;
    elements.modalDescription.textContent = project.longDescription;
    
    // Populate technologies
    elements.modalTechnologies.innerHTML = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');
    
    // Populate links
    elements.modalLinks.innerHTML = '';
    if (project.links) {
        Object.entries(project.links).forEach(([type, url]) => {
            const linkText = {
                'github': 'Ver Código',
                'demo': 'Ver Demo',
                'paper': 'Leer Artículo'
            }[type] || type;
            
            const linkElement = document.createElement('a');
            linkElement.href = url;
            linkElement.className = 'project-link';
            linkElement.target = '_blank';
            linkElement.innerHTML = `
                <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                ${linkText}
            `;
            elements.modalLinks.appendChild(linkElement);
        });
    }
    
    // Show modal
    elements.projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    elements.projectModal.classList.remove('active');
    document.body.style.overflow = '';
    state.selectedProject = null;
}

// Publications functions
function initializePublications() {
    renderPublications();
}

function renderPublications() {
    const filteredPublications = filterPublications();
    elements.publicationsList.innerHTML = '';
    
    filteredPublications.forEach(publication => {
        const publicationItem = createPublicationItem(publication);
        elements.publicationsList.appendChild(publicationItem);
    });
}

function filterPublications() {
    let filtered = publications;
    
    // Filter by search term
    if (state.publicationSearch) {
        filtered = filtered.filter(pub => 
            pub.title.toLowerCase().includes(state.publicationSearch.toLowerCase()) ||
            pub.authors.toLowerCase().includes(state.publicationSearch.toLowerCase()) ||
            pub.venue.toLowerCase().includes(state.publicationSearch.toLowerCase()) ||
            pub.abstract.toLowerCase().includes(state.publicationSearch.toLowerCase())
        );
    }
    
    // Filter by year
    if (state.publicationYear !== 'all') {
        filtered = filtered.filter(pub => pub.year === state.publicationYear);
    }
    
    return filtered;
}

function createPublicationItem(publication) {
    const item = document.createElement('div');
    item.className = 'publication-item';
    
    const linksHtml = Object.entries(publication.links)
        .map(([type, url]) => {
            const linkText = {
                'pdf': 'PDF',
                'doi': 'DOI',
                'code': 'Código'
            }[type] || type;
            
            return `
                <a href="${url}" class="publication-link" target="_blank">
                    <svg class="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    ${linkText}
                </a>
            `;
        })
        .join('');
    
    item.innerHTML = `
        <div class="publication-header">
            <div class="publication-content">
                <h3 class="publication-title">${publication.title}</h3>
                <p class="publication-authors">${publication.authors}</p>
                <p class="publication-venue">${publication.venue}</p>
            </div>
            <div class="publication-year">${publication.year}</div>
        </div>
        <p class="publication-abstract">${publication.abstract}</p>
        <div class="publication-links">
            ${linksHtml}
        </div>
    `;
    
    return item;
}

function handlePublicationSearch(e) {
    state.publicationSearch = e.target.value;
    renderPublications();
}

function handleYearFilter(e) {
    state.publicationYear = e.target.value;
    renderPublications();
}

// Contact form functions
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    showNotification('¡Mensaje enviado con éxito! Te responderé pronto.');
    
    // Reset form
    e.target.reset();
    
    // In a real application, you would send this data to a server
    console.log('Form data:', data);
}

// CV functions
function handleCVDownload(e) {
    e.preventDefault();
    showNotification('Generando CV en PDF... La descarga comenzará en un momento.');
    
    // In a real application, you would generate and download the actual PDF
    setTimeout(() => {
        showNotification('CV descargado con éxito.');
    }, 2000);
}

// Utility functions
function showNotification(message) {
    elements.notificationMessage.textContent = message;
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

function handleKeyboardNavigation(e) {
    // Close modal with Escape key
    if (e.key === 'Escape' && state.selectedProject) {
        closeModal();
    }
    
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && state.mobileMenuOpen) {
        closeMobileMenu();
    }
}

// Smooth scrolling for internal links
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Intersection Observer for scroll animations (optional enhancement)
function initializeScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and items
    document.querySelectorAll('.highlight-card, .project-card, .publication-item, .course-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeScrollAnimations, 100);
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
    const hash = window.location.hash.substring(1) || 'home';
    showSection(hash);
});

// Update URL hash when navigating
function updateURL(sectionId) {
    history.pushState(null, null, `#${sectionId}`);
}

// Enhanced navigation function that updates URL
function showSectionWithURL(sectionId) {
    showSection(sectionId);
    updateURL(sectionId);
}

// Initialize section based on URL hash on page load
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1) || 'home';
    showSection(hash);
});

// Debounce function for search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to publication search
if (elements.publicationSearch) {
    elements.publicationSearch.removeEventListener('input', handlePublicationSearch);
    elements.publicationSearch.addEventListener('input', debounce(handlePublicationSearch, 300));
}

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error handling for image loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            // Optionally set a fallback image
            // this.src = 'images/fallback.jpg';
        });
    });
});

// Accessibility improvements
function initializeAccessibility() {
    // Add ARIA labels and roles where needed
    elements.mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
    elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    
    // Update aria-expanded when mobile menu toggles
    const originalToggleMobileMenu = toggleMobileMenu;
    toggleMobileMenu = function() {
        originalToggleMobileMenu();
        elements.mobileMenuBtn.setAttribute('aria-expanded', state.mobileMenuOpen.toString());
    };
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Export functions for potential testing or external use
window.AcademicWebsite = {
    showSection,
    toggleMobileMenu,
    openProjectModal,
    closeModal,
    showNotification,
    state
};
