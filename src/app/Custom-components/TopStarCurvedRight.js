// import { useEffect, useState } from "react";
// import { FontLoader } from "three/examples/jsm/Addons";
// import * as THREE from "three";


// function TopStarCurved({
//   selectedMaterial,
//   topScaleX,
//   topScaleY,
//   topZ,
//   text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   flipped = 1,
//   totallText,
// }) {
//   let totallTextArray = totallText.split("");
//   let textArray = text.split("");
//   if (flipped < 0) {
//     textArray.reverse();
//   }
//   const fontLoader = new FontLoader();
//   const [font, setFont] = useState(null);

//   const { rotation } = useControls({
//     rotation: {
//       x: 0,
//       y: 0,
//       z: 0,
//     },
//   });

//   useEffect(() => {
//     fontLoader.load("/Inter_Bold.json", setFont);
//   }, []);

//   if (font === null) return null;

//   // Calculate a dynamic font scale based on the number of characters
//   const baseFontSize = 1.2; // Adjust this value for your desired base size
//   const numCharacters = textArray.length;

//   // Control the decrease rate: smaller `decreaseFactor` results in a slower decrease
//   const decreaseFactor = 0.03; // Adjust this value for the desired decrease speed

//   const fontScale = Math.max(
//     baseFontSize - (numCharacters - 1) * decreaseFactor,
//     0.5 // Set a minimum font size to prevent excessively small text
//   );

//   const controlPoints = [
//     new THREE.Vector3(-3.5 * topScaleX, 0.8 * topScaleY, topZ),
//     new THREE.Vector3(-3.4 * topScaleX, 6 * topScaleY, topZ),
//     new THREE.Vector3(3.4 * topScaleX, 6 * topScaleY, topZ),
//     new THREE.Vector3(3.5 * topScaleX, 0.8 * topScaleY, topZ),
//   ];

//   const starPosition = () => {
//     let value = 150;
//     if (totallTextArray.length === 1 || totallTextArray.length === 0) {
//       return (value = 5);
//     } else if (totallTextArray.length === 2) {
//       return (value = 10);
//     } else if (totallTextArray.length === 3) {
//       return (value = 100);
//     }
//     return value;
//   };

//   const curve = new THREE.CubicBezierCurve3(...controlPoints);
//   const position = starPosition();
//   console.log(totallTextArray);
//   const points = curve.getSpacedPoints(2 - 1 + starPosition());
//   const points2 = curve.getPoints(40);

//   return (
//     <group position={[0, 0.25 * flipped, 14.85]} scale={[-1, flipped, 1.2]}>
//       {points2.map((point, index) => (
//         <mesh
//           key={`control-point-${index}`}
//           scale={0.1}
//           position={[point.x, point.y, point.z]}
//         >
//           <sphereGeometry />
//           <meshBasicMaterial color="red" />
//         </mesh>
//       ))}

//       {textArray.map((char, index) => {
//         const position = points[index + 1];
//         const shape = font.generateShapes(char, fontScale); // Apply dynamic font scale

//         const extrudeSettings = {
//           depth: 0.6,
//           bevelEnabled: false,
//         };
//         const textGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
//         textGeometry.computeBoundingBox();
//         const boundingBox = textGeometry.boundingBox;
//         const center = new THREE.Vector3();
//         boundingBox.getCenter(center);
//         textGeometry.translate(-0.9, 0, 0);

//         const material = new THREE.MeshStandardMaterial({
//           color: selectedMaterial.color,
//           metalness: selectedMaterial.metalness,
//           roughness: selectedMaterial.roughness,
//         });
//         const mesh = new THREE.Mesh(textGeometry, material);
//         // set custom position
//         const posi = [...position];

//         if (char === "★") {
//           mesh.position.set(posi[0] + -0.4, posi[1] + -2, posi[2] + 0.8);
//         }
//         mesh.scale.set(fontScale * flipped, -fontScale, 1); // Apply dynamic scale
//         function getAngleAdjustment(index, numCharacters, char) {
//           // Define a threshold (adjust this value as needed)
//           const threshold = Math.floor(numCharacters / 2);

//           // Set different adjustment factors for different sections

//           if (char === "★" && totallTextArray.length === 1) {
//             return -1;
//           } else if (totallTextArray.length === 2) {
//             return 0.4;
//           } else if (totallTextArray.length === 2) {
//             return 0.3;
//           } else if (totallTextArray.length < 5) {
//             return 0.8;
//           }
//           return -1;
//           if (flipped > 0) {
//             return index < threshold
//               ? -0.74
//               : textArray.length > -1.8
//               ? -0.6
//               : -0.7;
//           } else {
//             return index < threshold
//               ? -0.6
//               : textArray.length > -1.8
//               ? -0.76
//               : -0.8;
//           }
//         }

//         const angle = Math.atan2(position.x, position.y);
//         const adjustmentFactor = getAngleAdjustment(
//           index,
//           textArray.length,
//           char
//         );
//         console.log(angle);
//         mesh.rotation.set(0.4, -1, -0.6 * angle);

//         return <primitive object={mesh} key={index} />;
//       })}
//     </group>
//   );
// }

// export default TopStarCurved;

import { useEffect, useState } from "react";
import { FontLoader } from "three/examples/jsm/Addons";
import * as THREE from "three";


function TopStarCurved({
  selectedMaterial,
  topScaleX,
  topScaleY,
  topZ,
  text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  flipped = 1,
  totallText,
}) {
  let totallTextArray = totallText.split("");
  let textArray = text.split("");
  if (flipped < 0) {
    textArray.reverse();
  }
  const fontLoader = new FontLoader();
  const [font, setFont] = useState(null);

  useEffect(() => {
    fontLoader.load("/Inter_Bold.json", setFont);
  }, []);

  if (font === null) return null;

  // Calculate a dynamic font scale based on the number of characters
  const baseFontSize = 1.1; // Adjust this value for your desired base size
  const numCharacters = textArray.length;

  // Control the decrease rate: smaller `decreaseFactor` results in a slower decrease
  const decreaseFactor = 0.03; // Adjust this value for the desired decrease speed

  const fontScale = Math.max(
    baseFontSize - (numCharacters - 1) * decreaseFactor,
    0.5 // Set a minimum font size to prevent excessively small text
  );

  const controlPoints = [
    new THREE.Vector3(-3.5 * topScaleX, 0.8 * topScaleY, topZ),
    new THREE.Vector3(-3.4 * topScaleX, 6 * topScaleY, topZ),
    new THREE.Vector3(3.4 * topScaleX, 6 * topScaleY, topZ),
    new THREE.Vector3(3.5 * topScaleX, 0.8 * topScaleY, topZ),
  ];

  const starPosition = () => {
    let value = 150;
    if (totallTextArray.length === 1 || totallTextArray.length === 0) {
      return (value = 5);
    } else if (totallTextArray.length === 2) {
      return (value = 10);
    } else if (totallTextArray.length === 3) {
      return (value = 100);
    }
    return value;
  };

  const curve = new THREE.CubicBezierCurve3(...controlPoints);
  const position = starPosition();
  console.log(totallTextArray);
  const points = curve.getSpacedPoints(2 - 1 + starPosition());
  const points2 = curve.getPoints(40);

  const textAngle = (angle, adjustmentFactor) => {
    let value;
    if (totallTextArray.length <= 1) {
      return (value = [-0.4, 0.8, adjustmentFactor * angle]);
    } else if (totallTextArray.length >= 3 || totallTextArray.length < 5) {
      return (value = [-0.2 + 0.1, 0.8, adjustmentFactor * angle]);
    } else {
      return (value = [-0.2, 1, adjustmentFactor * angle]);
    }
  };

  return (
    <group position={[0, 0.25 * flipped, 14.85]} scale={[-1, flipped, 1.2]}>
      {points2.map((point, index) => (
        <mesh
          key={`control-point-${index}`}
          scale={0.1}
          position={[point.x, point.y, point.z]}
        >
          <sphereGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
      ))}

      {textArray.map((char, index) => {
        const position = points[index + 1];
        const shape = font.generateShapes(char, fontScale); // Apply dynamic font scale

        const extrudeSettings = {
          depth: 0.6,
          bevelEnabled: false,
        };
        const textGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        textGeometry.computeBoundingBox();
        const boundingBox = textGeometry.boundingBox;
        const center = new THREE.Vector3();
        boundingBox.getCenter(center);
        textGeometry.translate(-0.9, 0, 0);

        const material = new THREE.MeshStandardMaterial({
          color: selectedMaterial.color,
          metalness: selectedMaterial.metalness,
          roughness: selectedMaterial.roughness,
        });
        const mesh = new THREE.Mesh(textGeometry, material);
        // set custom position
        const posi = [...position];

        if (
          (char === "★" && totallText.length === 1) ||
          totallTextArray.length === 0
        ) {
          mesh.position.set(posi[0] + 6.5, posi[1] + 0.5, posi[2] + 0.7);
        } else if (totallTextArray.length === 2) {
          mesh.position.set(posi[0] + 6.6, posi[1] + 0.6, posi[2] + 1.2);
        } else if (totallTextArray.length === 3) {
          mesh.position.set(posi[0] + 7, posi[1] + 0.7, posi[2] + 1.2);
        } else if (totallTextArray.length === 4) {
          mesh.position.set(posi[0] + 7, posi[1] - 0, posi[2] + 1.2);
        } else if (totallTextArray.length === 5) {
          mesh.position.set(posi[0] + 7.1, posi[1] + -0.4, posi[2] + 1.2);
        } else if (totallTextArray.length >= 6 && totallTextArray.length < 8) {
          mesh.position.set(posi[0] + 7.1, posi[1] + -0.55, posi[2] + 1.2);
        } else if (totallTextArray.length >= 8) {
          mesh.position.set(posi[0] + 7.1, posi[1] - 0.55, posi[2] + 1.2);
        }
        mesh.scale.set(fontScale * flipped, -fontScale, 1); // Apply dynamic scale
        function getAngleAdjustment(index, numCharacters, char) {
          // Define a threshold (adjust this value as needed)
          const threshold = Math.floor(numCharacters / 2);

          // Set different adjustment factors for different sections

          if (
            (char === "★" && totallTextArray.length === 1) ||
            totallTextArray.length === 0
          ) {
            return -0.3;
          } else if (totallTextArray.length === 2) {
            return -1;
          } else if (totallTextArray.length === 3) {
            return -0.8;
          } else if (totallTextArray.length === 4) {
            return -0.8;
          } else if (totallTextArray.length === 5) {
            return -0.8;
          } else if (totallTextArray.length >= 6) {
            return -0.8;
          }
        }

        const angle = Math.atan2(position.x, position.y);
        const adjustmentFactor = getAngleAdjustment(
          index,
          textArray.length,
          char
        );
        console.log(...textAngle(angle, adjustmentFactor));
        // mesh.rotation.set(1, -2, adjustmentFactor * angle);
        mesh.rotation.set(...textAngle(angle, adjustmentFactor));

        return <primitive object={mesh} key={index} />;
      })}
    </group>
  );
}

export default TopStarCurved;
