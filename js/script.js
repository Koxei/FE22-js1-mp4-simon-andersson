// Create a timeline with default parameters
var anima = anime.timeline({
  autoplay: false
});



// Add children
anima
.add({
  duration: 500,
  targets: '#btn',
  easing: 'easeInOutSine',
  translateY: [0, 1500]
})
.add({
  duration: 1900,
  targets: '#sun',
  easing: 'easeOutExpo',
  translateY: [-1500, 0]
})
.add({
  duration: 1500,
  targets: '#bg-2',
  easing: 'easeOutExpo',
  translateY: [1500, 0]
})
.add({
  duration: 1500,
  targets: '#bg-3',
  easing: 'easeOutExpo',
  translateY: [1500, 0]
})
.add({
  duration: 1500,
  targets: '#bg-4',
  easing: 'easeOutExpo',
  translateY: [1500, 0]
})
.add({
  duration: 1500,
  targets: '#bg-5',
  easing: 'easeOutExpo',
  translateY: [1500, 0]
})
.add({
  duration: 1500,
  targets: '#bg-6',
  easing: 'easeOutExpo',
  translateY: [1500, 0]
})
.add({
  duration: 1500,
  targets: '#koxei',
  easing: 'easeOutExpo',
  translateX: [1500, 0]
})
.add({
  duration: 500,
  targets: '#btn',
  easing: 'easeInOutSine',
  translateY: [1500, 0]
})




document.querySelector('#btn').onclick = anima.play;
