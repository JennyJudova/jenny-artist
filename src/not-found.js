import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './index.css?inline';
import './nav-bar.js';

export class NotFound extends LitElement {
  static styles = [
    unsafeCSS(styles),
    css`
      :host {
        display: block;
      }
    `
  ];

  static properties = {
    theme: { type: String }
  };

  constructor() {
    super();
    this.theme = document.documentElement.getAttribute('data-theme') || 'dark';
    this.navItems = [
      { href: '/', label: 'Home', type: 'path' }
    ];
  }

  handleThemeToggle(e) {
    this.theme = e.detail;
    this.requestUpdate();
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    window.location.href = path;
  }

  render() {
    return html`
      <div class="min-h-screen" style="background-color: var(--bg-primary); color: var(--text-primary);">
        <nav-bar 
          .theme=${this.theme}
          .page="404"
          .navItems=${this.navItems}
          @theme-toggle=${this.handleThemeToggle}
          @navigate=${(e) => this.navigate(e.detail)}
        ></nav-bar>

        <div class="pt-32 pb-16 md:pb-24" style="background-color: var(--bg-primary);">
          <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-2xl mx-auto text-center">
              <h1 class="text-6xl md:text-8xl font-syncopate mb-8 chromatic-text tracking-[0.15em]" data-text="404">404</h1>
              <h2 class="text-2xl md:text-3xl font-syncopate mb-8 tracking-wider" style="color: var(--text-primary);">PAGE NOT FOUND</h2>
              <p class="text-base md:text-lg font-space mb-12 tracking-wide" style="color: var(--text-secondary);">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <a 
                href="/"
                class="font-space border px-8 py-4 transition-all duration-500 inline-block cursor-pointer"
                style="border-color: var(--text-primary); color: var(--text-primary);"
                onmouseover="this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary'); this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');"
                onmouseout="this.style.backgroundColor = 'transparent'; this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer class="py-8 md:py-12" style="background-color: var(--bg-primary); border-top: 1px solid var(--border-color);">
          <div class="container mx-auto px-4 md:px-6 text-center">
            <p class="text-xs md:text-sm font-space tracking-widest" style="color: var(--text-secondary);">© 2025 MADE WITH. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>
    `;
  }
}

customElements.define('not-found', NotFound); 