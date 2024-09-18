import { Addition, Base, Geometry, Subtraction } from "@react-three/csg";
import { memo, useEffect, useState } from "react";
import { FontLoader } from "three/examples/jsm/Addons";
import * as THREE from "three";
import { Suspense } from "react";

const BottomTextEngraving = memo(
  ({
    model,
    maxCharactersBottom,
    selectedMaterial,
    bottomText = "ABCDEFGHIJKLMNOPQRSTUVWXY",
    myScale = 1,
    selectedSize,
  }) => {
    const text = ` ${bottomText} `;
    const fontLoader = new FontLoader();
    const [font, setFont] = useState(null);

    useEffect(() => {
      fontLoader.load("/Inter_Bold.json", setFont);
    }, []);

    if (font == null) return null;
    const getDarkerColor = (color) => {
      // Convert hex to RGB
      const hex = color.slice(1);
      const rgb = parseInt(hex, 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;

      // Calculate darker shade
      const darknessFactor = 0.6; // Adjust this value to control darkness
      const darkerR = Math.floor(r * darknessFactor);
      const darkerG = Math.floor(g * darknessFactor);
      const darkerB = Math.floor(b * darknessFactor);

      // Convert RGB to hex
      const darkerHex = `rgb(${darkerR},${darkerG},${darkerB})`;

      return darkerHex;
    };

    const switchColor = ["8.5", "11"];

    const getColor = switchColor.some((size) => size === selectedSize.size);
    let color1 = getColor ? "#191a19" : selectedMaterial.color;

    const colorDarker = getDarkerColor(selectedMaterial.color);
    return (
      <group>
        {text.split("").map((char, index) => {
          const offset = 0.5 * (text.length / maxCharactersBottom);
          const angle =
            (index / maxCharactersBottom - offset) * Math.PI * 0.8 + 0.05;
          const shape = font.generateShapes(char, 1);
          const extrudeSettings = {
            depth: 0.7,
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

          // Adjust position to make the center the origin
          textGeometry.translate(-center.x, -0.5, -center.z);
          const radius = -10.3;

          // Apply material to the text geometry
          const material = new THREE.MeshStandardMaterial({
            color: selectedMaterial.color,
            metalness: selectedMaterial.metalness,
            roughness: selectedMaterial.roughness,
            color: colorDarker,
          });
          const mesh = new THREE.Mesh(textGeometry, material);
          mesh.position.set(
            radius * Math.sin(angle),
            0,
            radius * Math.cos(angle)
          );
          mesh.rotation.set(0, angle, 0);

          return <primitive object={mesh} scale={-1.5} />;
        })}

        <mesh>
          <meshStandardMaterial
            color={color1}
            metalness={selectedMaterial.metalness}
            roughness={selectedMaterial.roughness}
            // transparent={true}
            // transparent={false}
            opacity={0.5}
          />
          <Geometry>
            <Base
              scale={1 / myScale}
              geometry={model}
              position={[0, 0, -0.1]}
              rotation={[1.6 - 0.03, 0, 0]}
            />

            {text.split("").map((char, index) => {
              const offset = 0.5 * (text.length / maxCharactersBottom);
              const angle =
                (index / maxCharactersBottom - offset) * Math.PI * 0.8 + 0.05;
              const shape = font.generateShapes(char, 1);
              const extrudeSettings = {
                depth: 1,
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

              // Adjust position to make the center the origin
              textGeometry.translate(-center.x, -0.5, -center.z);
              const radius = -10.3;

              // Apply material to the text geometry
              const material = new THREE.MeshStandardMaterial({
                color: selectedMaterial.color,
                metalness: selectedMaterial.metalness,
                roughness: selectedMaterial.roughness,
              });
              const mesh = new THREE.Mesh(textGeometry, material);
              mesh.position.set(
                radius * Math.sin(angle),
                0,
                radius * Math.cos(angle)
              );
              mesh.rotation.set(0, angle, 0);

              return (
                <Subtraction
                  key={index}
                  geometry={textGeometry}
                  position={[
                    radius * Math.sin(angle),
                    0,
                    radius * Math.cos(angle),
                  ]}
                  material={material}
                  materialIndex={1} // Assuming the red material index is 1
                  rotation={[0, angle, 0]}
                  scale={-1.5}
                />
              );
            })}
          </Geometry>
        </mesh>
      </group>
    );
  }
);

export default BottomTextEngraving;
