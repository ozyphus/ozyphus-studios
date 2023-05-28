import { Box, OrbitControls } from '@react-three/drei';
import { useTexture, MeshWobbleMaterial } from '@react-three/drei';
import { RepeatWrapping, GridHelper, MeshBasicMaterial } from 'three';
import { extend } from '@react-three/fiber';
import { BackSide } from 'three';

extend({ GridHelper });

export const Scene = () => {
  const texture = useTexture('/textures/Metall-pattern.jpg'); 
  texture.wrapS = texture.wrapT = RepeatWrapping;

  return (
    <>
      <Box args={[1, 1, 1]} position={[0, 0.5, 0]}>
        <meshStandardMaterial attach="material" map={texture} metalness={1} />
      </Box>
      <Box args={[100, 100, 100]}>
        <meshBasicMaterial attach="material" color="#000000" transparent opacity={0.1} side={BackSide} />
      </Box>
      <gridHelper args={[100, 100]} /> 
      <OrbitControls />
    </>
  );
};
