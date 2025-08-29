// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('AyurVeda Nexus initialized!');
    
    // Hide preloader after page loads
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('hidden');
        }
    }, 1000);
    
    // Initialize all interactive elements
    initializeNavigation();
    initializeHeroButtons();
    initializeProductCards();
    initializeContactForm();
    initializeFAQ();
    initializeNewsletter();
    initializeAnimations();
    initializeQuantumScanner();
    initializeTestimonialSlider();
    initializeBackToTop();
    initializeShoppingCart();
    initializeProductViewer();
    initializeScrollEffects();
    initializeCounters();
    initializeSearch();
    initializeFilters();
    initialize3DHologram();
});
// Navigation functionality
function initializeNavigation() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default if it's a placeholder link
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                showPageMessage(this.textContent);
            }
            
            // Close mobile menu when link is clicked
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
}
// Hero section buttons
function initializeHeroButtons() {
    const beginJourneyBtn = document.getElementById('beginJourney');
    const getStartedBtn = document.getElementById('getStarted');
    const watchDemoBtn = document.getElementById('watchDemo');
    const learnMoreBtn = document.getElementById('learnMore');
    
    if (beginJourneyBtn) {
        beginJourneyBtn.addEventListener('click', function() {
            showWelcomeMessage();
        });
    }
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            showWelcomeMessage();
        });
    }
    
    if (watchDemoBtn) {
        watchDemoBtn.addEventListener('click', function() {
            showNotification('Demo video coming soon!');
        });
    }
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            const aboutContent = document.querySelector('.about-content');
            if (aboutContent) {
                aboutContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}
// Product cards functionality
function initializeProductCards() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const view3DButtons = document.querySelectorAll('.view-3d');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const price = this.getAttribute('data-price');
            if (product && price) {
                addToCart(product, price);
            }
        });
    });
    
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card') || this.closest('.holo-product-card');
            if (productCard) {
                const productName = productCard.querySelector('h3').textContent;
                showNotification(`Quick view for ${productName} coming soon!`);
            }
        });
    });
    
    view3DButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card') || this.closest('.holo-product-card');
            if (productCard) {
                const productName = productCard.querySelector('h3').textContent;
                const productPrice = productCard.querySelector('.price').textContent;
                const productDesc = productCard.querySelector('p').textContent;
                openProductViewer(productName, productPrice, productDesc);
            }
        });
    });
}
// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Show success message
            const formSuccess = document.getElementById('formSuccess');
            if (formSuccess) {
                formSuccess.style.display = 'block';
                contactForm.style.display = 'none';
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'block';
                    formSuccess.style.display = 'none';
                }, 5000);
            }
            
            // In a real implementation, you would send this data to a server
            console.log('Form submitted:', { name, email, subject, message });
        });
    }
}
// FAQ functionality
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}
// Newsletter functionality
function initializeNewsletter() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                showNotification('Thank you for subscribing! Check your email for confirmation.');
                this.reset();
            }
        });
    });
}
// Animations on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}
// Quantum scanner functionality
function initializeQuantumScanner() {
    const biometricScanner = document.getElementById('biometricScanner');
    
    if (biometricScanner) {
        biometricScanner.addEventListener('click', function() {
            console.log('Scanning biometric data...');
            
            // Simulate scanning
            const scannerPulse = this.querySelector('.scanner-pulse');
            const scannerWave = this.querySelector('.scanner-wave');
            const progressFill = this.querySelector('.progress-fill');
            const progressText = this.querySelector('.progress-text');
            
            if (scannerPulse) {
                scannerPulse.style.animation = 'none';
                setTimeout(() => {
                    scannerPulse.style.animation = 'scanner-pulse 2s infinite';
                }, 10);
            }
            
            if (scannerWave) {
                scannerWave.style.animation = 'none';
                setTimeout(() => {
                    scannerWave.style.animation = 'scanner-wave 3s infinite';
                }, 10);
            }
            
            // Simulate progress
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 5;
                if (progressFill) {
                    progressFill.style.width = progress + '%';
                }
                if (progressText) {
                    progressText.textContent = `Scanning... ${progress}%`;
                }
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    if (progressText) {
                        progressText.textContent = 'Scan complete!';
                    }
                    
                    // Simulate analysis
                    setTimeout(() => {
                        analyzeDoshaProfile();
                    }, 1000);
                }
            }, 100);
        });
    }
}
// Simulate dosha analysis
function analyzeDoshaProfile() {
    console.log('Analyzing dosha profile...');
    
    // Animate dosha bars
    const doshaBars = document.querySelectorAll('.dosha-fill');
    if (doshaBars.length > 0) {
        // Animate dosha bars
        const widths = ['45%', '30%', '25%']; // Vata, Pitta, Kapha
        doshaBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = widths[index];
            }, index * 300);
        });
        
        // Show analysis complete message
        const analysisMessage = document.createElement('div');
        analysisMessage.className = 'analysis-message';
        analysisMessage.textContent = 'Dosha analysis complete!';
        
        const doshaAnalysis = document.querySelector('.dosha-analysis');
        if (doshaAnalysis) {
            doshaAnalysis.appendChild(analysisMessage);
            
            setTimeout(() => {
                analysisMessage.remove();
            }, 3000);
        }
    }
}
// Testimonial slider
function initializeTestimonialSlider() {
    const testimonialSlider = document.getElementById('testimonialSlider');
    
    if (!testimonialSlider) {
        return;
    }
    
    const testimonialCards = testimonialSlider.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonialCards.length === 0) {
        return;
    }
    
    let currentSlide = 0;
    
    // Show first slide
    showSlide(currentSlide);
    
    // Auto-play slider
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
    }
    
    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            resetInterval();
        });
    });
    
    function showSlide(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
        
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialCards.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        showSlide(currentSlide);
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
}
// Back to top button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
// Shopping cart functionality
function initializeShoppingCart() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.querySelector('.cart-count');
    
    if (!cartModal || !cartItems || !cartTotal || !cartCount) {
        return;
    }
    
    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('ayurvedaCart')) || [];
    
    // Update cart UI
    updateCartUI();
    
    // Open cart modal
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartModal.classList.add('active');
        });
    }
    
    // Close cart modal
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }
    
    // Close cart when clicking outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
    
    // Add to cart function
    window.addToCart = function(product, price) {
        const existingItem = cart.find(item => item.product === product);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                product,
                price: parseInt(price),
                quantity: 1
            });
        }
        
        saveCart();
        updateCartUI();
        showNotification(`${product} added to cart!`);
    };
    
    // Remove from cart
    function removeFromCart(product) {
        cart = cart.filter(item => item.product !== product);
        saveCart();
        updateCartUI();
    }
    
    // Update quantity
    function updateQuantity(product, change) {
        const item = cart.find(item => item.product === product);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(product);
            } else {
                saveCart();
                updateCartUI();
            }
        }
    }
    
    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('ayurvedaCart', JSON.stringify(cart));
    }
    
    // Update cart UI
    function updateCartUI() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Update cart items
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="https://images.unsplash.com/photo-1590987427114-5e6e5e5e5e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="${item.product}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.product}</h4>
                        <div class="cart-item-price">₹${item.price * item.quantity}</div>
                        <div class="cart-item-quantity">
                            <button class="decrease-quantity">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase-quantity">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove">&times;</button>
                `;
                
                // Add event listeners
                cartItem.querySelector('.decrease-quantity').addEventListener('click', () => {
                    updateQuantity(item.product, -1);
                });
                
                cartItem.querySelector('.increase-quantity').addEventListener('click', () => {
                    updateQuantity(item.product, 1);
                });
                
                cartItem.querySelector('.cart-item-remove').addEventListener('click', () => {
                    removeFromCart(item.product);
                });
                
                cartItems.appendChild(cartItem);
            });
        }
        
        // Update cart total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `₹${total}`;
    }
}
// Product viewer functionality
function initializeProductViewer() {
    const productViewerModal = document.getElementById('productViewerModal');
    const closeViewer = document.getElementById('closeViewer');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetViewBtn = document.getElementById('resetView');
    const viewerAddToCart = document.getElementById('viewerAddToCart');
    
    if (!productViewerModal || !closeViewer) {
        return;
    }
    
    let currentProduct = null;
    let zoomLevel = 1;
    
    // Close viewer
    closeViewer.addEventListener('click', () => {
        productViewerModal.classList.remove('active');
    });
    
    // Close viewer when clicking outside
    productViewerModal.addEventListener('click', (e) => {
        if (e.target === productViewerModal) {
            productViewerModal.classList.remove('active');
        }
    });
    
    // Zoom controls
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            zoomLevel = Math.min(zoomLevel + 0.2, 2);
            updateZoom();
        });
    }
    
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            zoomLevel = Math.max(zoomLevel - 0.2, 0.5);
            updateZoom();
        });
    }
    
    if (resetViewBtn) {
        resetViewBtn.addEventListener('click', () => {
            zoomLevel = 1;
            updateZoom();
        });
    }
    
    // Add to cart from viewer
    if (viewerAddToCart) {
        viewerAddToCart.addEventListener('click', () => {
            if (currentProduct && window.addToCart) {
                window.addToCart(currentProduct.name, currentProduct.price);
                productViewerModal.classList.remove('active');
            }
        });
    }
    
    // Open product viewer
    window.openProductViewer = function(name, price, description) {
        currentProduct = { name, price, description };
        
        // Update viewer content
        const productNameEl = document.getElementById('viewerProductName');
        const productDescEl = document.getElementById('viewerProductDesc');
        const productPriceEl = document.getElementById('viewerProductPrice');
        
        if (productNameEl) productNameEl.textContent = name;
        if (productDescEl) productDescEl.textContent = description;
        if (productPriceEl) productPriceEl.textContent = price;
        
        // Reset zoom
        zoomLevel = 1;
        updateZoom();
        
        // Show viewer
        productViewerModal.classList.add('active');
    };
    
    function updateZoom() {
        const viewer = document.getElementById('product3dViewer');
        if (viewer) {
            viewer.style.transform = `scale(${zoomLevel})`;
        }
    }
}
// Scroll effects
// ...existing code...
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-background');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
}