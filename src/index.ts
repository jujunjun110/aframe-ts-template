import Fib from './js/fib'
import './js/components/vertical-mover'
import './scss/style.scss'
import { ShaderChunk } from 'three';
// import glslify from 'glslify'
// const glslify = require('glslify')
// import vert from './shaders/default.glsl'
// import frag from 'raw-loader!glslify-loader!./shaders/sample.frag'

function main(): void {
  console.log(Fib.fib(10))
  const vertstr = `
  varying vec2 vUV; 
  void main(void) {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
    vUV = uv; 
  }`
  const fragstr = `
  varying vec2 vUV; 
  void main(void) {
    float x = vUV[0]; 
    float y = vUV[1];
    gl_FragColor = vec4(x, y, 0.5, 1.0); 
  }`

  AFRAME.registerShader('custom-shader', {
    schema: {},
    vertexShader: vertstr,
    fragmentShader: fragstr
  })
}

main()
