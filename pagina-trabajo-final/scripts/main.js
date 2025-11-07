const triggers = document.querySelectorAll('.desplegable-funcion');

triggers.forEach(trigger => {
  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const parent = this.parentElement;
    parent.classList.toggle('active');
    
    triggers.forEach(otherTrigger => {
      if (otherTrigger !== trigger) {
        otherTrigger.parentElement.classList.remove('active');
      }
    });
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.desplegable')) {
    document.querySelectorAll('.desplegable').forEach(item => {
      item.classList.remove('active');
    });
  }
});