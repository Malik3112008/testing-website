// Main JavaScript file for Testing Website

// Smooth page load animation
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Console log for debugging
console.log('🎯 Testing Website Loaded');
