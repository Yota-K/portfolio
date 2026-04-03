export function scrollReveal(node: HTMLElement, options?: { threshold?: number; delay?: number }) {
  const threshold = options?.threshold ?? 0.1;
  const delay = options?.delay ?? 0;

  node.style.opacity = '0';
  node.style.transform = 'translateY(20px)';
  node.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
