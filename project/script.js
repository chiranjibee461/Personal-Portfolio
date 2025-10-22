const typewriterPhrases = [
    "Innovative, user-friendly, and visually appealing websites.",
    "Dynamic, interactive, and performance-driven web solutions.",
    "Clean, elegant, and optimized web design."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterDelay = 100;

const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product management, shopping cart functionality, secure payment processing with Stripe, and real-time analytics dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        features: [
            "User authentication and authorization",
            "Product catalog with advanced search and filtering",
            "Shopping cart and wishlist functionality",
            "Secure payment processing with Stripe integration",
            "Order tracking and management",
            "Admin dashboard with analytics",
            "Responsive design for all devices"
        ],
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Task Automation System",
        description: "An intelligent automation framework that streamlines repetitive tasks using AI-powered decision making. Built with Python and TensorFlow for machine learning capabilities.",
        tech: ["Python", "TensorFlow", "Docker"],
        features: [
            "AI-powered task recognition and execution",
            "Customizable automation workflows",
            "Integration with popular tools and services",
            "Real-time monitoring and logging",
            "Containerized deployment with Docker",
            "Scalable architecture for enterprise use"
        ],
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "RESTful API Gateway",
        description: "A high-performance API gateway with comprehensive features including authentication, rate limiting, caching, and extensive documentation. Built for scalability and reliability.",
        tech: ["Express", "PostgreSQL", "Redis"],
        features: [
            "JWT-based authentication and authorization",
            "Rate limiting and throttling",
            "Request/response caching with Redis",
            "API versioning and documentation",
            "Comprehensive error handling",
            "Load balancing and health checks",
            "Detailed logging and monitoring"
        ],
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Real-Time Chat Application",
        description: "A modern messaging platform featuring end-to-end encryption, file sharing, video calls, and real-time notifications. Built with React and Socket.io for seamless real-time communication.",
        tech: ["React", "Socket.io", "WebRTC"],
        features: [
            "End-to-end encrypted messaging",
            "Real-time message delivery",
            "File and media sharing",
            "Video and voice calls with WebRTC",
            "Group chat functionality",
            "User presence and typing indicators",
            "Message history and search"
        ],
        image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Distributed Cache System",
        description: "A high-performance distributed caching solution with automatic failover, data replication, and support for multiple cache strategies. Built with Java and Spring Framework.",
        tech: ["Java", "Spring", "Redis"],
        features: [
            "Distributed caching across multiple nodes",
            "Automatic failover and recovery",
            "Data replication for high availability",
            "Multiple eviction policies",
            "Cache warming and preloading",
            "Monitoring and metrics",
            "Easy integration with existing systems"
        ],
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Microservices Architecture",
        description: "A scalable microservices platform with service discovery, load balancing, and comprehensive monitoring. Built with Go and Kubernetes for cloud-native deployments.",
        tech: ["Go", "Kubernetes", "gRPC"],
        features: [
            "Service discovery and registration",
            "Load balancing and traffic management",
            "Inter-service communication with gRPC",
            "Containerized deployment with Kubernetes",
            "Distributed tracing and monitoring",
            "Auto-scaling based on load",
            "Circuit breaker pattern implementation"
        ],
        image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

const certificateImages = [
    "az900.png",
    "az204.png",
    "az400.png",
    "AIasso.png",
    "github.png",
    "ocfa.png",
    "https://images.pexels.com/photos/3401897/pexels-photo-3401897.jpeg?auto=compress&cs=tinysrgb&w=800"
];

function typeWriter() {
    const typewriterElement = document.querySelector('.typewriter-text');

    if (!typewriterElement) return;

    const currentPhrase = typewriterPhrases[phraseIndex];

    if (!isDeleting && charIndex < currentPhrase.length) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typewriterDelay = 100;
    } else if (isDeleting && charIndex > 0) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typewriterDelay = 50;
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        }
        typewriterDelay = isDeleting ? 1000 : 2000;
    }

    setTimeout(typeWriter, typewriterDelay);
}

function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(0, 217, 255, ${Math.random() * 0.5})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
        particle.style.animationDelay = Math.random() * 5 + 's';

        particlesContainer.appendChild(particle);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            50% {
                transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            }
        }
    `;
    document.head.appendChild(style);
}

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'light' ? '◑' : '◐';

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.textContent = newTheme === 'light' ? '◑' : '◐';
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));
}

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(bar => observer.observe(bar));
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInScale 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

function initProjectModals() {
    const projectModal = document.getElementById('projectModal');
    const projectLinks = document.querySelectorAll('.project-link');
    const modalClose = projectModal.querySelector('.modal-close');

    projectLinks.forEach(link => {
        link.addEventListener('click', () => {
            const projectIndex = link.getAttribute('data-project');
            const project = projectsData[projectIndex];

            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalDescription').textContent = project.description;
            document.getElementById('modalImage').src = project.image;

            const modalTech = document.getElementById('modalTech');
            modalTech.innerHTML = '';
            project.tech.forEach(tech => {
                const badge = document.createElement('span');
                badge.className = 'tech-badge';
                badge.textContent = tech;
                modalTech.appendChild(badge);
            });

            const modalFeatures = document.getElementById('modalFeatures');
            modalFeatures.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeatures.appendChild(li);
            });

            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose.addEventListener('click', () => {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

function initCertificateModals() {
    const certModal = document.getElementById('certModal');
    const certViewButtons = document.querySelectorAll('.cert-view');
    const modalClose = certModal.querySelector('.modal-close');

    certViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const certIndex = button.getAttribute('data-cert');
            const certImage = certificateImages[certIndex];

            document.getElementById('certImage').src = certImage;
            certModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose.addEventListener('click', () => {
        certModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            certModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.querySelector('.form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        formStatus.classList.remove('error');
        formStatus.classList.add('success');
        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';

        contactForm.reset();

        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    });
}

function initPreloader() {
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1500);
    });
}

function smoothScrollToSection() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function init() {
    initPreloader();
    initNavbar();
    initThemeToggle();
    initScrollAnimations();
    initSkillBars();
    initProjectFilters();
    initProjectModals();
    initCertificateModals();
    initBackToTop();
    initContactForm();
    smoothScrollToSection();

    setTimeout(() => {
        createParticles();
        typeWriter();
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}