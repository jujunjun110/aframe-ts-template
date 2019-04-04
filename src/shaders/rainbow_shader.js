AFRAME.registerShader('rainbow-shader', {
  schema: {
    color: { type: 'color', is: 'uniform', default: 'white' },
    opacity: { type: 'number', is: 'uniform', default: 1.0 },
    thickness: { type: 'number', is: 'uniform', default: 1.0 },
    interval: { type: 'number', is: 'uniform', default: 0.01 }
  },
  vertexShader: require('./slice.vert').default,
  fragmentShader: require('./rainbow.frag').default,
})
