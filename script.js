window.scroll({
    top: 3500, 
    left: 0, 
    behavior: 'smooth' <pre rel="HTML"><code markup="tt" class="language-markup">
  });
  
  // Scroll certain amounts from current position 
  window.scrollBy({ 
    top: 200, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });
  
  // Scroll to a certain element
  document.querySelector('.hello').scrollIntoView({ 
    behavior: 'smooth' 
  });