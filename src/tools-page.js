import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './index.css?inline';
import './nav-bar.js';

class ToolsPage extends LitElement {
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
    window.location.href = path; // For simplicity, just redirect for tools page
  }

  render() {
    return html`
      <div class="min-h-screen" style="background-color: var(--bg-primary); color: var(--text-primary);">
        <nav-bar 
          .theme=${this.theme}
          .page="tools"
          .navItems=${this.navItems}
          @theme-toggle=${this.handleThemeToggle}
          @navigate=${(e) => this.navigate(e.detail)}
        ></nav-bar>

        <!-- Tools Grid -->
        <div class="pt-32 pb-16 md:pb-24" style="background-color: var(--bg-primary);">
          <div class="container mx-auto px-4 md:px-6">
            <h1 class="text-3xl md:text-5xl font-syncopate mb-8 md:mb-16 chromatic-text tracking-[0.15em] text-center" data-text="OUR TOOLS">OUR TOOLS</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
              <!-- Tool 1 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1615713170963-2595d2c721a3?auto=format&fit=crop&q=80"
                    alt="Traditional spinning wheel"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">SPINNING WHEEL</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    Hand-carved from sustainable maple wood, our spinning wheels maintain perfect tension for consistent yarn production. Each wheel is calibrated to work with the finest fibers.
                  </p>
                </div>
              </div>

              <!-- Tool 2 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1598867543295-4d48e81be78d?auto=format&fit=crop&q=80"
                    alt="Wooden loom"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">TRADITIONAL LOOM</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    Our century-old looms create intricate patterns while maintaining the delicate nature of the wool. These masterpieces of engineering allow our artisans to weave complex designs.
                  </p>
                </div>
              </div>

              <!-- Tool 3 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
                    alt="Natural dye ingredients"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">NATURAL DYES</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    We source local plants and minerals to create our signature colors, ensuring each piece tells a unique story. Our dye masters blend traditional techniques with modern color theory.
                  </p>
                </div>
              </div>

              <!-- Tool 4 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&q=80"
                    alt="Wooden spindle"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">HAND SPINDLES</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    Our collection of hand spindles allows for the finest control over yarn creation. Each spindle is weighted perfectly for its intended fiber, ensuring optimal twist and tension.
                  </p>
                </div>
              </div>

              <!-- Tool 5 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80"
                    alt="Weaving tools"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">WEAVING TOOLS</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    Our specialized collection of shuttles, beaters, and combs are crafted from rare hardwoods. Each tool is designed to work in harmony with our fibers and looms.
                  </p>
                </div>
              </div>

              <!-- Tool 6 -->
              <div class="space-y-6 md:space-y-8">
                <div class="aspect-square relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1628744404730-5e143358539b?auto=format&fit=crop&q=80"
                    alt="Finishing tools"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="space-y-3 md:space-y-4">
                  <h2 class="text-xl md:text-2xl font-syncopate tracking-wider" style="color: var(--text-primary);">FINISHING TOOLS</h2>
                  <p class="text-sm md:text-base font-space leading-relaxed" style="color: var(--text-secondary);">
                    The final touch comes from our selection of finishing tools. From specialized scissors to blocking frames, these instruments ensure each piece meets our exacting standards.
                  </p>
                </div>
              </div>
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

customElements.define('tools-page', ToolsPage);