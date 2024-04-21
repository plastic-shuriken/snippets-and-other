const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    } else {
      entry.target.classList.remove('animate-in');
    }
  })
});

document.querySelectorAll('.MediaItem')?.forEach(element => {
  observer.observe(element);
})
