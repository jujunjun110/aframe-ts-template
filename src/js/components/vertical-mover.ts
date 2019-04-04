declare var AFRAME: any;
declare var THREE: any;

AFRAME.registerComponent('vertical-mover', {
  schema: {
    speed: { type: 'number', default: 1 },
  },
  init: function () {
    console.log('init')
  },
  tick: function () {
    const time = Date.now()
    const pos = new THREE.Vector3(0, Math.sin(time * 0.001 * this.data.speed), -10)
    this.el.setAttribute('position', pos)
  }
});
