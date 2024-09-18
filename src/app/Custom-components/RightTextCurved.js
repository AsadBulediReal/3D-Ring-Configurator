import { useEffect, useState } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import * as THREE from "three";

function RightTextCurved({
  text,
  maxCharacters = 12,
  flipped = 1,
  selectedMaterial,
}) {
  const fontLoader = new FontLoader();
  const [font, setFont] = useState(null);
  let textArray = text.toLocaleUpperCase().split("");
  if (flipped < 0) {
    textArray.reverse();
  }

  useEffect(() => {
    fontLoader.load("/Inter_Bold.json", setFont);
  }, []);

  if (font === null) return null;
  const baseFontSize =
    text.charAt(0) === "m" ||
    text.charAt(0) === "M" ||
    text.charAt(0) === "w" ||
    text.charAt(0) === "W"
      ? 2.5
      : 3;
  const numCharacters = textArray.length;

  const decreaseFactor =
    text.length === 2 ? 0.6 : text.length === 3 ? 0.5 : 0.25;
  const fontScale = Math.max(
    baseFontSize - (numCharacters - 1) * decreaseFactor,
    1
  );

  const fontWidth = Math.max(5 - (numCharacters - 1) * 1, 1.5);

  const curveText = (char, index) => {
    let value;
    if (text.length === 1) {
      value = 0;
      return value;
    }
    if (text.length === 2) {
      text[0] === char && index === 0
        ? (value = 0.1)
        : text[1] === char && index === 1
        ? (value = -0.1)
        : (value = 0);
      return value;
    }
    if (text.length === 3) {
      text[0] === char && index === 0
        ? (value = 0.1)
        : text[1] === char && index === 1
        ? (value = -0.02)
        : text[2] === char && index === 2
        ? (value = -0.1)
        : (value = 0);
      return value;
    }
    if (text.length === 4) {
      text[0] === char && index === 0
        ? (value = 0.15)
        : text[1] === char && index === 1
        ? (value = 0.1)
        : text[2] === char && index === 2
        ? (value = -0.1)
        : text[3] === char && index === 3
        ? (value = -0.15)
        : (value = 0);
      return value;
    }
    if (text.length === 5) {
      text[0] === char && index === 0
        ? (value = 0.15)
        : text[1] === char && index === 1
        ? (value = 0.12)
        : text[2] === char && index === 2
        ? (value = 0)
        : text[3] === char && index === 3
        ? (value = -0.12)
        : text[4] === char && index === 4
        ? (value = -0.15)
        : (value = 0);
      return value;
    }
    if (text.length === 6) {
      text[0] === char && index === 0
        ? (value = 0.2)
        : text[1] === char && index === 1
        ? (value = 0.1)
        : text[2] === char && index === 2
        ? (value = 0)
        : text[3] === char && index === 3
        ? (value = -0)
        : text[4] === char && index === 4
        ? (value = -0.1)
        : text[5] === char && index === 5
        ? (value = -0.2)
        : (value = 0);
      return value;
    }
    if (text.length === 7) {
      text[0] === char && index === 0
        ? (value = 0.2)
        : text[1] === char && index === 1
        ? (value = 0.15)
        : text[2] === char && index === 2
        ? (value = 0.1)
        : text[3] === char && index === 3
        ? (value = -0)
        : text[4] === char && index === 4
        ? (value = -0.1)
        : text[5] === char && index === 5
        ? (value = -0.15)
        : text[6] === char && index === 6
        ? (value = -0.2)
        : (value = 0);
      return value;
    }
    if (text.length === 8) {
      text[0] === char && index === 0
        ? (value = 0.2)
        : text[1] === char && index === 1
        ? (value = 0.15)
        : text[2] === char && index === 2
        ? (value = 0.1)
        : text[3] === char && index === 3
        ? (value = 0)
        : text[4] === char && index === 4
        ? (value = -0)
        : text[5] === char && index === 5
        ? (value = -0.1)
        : text[6] === char && index === 6
        ? (value = -0.15)
        : text[7] === char && index === 7
        ? (value = -0.2)
        : (value = 0);
      return value;
    }
    if (text.length === 9) {
      text[0] === char && index === 0
        ? (value = 0.2)
        : text[1] === char && index === 1
        ? (value = 0.15)
        : text[2] === char && index === 2
        ? (value = 0.1)
        : text[3] === char && index === 3
        ? (value = 0.05)
        : text[4] === char && index === 4
        ? (value = -0)
        : text[5] === char && index === 5
        ? (value = -0.05)
        : text[6] === char && index === 6
        ? (value = -0.1)
        : text[7] === char && index === 7
        ? (value = -0.15)
        : text[8] === char && index === 8
        ? (value = -0.2)
        : (value = 0);
      return value;
    }
    if (text.length === 10) {
      text[0] === char && index === 0
        ? (value = 0.25)
        : text[1] === char && index === 1
        ? (value = 0.2)
        : text[2] === char && index === 2
        ? (value = 0.15)
        : text[3] === char && index === 3
        ? (value = 0.1)
        : text[4] === char && index === 4
        ? (value = 0.05)
        : text[5] === char && index === 5
        ? (value = -0.05)
        : text[6] === char && index === 6
        ? (value = -0.1)
        : text[7] === char && index === 7
        ? (value = -0.15)
        : text[8] === char && index === 8
        ? (value = -0.2)
        : text[9] === char && index === 9
        ? (value = -0.25)
        : (value = 0);
      return value;
    }
  };
  const curvePosition = (mesh, index) => {
    if (text.length === 1) {
      return mesh.position.set(index * 1, -0.2, -0.5);
    }
    if (text.length === 2) {
      return mesh.position.set(index * 7.9 - 3.8, 0, -0.5);
    }
    if (text.length === 3) {
      index === 1
        ? mesh.position.set(index * 4.2 - 4, 0.6, -0.5)
        : mesh.position.set(index * 4.2 - 4, 0, -0.5);
    }
    if (text.length === 4) {
      index === 1 || index === 2
        ? mesh.position.set(index * 2.9 - 4.15, 0.8, -0.5)
        : mesh.position.set(index * 2.6 - 3.7, 0, -0.5);
    }
    if (text.length === 5) {
      index === 2
        ? mesh.position.set(index * 1.55 - 2.8, 1, -0.5)
        : index === 1 || index === 3
        ? mesh.position.set(index * 1.8 - 3.35, 0.7, -0.5)
        : mesh.position.set(index * 1.7 - 3.2, 0, -0.5);
    }
    if (text.length === 6) {
      index === 1 || index === 4
        ? mesh.position.set(index * 1.2 - 2.8, 0.8, -0.5)
        : index === 2 || index === 3
        ? mesh.position.set(index * 1 - 2.3, 1.1, -0.5)
        : mesh.position.set(index * 1.3 - 3, 0, -0.5);
    }
    if (text.length === 7) {
      index === 1 || index === 5
        ? mesh.position.set(index * 0.7 - 1.9, 0.5, -0.5)
        : index === 2 || index === 4
        ? mesh.position.set(index * 0.7 - 1.9, 1, -0.5)
        : index === 3
        ? mesh.position.set(index * 0.7 - 1.9, 1, -0.5)
        : mesh.position.set(index * 0.7 - 1.9, 0, -0.5);
    }
    if (text.length === 8) {
      index === 1 || index === 6
        ? mesh.position.set(index * 0.4 - 1.4, 0.4, -0.5)
        : index === 2 || index === 5
        ? mesh.position.set(index * 0.4 - 1.4, 0.7, -0.5)
        : index === 3 || index === 4
        ? mesh.position.set(index * 0.4 - 1.4, 0.9, -0.5)
        : mesh.position.set(index * 0.4 - 1.3, 0, -0.5);
    }
    if (text.length === 9) {
      index === 1 || index === 7
        ? mesh.position.set(index * 0.2 - 0.8, 0.5, -0.5)
        : index === 2 || index === 6
        ? mesh.position.set(index * 0.2 - 0.8, 0.7, -0.5)
        : index === 3 || index === 5
        ? mesh.position.set(index * 0.2 - 0.8, 0.9, -0.5)
        : index === 4
        ? mesh.position.set(index * 0.2 - 0.8, 1, -0.5)
        : index === 8
        ? mesh.position.set(index * 0.2 - 1, 0, -0.5)
        : mesh.position.set(index * 0.2 - 0.4, 0, -0.5);
    }
    if (text.length === 10) {
      index === 0
        ? mesh.position.set(index * 0.1 + 0.6, 0.2, -0.6)
        : index === 9
        ? mesh.position.set(index * 0.1 - 1.25, 0.2, -0.6)
        : index === 1
        ? mesh.position.set(index * 0.1 + 0.25, 0.4, -0.6)
        : index === 8
        ? mesh.position.set(index * 0.1 - 1, 0.4, -0.6)
        : index === 2
        ? mesh.position.set(index * 0.1 - 0.1, 0.6, -0.8)
        : index === 7
        ? mesh.position.set(index * 0.1 - 0.7, 0.6, -0.8)
        : index === 3 || index === 6
        ? mesh.position.set(index * 0.1 - 0.4, 0.8, -0.8)
        : index === 4 || index === 5
        ? mesh.position.set(index * 0.1 - 0.4, 1, -0.8)
        : mesh.position.set(index * 0.1 - 0.3, 0, -0.2);
    }
  };

  return (
    <group
      rotation={[0, 0, 0.03]}
      scale={[0.5 * flipped, 0.5 * flipped, 0.5]}
      position={[0, 0, 7]}
    >
      {text
        .toLocaleUpperCase()
        .split("")
        .map((char, index) => {
          const offset = 0.5 * (text.length / maxCharacters);
          const angle =
            (index / maxCharacters - offset) * Math.PI * 0.32 + 0.015;
          const shape = font.generateShapes(char, fontScale);
          const extrudeSettings = {
            depth: 0.5,
            bevelEnabled: false,
          };
          const textGeometry = new THREE.ExtrudeGeometry(
            shape,
            extrudeSettings
          );
          textGeometry.computeBoundingBox();
          const boundingBox = textGeometry.boundingBox;
          const center = new THREE.Vector3();
          boundingBox.getCenter(center);

          textGeometry.translate(
            -center.x,
            text.length >= 7 ? -1 : text.length >= 5 ? -1.3 : -1.7,
            -center.z
          );
          const radius = -23.71;

          const material = new THREE.MeshStandardMaterial({
            color: selectedMaterial.color,
            metalness: selectedMaterial.metalness,
            roughness: selectedMaterial.roughness,
          });
          const mesh = new THREE.Mesh(textGeometry, material);
          mesh.scale.set(fontScale * flipped, -fontScale, 1);

          curvePosition(mesh, index);

          // Manually update the matrix
          mesh.updateMatrix();

          const offsetAngle = -Math.PI / 4;
          console.log(text[0]);
          return (
            <group
              key={index}
              position={[
                radius * Math.cos(angle) * 0.7,
                radius * Math.sin(angle),
                radius *
                  0.2 *
                  Math.sin(angle + offsetAngle) *
                  Math.cos(angle + offsetAngle),
              ]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            >
              <primitive
                scale={[fontWidth, 3, 2]}
                rotation={[-0.65, angle, curveText(char, index)]}
                object={mesh}
              />
            </group>
          );
        })}
    </group>
  );
}

export default RightTextCurved;
