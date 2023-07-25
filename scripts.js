document.getElementById('button').addEventListener('click', function() {
  confetti({
    particleCount: 200,
    angle: 45,
    spread: 400,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 400,
    origin: { x: 0.5, y: 0.5 },
    colors: [
      '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF', '#FFC0CB', '#00FFFF','#FF00FF', '#A52A2A', '#000000', '#FFFFFF', '#808080', '#ADD8E6', '#000080', '#800080', '#FFD700', 
      '#C0C0C0', '#800000', '#808000', 
    ],
    shapes: ['star', 'circle', 'square'],
    scalar: 2,
    zIndex: 100,
  });
});
