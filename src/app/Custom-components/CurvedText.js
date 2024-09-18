import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

import { useEffect, useState } from "react";

function CurvedText({
  text = " ABCDEF ",
  radius = 3,
  angle = Math.PI / 2,
  thickness = 0.34,
  totalWidth = 3.6,
}) {
  const characters = text.split("");
  const curveRadius = radius;
  const totalAngle = angle;
  const characterAngle = totalAngle / (text.length - 1);

  const fontLoader = new FontLoader();
  const [font, setFont] = useState(null);

  useEffect(() => {
    fontLoader.load("/Inter_Bold.json", setFont);
  }, []);

  if (!font) return null;

  // Calculate spacing between characters
  const characterSpacing = totalWidth / (characters.length - 1);

  return (
    <group position={[0, 0, 0]}>
      {characters.map((char, index) => {
        const x = curveRadius * Math.cos(Math.PI / 2);
        const y = (index / (characters.length - 1)) * totalWidth;

        const shape = font.generateShapes(char, 1);
        const extrudeSettings = {
          depth: thickness,
          bevelEnabled: false,
        };
        const textGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        textGeometry.computeBoundingBox();
        const boundingBox = textGeometry.boundingBox;
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);

        // Adjust position to make the center the origin
        textGeometry.translate(-center.x, -0, -center.z);
        const textMaterial = new THREE.MeshStandardMaterial({ color: "white" });
        const mesh = new THREE.Mesh(textGeometry, textMaterial);
        const ta = (index * Math.PI * 0.5) / (characters.length - 1);

        mesh.position.set(
          2 * index * characterSpacing - totalWidth,
          -0.5,
          Math.pow(Math.sin(ta + Math.PI / 4), 2) - 0.3
        );

        // Calculate the pivot point for the rotation
        const pivotPoint = new THREE.Vector3(0, 0, 0); // Set your desired pivot point here

        // Calculate the offset from the pivot point
        const offset = pivotPoint.clone().sub(mesh.position);

        // Apply the rotation to the mesh relative to the pivot point
        mesh.position.add(offset); // Move mesh to the pivot point
        mesh.rotation.y = -Math.pow(
          Math.cos(
            ((Math.PI / 2) * index) / (characters.length - 1) + Math.PI / 4
          ),
          3
        ); // Set desired rotation
        mesh.position.sub(offset); // Move mesh back to its original position

        return <primitive object={mesh} key={index} />;
      })}
    </group>
  );
}
export default CurvedText;
