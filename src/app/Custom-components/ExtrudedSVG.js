import { useMemo } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";

function ExtrudedSVG({
  size = 1,
  flipped = 1,
  path = "heart.svg",
  selectedMaterial,
}) {
  const svgData = useLoader(SVGLoader, path);

  // Calculate dimensions of the SVG
  const boundingBox = useMemo(() => {
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;

    svgData.paths.forEach((path) => {
      path.toShapes(true).forEach((shape) => {
        shape.extractPoints().shape.forEach((point) => {
          minX = Math.min(minX, point.x);
          minY = Math.min(minY, point.y);
          maxX = Math.max(maxX, point.x);
          maxY = Math.max(maxY, point.y);
        });
      });
    });

    return {
      width: maxX - minX,
      height: maxY - minY,
    };
  }, [svgData]);

  // Calculate scaling factor to normalize dimensions to 1,1
  const scaleFactor = useMemo(() => {
    const maxDimension = Math.min(boundingBox.width, boundingBox.height);
    return 1 / maxDimension;
  }, [boundingBox]);

  // Apply scaling factor to the size prop
  const scaledSize = size * scaleFactor * 800;

  // Generate shapes for extrusion
  const shapes = useMemo(() => {
    return svgData.paths.map((p) => p.toShapes(true));
  }, [svgData]);

  // Create extrude settings
  const extrudeSettings = {
    depth: 150,
    bevelEnabled: false,
    steps: 30,
  };

  // Create geometries
  const geometries = useMemo(() => {
    return shapes.map((s) => {
      const geometry = new THREE.ExtrudeGeometry(s, extrudeSettings);
      geometry.computeBoundingBox();
      const bbox = geometry.boundingBox;
      const centerX = (bbox.max.x + bbox.min.x) / 2;
      const centerY = (bbox.max.y + bbox.min.y) / 2;
      const centerZ = (bbox.max.z + bbox.min.z) / 2;
      geometry.translate(-centerX, -centerY, -centerZ); // Translate to center
      return geometry;
    });
  }, [shapes]);

  return (
    <group
      position={[flipped * 10.5, 0, 3]}
      rotation={[0, flipped * -0.07 * Math.PI, 0]}
    >
      <mesh
        scale={[scaledSize, scaledSize, size * flipped]}
        rotation={[0, Math.PI / 2, -Math.PI / 2]}
        position={[0, 0, 0]}
      >
        {geometries.map((geometry, i) => (
          <primitive key={i} object={geometry} attach="geometry" />
        ))}
        <meshStandardMaterial
          side={2}
          color={selectedMaterial.color}
          metalness={selectedMaterial.metalness}
          roughness={selectedMaterial.roughness}
        />
      </mesh>
    </group>
  );
}

export default ExtrudedSVG;
