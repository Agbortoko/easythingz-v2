anime({
  targets: '.heroCode #heroCircle',
  scale: [
    {value: 1.02, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeOutElastic(1, .8)', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
  loop: false
});

// Initialize Wow Animation
new WOW().init();  
