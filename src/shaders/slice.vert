varying vec2 vUv; 
void main(void) {
  vec3 newPosition = position;
  if (position.y > 0.0) {
    newPosition.x = position.x + 1.0;
  }
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); 
  vUv = uv; 
}
