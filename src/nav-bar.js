import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './index.css?inline';

export class NavBar extends LitElement {
  static styles = [
    unsafeCSS(styles),
    css`
      :host {
        display: block;
        width: 100%;
        position: fixed;
        z-index: 50;
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

  static properties = {
    theme: { type: String },
    page: { type: String },
    mobileMenuOpen: { type: Boolean },
    navItems: { type: Array }
  };

  constructor() {
    super();
    this.theme = 'dark';
    this.page = 'home';
    this.mobileMenuOpen = false;
    // Default navigation items for the main page
    this.navItems = [
      { href: '#story', label: 'Story', type: 'hash' },
      { href: '#product', label: 'Product', type: 'hash' },
      { href: '#contact', label: 'Contact', type: 'hash' },
      { href: '/tools', label: 'Tools', type: 'path' }
    ];
  }

  firstUpdated() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.mobileMenuOpen) {
        this.mobileMenuOpen = false;
        this.requestUpdate();
      }
    });
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
    this.dispatchEvent(new CustomEvent('theme-toggle', { detail: this.theme }));
    this.requestUpdate();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.requestUpdate();
  }

  handleNavigation(item, e) {
    if (item.type === 'path') {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('navigate', { detail: item.href }));
    } else if (item.type === 'hash') {
      e.preventDefault();
      const targetId = item.href.slice(1);
      this.dispatchEvent(new CustomEvent('scroll-to', { detail: targetId }));
    }
    
    // Close mobile menu if open
    if (this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <nav class="py-6" style="background-color: var(--bg-primary); backdrop-filter: blur(8px);">
        <div class="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="/" class="text-xl md:text-2xl font-syncopate tracking-[0.2em]" data-text="MADE WITH">MADE WITH</a>
          <div class="flex items-center">
            <!-- Desktop Menu -->
            <div class="desktop-menu flex items-center space-x-4 md:space-x-8">
              <div class="space-x-4 md:space-x-8 text-sm font-space tracking-wider">
                ${this.navItems.map(item => html`
                  <a 
                    href="${item.href}" 
                    @click="${(e) => this.handleNavigation(item, e)}"
                    class="hover:opacity-70 transition-opacity cursor-pointer" 
                    style="color: var(--text-primary);"
                  >
                    ${item.label}
                  </a>
                `)}
              </div>
              <button 
                @click=${this.toggleTheme}
                class="p-2 rounded-full hover:opacity-70 transition-opacity"
                style="color: var(--text-primary);"
              >
                ${this.theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="mobile-menu flex items-center space-x-4">
              <button 
                @click=${this.toggleTheme}
                class="p-2 rounded-full hover:opacity-70 transition-opacity"
                style="color: var(--text-primary);"
              >
                ${this.theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <button @click=${this.toggleMobileMenu} class="text-2xl" style="color: var(--text-primary);">
                ${this.mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
        
        <!-- Mobile Menu Expanded -->
        ${this.mobileMenuOpen ? html`
          <div class="mobile-menu-expanded">
            ${this.navItems.map(item => html`
              <a 
                href="${item.href}" 
                @click="${(e) => this.handleNavigation(item, e)}"
                class="text-lg hover:opacity-70 transition-opacity cursor-pointer" 
                style="color: var(--text-primary);"
              >
                ${item.label}
              </a>
            `)}
          </div>
        ` : ''}
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar); 