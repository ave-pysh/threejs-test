import { useRef } from 'react';
import {
  BufferGeometry,
  Float32BufferAttribute,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
} from 'three';

function calcGeometry(positions, normals, isSmooth) {
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));

  if (isSmooth) {
    geometry.setAttribute('normal', new Float32BufferAttribute(normals, 3));
    geometry.computeVertexNormals();
  }

  return geometry;
}

export default function Cone({
  position,
  rotation,
  positions,
  normals,
  isSmooth,
}) {
  const mesh = useRef();
  const material = new MeshBasicMaterial({
    side: DoubleSide,
    color: 0xFF0000,
    wireframe: !isSmooth,
  });

  const geo = calcGeometry(positions, normals, isSmooth);

  return (
    <>
      {positions && normals && (
        <mesh
          ref={mesh}
          rotation={rotation}
          position={position}
          material={material}
          geometry={geo}
        />
      )}
    </>
  );
}
