varying vec2 vUv; // [0.0, 0.0] ~ [1.0, 1.0]

void main(void) {
    float x = vUv[0];
    float y = vUv[1];
    gl_FragColor = vec4(x, y, 0.5, 1.0); //(R, G, B, A)
}
