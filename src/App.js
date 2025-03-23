import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './index.css?inline';
import './tools-page.js';
import './nav-bar.js';

export class App extends LitElement {
  static styles = [
    unsafeCSS(styles),
    css`
      :host {
        display: block;
      }
      
      .carousel-slide {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease-in-out;
        position: absolute;
        width: 100%;
      }
      
      .carousel-slide.active {
        opacity: 1;
        pointer-events: auto;
        position: relative;
      }

      .mobile-menu {
        display: none;
      }

      @media (max-width: 768px) {
        .desktop-menu {
          display: none;
        }
        
        .mobile-menu {
          display: block;
        }
        
        .mobile-menu-expanded {
          position: fixed;
          top: 96px;
          left: 0;
          right: 0;
          background-color: var(--bg-primary);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 40;
          border-bottom: 1px solid var(--border-color);
        }
      }
    `
  ];

  constructor() {
    super();
    this.theme = 'dark';
    this.page = window.location.pathname === '/tools' ? 'tools' : 'home';
    this.currentProduct = 0;
    this.mobileMenuOpen = false;
    this.navItems = [
      { href: '#story', label: 'Story', type: 'hash' },
      { href: '#product', label: 'Product', type: 'hash' },
      { href: '#contact', label: 'Contact', type: 'hash' },
      { href: '/tools', label: 'Tools', type: 'path' }
    ];
    this.products = [
      {
        name: "YAK & CAMEL",
        description: "A masterpiece of natural luxury, our signature scarf combines the softness of yak wool with the lightweight warmth of camel fiber. Each piece is uniquely textured and naturally hypoallergenic.",
        price: "$895",
        image: "https://images.unsplash.com/photo-1601244005535-a48d21d951ac?auto=format&fit=crop&q=80"
      },
      {
        name: "OLD SWEATER",
        description: "Crafted from carefully selected vintage wool garments, our Old Sweater collection gives new life to timeless materials. Each piece tells a story of heritage and sustainable luxury.",
        price: "$695",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80"
      },
      {
        name: "BRITISH SHEEP",
        description: "Sourced from heritage breeds across the British Isles, this collection celebrates traditional shepherding. The natural lanolin content creates a water-resistant finish that improves with age.",
        price: "$795",
        image: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?auto=format&fit=crop&q=80"
      }
    ];
  }

  firstUpdated() {
    document.documentElement.setAttribute('data-theme', this.theme);
    this.setupScrollBehavior();
    window.addEventListener('popstate', () => {
      this.page = window.location.pathname === '/tools' ? 'tools' : 'home';
      this.requestUpdate();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.mobileMenuOpen) {
        this.mobileMenuOpen = false;
        this.requestUpdate();
      }
    });
  }

  setupScrollBehavior() {
    const links = this.shadowRoot.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = this.shadowRoot.getElementById(targetId);
        if (targetElement) {
          const navHeight = 96;
          const targetPosition = targetElement.offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
        // Close mobile menu if open
        if (this.mobileMenuOpen) {
          this.mobileMenuOpen = false;
          this.requestUpdate();
        }
      });
    });
  }

  handleThemeToggle(e) {
    this.theme = e.detail;
    document.documentElement.setAttribute('data-theme', this.theme);
    this.requestUpdate();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.requestUpdate();
  }

  scrollToSection(id) {
    const targetElement = this.shadowRoot.getElementById(id);
    if (targetElement) {
      const navHeight = 96;
      const targetPosition = targetElement.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.page = path === '/tools' ? 'tools' : 'home';
    window.scrollTo(0, 0);
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    }
    this.requestUpdate();
  }

  nextProduct() {
    this.currentProduct = (this.currentProduct + 1) % this.products.length;
    this.requestUpdate();
  }

  prevProduct() {
    this.currentProduct = (this.currentProduct - 1 + this.products.length) % this.products.length;
    this.requestUpdate();
  }

  renderHome() {
    return html`
      <div class="min-h-screen" style="background-color: var(--bg-primary); color: var(--text-primary);">
        <nav-bar 
          .theme=${this.theme}
          .page=${this.page}
          .navItems=${this.navItems}
          @theme-toggle=${this.handleThemeToggle}
          @navigate=${(e) => this.navigate(e.detail)}
          @scroll-to=${(e) => this.scrollToSection(e.detail)}
        ></nav-bar>

        <!-- Hero Section -->
        <section class="h-screen flex items-center justify-center relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&q=80"
            alt="Luxury scarf texture"
            class="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div class="absolute inset-0" style="background-color: var(--bg-primary); opacity: 0.5;"></div>
          <div class="relative text-center px-4">
            <h2 class="text-3xl md:text-4xl lg:text-6xl font-syncopate mb-4 md:mb-8 chromatic-text tracking-[0.15em] md:tracking-[0.2em]" data-text="ARTISANAL">ARTISANAL</h2>
            <p class="text-base md:text-xl font-space tracking-[0.05em] md:tracking-[0.1em] mb-8 md:mb-12" style="color: var(--text-secondary);">Hand-spun from the finest yak and camel wool</p>
            <a 
              href="#product" 
              class="font-space border px-6 md:px-12 py-3 md:py-4 transition-all duration-500 inline-block cursor-pointer"
              style="border-color: var(--text-primary); color: var(--text-primary);"
              onmouseover="this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary'); this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');"
              onmouseout="this.style.backgroundColor = 'transparent'; this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');"
            >
              See projects
            </a>
          </div>
        </section>

        <!-- Story Section -->
        <section id="story" class="py-16 md:py-32" style="background-color: var(--bg-primary);">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-2xl mx-auto text-center">
              <h3 class="text-2xl md:text-3xl font-syncopate mb-8 md:mb-12 chromatic-text tracking-[0.15em]" data-text="OUR STORY">OUR STORY</h3>
              <p class="text-base md:text-lg font-space leading-relaxed tracking-wide" style="color: var(--text-secondary);">
                In the heart of the Himalayas, our artisans carefully select and hand-spin the finest yak and camel wool.
                Each scarf is a testament to centuries-old craftsmanship, taking over 60 hours to complete.
              </p>
            </div>
          </div>
        </section>

        <!-- Product Section -->
        <section id="product" class="py-16 md:py-32 relative" style="background-color: var(--bg-primary);">
          <div class="container mx-auto px-4 md:px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative">
              ${this.products.map((product, index) => html`
                <div class="carousel-slide ${index === this.currentProduct ? 'active' : ''}">
                  <img 
                    src=${product.image}
                    alt=${product.name}
                    class="w-full h-[350px] md:h-[600px] object-cover"
                  />
                </div>
              `)}
              <div class="space-y-6 md:space-y-8">
                <div class="flex justify-between items-center mb-4 md:mb-8">
                  <button 
                    @click=${this.prevProduct}
                    class="text-xl md:text-2xl font-space px-3 md:px-4 py-1 md:py-2 transition-opacity hover:opacity-70"
                    style="color: var(--text-primary);"
                  >←</button>
                  <h3 class="text-xl md:text-3xl font-syncopate chromatic-text tracking-[0.1em] md:tracking-[0.15em]" data-text=${this.products[this.currentProduct].name}>
                    ${this.products[this.currentProduct].name}
                  </h3>
                  <button 
                    @click=${this.nextProduct}
                    class="text-xl md:text-2xl font-space px-3 md:px-4 py-1 md:py-2 transition-opacity hover:opacity-70"
                    style="color: var(--text-primary);"
                  >→</button>
                </div>
                <p class="text-base md:text-lg font-space tracking-wide" style="color: var(--text-secondary);">
                  ${this.products[this.currentProduct].description}
                </p>
                <div class="space-y-4 md:space-y-6">
                  <p class="text-xl md:text-2xl font-space tracking-widest" style="color: var(--text-primary);">
                    ${this.products[this.currentProduct].price}
                  </p>
                  <button 
                    class="w-full py-3 md:py-4 transition-colors duration-500 font-space text-base md:text-lg"
                    style="background-color: var(--text-primary); color: var(--bg-primary);"
                    onmouseover="this.style.opacity = '0.9';"
                    onmouseout="this.style.opacity = '1';"
                  >
                    Request Private Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-16 md:py-32" style="background-color: var(--bg-secondary);">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-xl mx-auto text-center">
              <h3 class="text-2xl md:text-3xl font-syncopate mb-8 md:mb-12 chromatic-text tracking-[0.15em]" data-text="PRIVATE CONSULTATION">PRIVATE CONSULTATION</h3>
              <p class="text-base md:text-lg font-space mb-8 md:mb-12 tracking-wide" style="color: var(--text-secondary);">
                Experience our collection in person. Schedule a private viewing at our atelier.
              </p>
              <form class="space-y-4 md:space-y-6">
                <input 
                  type="text" 
                  placeholder="Name"
                  class="w-full p-3 md:p-4 font-space transition-colors focus:outline-none"
                  style="background-color: transparent; border: 1px solid var(--border-color); color: var(--text-primary);"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  class="w-full p-3 md:p-4 font-space transition-colors focus:outline-none"
                  style="background-color: transparent; border: 1px solid var(--border-color); color: var(--text-primary);"
                />
                <textarea 
                  placeholder="Message"
                  class="w-full p-3 md:p-4 font-space transition-colors focus:outline-none h-24 md:h-32"
                  style="background-color: transparent; border: 1px solid var(--border-color); color: var(--text-primary);"
                ></textarea>
                <button 
                  class="w-full py-3 md:py-4 transition-colors duration-500 font-space text-base md:text-lg"
                  style="background-color: var(--text-primary); color: var(--bg-primary);"
                  onmouseover="this.style.opacity = '0.9';"
                  onmouseout="this.style.opacity = '1';"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="py-8 md:py-12" style="background-color: var(--bg-primary); border-top: 1px solid var(--border-color);">
          <div class="container mx-auto px-4 md:px-6 text-center">
            <p class="text-xs md:text-sm font-space tracking-widest" style="color: var(--text-secondary);">© 2025 MADE WITH. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>
    `;
  }

  render() {
    return this.page === 'tools' ? html`<tools-page .theme=${this.theme}></tools-page>` : this.renderHome();
  }
}

customElements.define('app-root', App); 