// composables/useScrollTracker.js
import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollTracker() {
  const activeSection = ref(null);

  const isLinkActive = (sectionId) => activeSection.value === sectionId;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.id;
      }
    });

    activeSection.value = currentSection;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    activeSection,
    isLinkActive,
    scrollToSection
  };
}