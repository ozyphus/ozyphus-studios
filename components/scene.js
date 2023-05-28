import React from 'react';
import { Box } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { RepeatWrapping, TextureLoader } from 'three';

export const Scene = () => {
  const texture = useTexture('/textures/Metall-pattern.jpg'); // Use the path to your texture image
  texture.wrapS = texture.wrapT = RepeatWrapping;

  return (
    <Box args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial attach="material" map={texture} metalness={1} />
    </Box>
  );
};
