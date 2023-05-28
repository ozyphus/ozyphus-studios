import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';

export const ThreeCanvas = () => (
  <Canvas camera={{ position: [5, 5, 5] }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Scene />
  </Canvas>
);
