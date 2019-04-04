AFRAME.registerComponent('vertical-mover', {
  schema: {
    speed: { type: 'number', default: 1 },
  },
  init: function () {
    this.defaultPosition = this.el.getAttribute('position').clone()
    console.log('init')
  },
  tick: function () {
    const time = Date.now()
    const newY = this.defaultPosition.y + Math.sin(time * 0.001 * this.data.speed);
    const pos = this.defaultPosition.clone().setY(newY);
    this.el.setAttribute('position', pos)
  }
});
