// Animation utilities for dynamic effects
export class AnimationManager {
  private observer: IntersectionObserver;
  private elements: Set<Element> = new Set();

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  // Initialize animations on page load
  init() {
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    animatedElements.forEach((el) => {
      this.observer.observe(el);
      this.elements.add(el);
    });

    // Add typing animation to title
    this.addTypingEffect();
    
    // Add particle background
    this.createParticleBackground();
    
    // Add smooth scrolling
    this.initSmoothScrolling();
  }

  private addTypingEffect() {
    const titleElement = document.querySelector('.gradient-text');
    if (titleElement) {
      const text = titleElement.textContent || '';
      titleElement.textContent = '';
      titleElement.classList.add('typing-effect');
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          titleElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        } else {
          titleElement.classList.remove('typing-effect');
        }
      };
      
      setTimeout(typeWriter, 1000);
    }
  }

  private createParticleBackground() {
    const hero = document.querySelector('#hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'absolute inset-0 pointer-events-none';
    canvas.style.zIndex = '1';
    hero.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = hero.clientWidth;
      canvas.height = hero.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    animate();
  }

  private initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        const target = document.querySelector(href || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Add mouse parallax effect
  addParallaxEffect() {
    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.dynamic-card');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const distanceX = (e.clientX - cardCenterX) / 20;
        const distanceY = (e.clientY - cardCenterY) / 20;
        
        (card as HTMLElement).style.transform = 
          `perspective(1000px) rotateX(${distanceY * 0.1}deg) rotateY(${distanceX * 0.1}deg)`;
      });
    });
  }

  // Clean up
  destroy() {
    this.observer.disconnect();
    this.elements.clear();
  }
}

// Initialize animations when DOM is loaded
export const initAnimations = () => {
  const animationManager = new AnimationManager();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      animationManager.init();
      animationManager.addParallaxEffect();
    });
  } else {
    animationManager.init();
    animationManager.addParallaxEffect();
  }
  
  return animationManager;
};