// export default TopTextCurved;
import { useEffect, useState } from "react";
import { FontLoader } from "three/examples/jsm/Addons";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

function TopTextCurved({
  selectedMaterial,
  topScaleX,
  topScaleY,
  topZ,
  text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  flipped = 1,
  getScene,
}) {
  let textArray = text.toLocaleUpperCase().split("");
  const { scene } = useThree();
  if (flipped < 0) {
    textArray.reverse();
  }
  const fontLoader = new FontLoader();
  const [font, setFont] = useState(null);

  useEffect(() => {
    fontLoader.load("/Inter_Bold.json", setFont);
    getScene(scene);
  }, []);

  if (font === null) return null;

  // Calculate a dynamic font scale based on the number of characters
  const baseFontSize = 1.4; // Adjust this value for your desired base size
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
  const curve = new THREE.CubicBezierCurve3(...controlPoints);
  const points = curve.getSpacedPoints(textArray.length - 1 + 2);
  const points2 = curve.getPoints(40);

  const textAngle = (angle, adjustmentFactor, index) => {
    let value;
    if (index === 0 && textArray.length > 4) {
      if (textArray.length > 4 && textArray.length <= 8) {
        const angle1 = flipped > 0 ? -0.9 : -0.9;
        return (value = [-0.7 + 0.1, -1.1 + 0.3, angle1 * angle]);
      } else {
        const angle1 = flipped > 0 ? -0.9 : -0.9;
        return (value = [-0.7 + 0.2, -1.1 + 0.1, angle1 * angle]);
      }
    }

    if (index === 1 && textArray.length > 4 && flipped < 0) {
      if (textArray.length > 4 && textArray.length <= 6) {
        const angle1 = flipped > 0 ? -1 : -0.6;
        return (value = [-0.7 - 0.1, -1.1 + 0.8, angle1 * angle]);
      } else if (textArray.length >= 7 && textArray.length <= 8) {
        const angle1 = flipped > 0 ? -1 : -0.7;
        return (value = [-0.7 - 0.1, -1.1 + 0.6, angle1 * angle]);
      }
    }

    if (index === 8 && textArray.length <= 9) {
      const angle1 = flipped > 0 ? -0.95 : -1;
      return (value = [-0.7 + 0.2, 1.1 - 0.1, angle1 * angle]);
    }

    if (index === 8 && textArray.length >= 9) {
      const angle1 = flipped > 0 ? -1 : -1.1;
      const angle2 = flipped > 0 ? -0.8 : -1;
      const angle3 = flipped > 0 ? 0.6 : 0.4;
      return textArray.length === 11
        ? (value = [-0.7 + 0, 1.1 - angle3, angle2 * angle])
        : (value = [-0.7 + 0.2, 1.1 - 0.4, angle1 * angle]);
    }

    if (index >= 9) {
      if (textArray.length > 4 && textArray.length <= 8) {
        return (value = [-0.7 + 0.2, 1.1 - 0.1, -1 * angle]);
      } else {
        const angle1 = flipped > 0 ? -1.1 : -1.3;
        const angle2 = flipped > 0 ? 0.2 : 0.4;
        const angle3 = flipped > 0 ? -0.9 : -1.1;
        const angle4 = flipped > 0 ? 0.1 : 0;
        const angle5 = flipped > 0 ? -1.1 : -1.2;
        const angle6 = flipped > 0 ? 0.2 : 0.3;

        return index === 9 && textArray.length === 10
          ? (value = [-0.5 + angle2, 1.1 - 0.3, angle1 * angle])
          : index === 9 && textArray.length === 11
          ? (value = [-0.5 - angle4, 1.1 - 0.3, angle3 * angle])
          : index === 9
          ? (value = [-0.5 - 0.1, 1.1 - 0.3, -0.9 * angle])
          : (value = [-0.5 + angle6, 0.8 + 0, angle5 * angle]);
      }
    }
    if (index >= 4 && index <= 7 && textArray.length >= 9) {
      if (textArray.length === 9) {
        const angle1 = flipped > 0 ? -0.9 : -1;
        const angle2 = flipped > 0 ? -0.75 : -0.9;
        return index === 7
          ? (value = [-1 + 0.4, 2 - 1.2, angle1 * angle])
          : index === 6
          ? (value = [-1 + 0.2, 1.4 - 1, angle2 * angle])
          : index === 5
          ? (value = [-1 + 0.1, 1.1 - 1, -0.75 * angle])
          : (value = [-1 + 0.25, 1.1 - 1.1, -0.75 * angle]);
      } else {
        const angle1 = flipped > 0 ? -0.75 : -0.9;
        const angle2 = flipped > 0 ? -0.75 : -0.5;
        return index === 7 && textArray.length === 11
          ? (value = [-1 + 0.2, 1.6 - 1.2, angle1 * angle])
          : index === 7
          ? (value = [-1 + 0.2, 1.8 - 1.2, angle1 * angle])
          : index === 6 && textArray.length === 11
          ? (value = [-1 + 0.2, 1 - 0.8, angle1 * angle])
          : index === 6
          ? (value = [-1 + 0.2, 1.3 - 1, angle1 * angle])
          : index === 5 && textArray.length === 11
          ? (value = [-1 + 0.2, 1 - 1, -0.75 * angle])
          : index === 5
          ? (value = [-1 + 0.1, 1.1 - 1, angle1 * angle])
          : index === 4 && textArray.length === 11
          ? (value = [-1 + 0.2, 0.8 - 1, angle2 * angle])
          : (value = [-1 + 0.1, 1.1 - 1.2, -0.4 * angle]);
      }
    }

    if (index === 4 && textArray.length === 5) {
      const angle1 = flipped > 0 ? -0.9 : -0.95;
      return (value = [-0.7 + 0.1, 1.8 - 1, angle1 * angle]);
    }

    if (index === 3 && textArray.length === 11 && flipped < 0) {
      return (value = [-1 + 0.2, 0.8 - 1.1, -0.6 * angle]);
    }
    if (index === 5) {
      const angle1 = flipped > 0 ? -0.6 : -0.8;
      const angle2 = flipped > 0 ? -0.7 : -0.8;
      return textArray.length === 6
        ? (value = [-0.7 + 0.1, 1.8 - 1, -0.9 * angle])
        : textArray.length === 8
        ? (value = [-0.7 - 0.2, 0.3 + 0.1, angle1 * angle])
        : textArray.length === 7
        ? (value = [-0.7 - 0.1, 0.6 - 0, angle2 * angle])
        : textArray.length === 11
        ? (value = [-0.7 + 0.1, 1.8 - 1, -0.9 * angle])
        : (value = [-0.7 - 0.2, 0.3 + 0.1, -0.6 * angle]);
    }
    if (index === 6) {
      const angle1 = flipped > 0 ? -1 : -1.1;
      const angle2 = flipped > 0 ? -0.75 : -0.95;
      return textArray.length === 7
        ? (value = [-0.5 + 0.1, 1.8 - 1, angle1 * angle])
        : (value = [
            -Math.PI / 4.3 + (-angle * flipped - Math.PI / 4) * 0.05,
            angle,
            angle2 * angle,
          ]);
    }

    if (index === 7 && textArray.length === 8) {
      const angle1 = flipped > 0 ? -1 : -1.08;
      return (value = [-0.5 + 0.1, 1.8 - 1, angle1 * angle]);
    }

    if (index === 10) {
      return (value = [
        -Math.PI / 4.3 + (-angle * flipped - Math.PI / 4) * 0.05,
        angle,
        adjustmentFactor * angle,
      ]);
    } else {
      let value;
      index === 0 && textArray.length === 4
        ? (value = -0.8)
        : index === 4 && textArray.length >= 6
        ? (value = -0.9)
        : textArray.length === 6
        ? (value = -0.9)
        : textArray.length >= 6
        ? (value = -0.7)
        : index === 1
        ? (value = -0.7)
        : (value = -0.9);
      const angle1 = flipped > 0 ? adjustmentFactor : value;
      return (value = [
        -Math.PI / 4.3 + (-angle * flipped - Math.PI / 4) * 0.05,
        angle,
        angle1 * angle,
      ]);
    }
  };

  return (
    <group position={[0, 0.25 * flipped, 14.85]} scale={[-1, flipped, 1]}>
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
        textGeometry.translate(-0.8, 0, 0);

        const material = new THREE.MeshStandardMaterial({
          color: selectedMaterial.color,
          metalness: selectedMaterial.metalness,
          roughness: selectedMaterial.roughness,
        });
        const mesh = new THREE.Mesh(textGeometry, material);
        // set custom position
        const posi = [...position];
        if (char === "I") {
          const posi = [...position];
          textArray.length <= 4
            ? mesh.position.set(posi[0] + 0.4, posi[1] + 0.1, posi[2])
            : mesh.position.set(posi[0] + 0.2, posi[1] + 0.4, posi[2]);
        } else if (char === "L") {
          mesh.position.set(posi[0] + 0, posi[1] + 0.1, posi[2] - 0.05);
        } else if (index === 0) {
          if (textArray.length >= 9) {
            mesh.position.set(posi[0] - 0, posi[1] - 0, posi[2] - 0.1);
          } else {
            mesh.position.set(posi[0] - 0.1, posi[1] + 0.1, posi[2] - 0.1);
          }
        } else if (index === 1 && textArray.length >= 9) {
          mesh.position.set(posi[0] - 0, posi[1] + 0, posi[2] - 0.1);
        } else if (index === 1) {
          mesh.position.set(posi[0] - 0, posi[1] + 0.15, posi[2] - 0.1);
        } else if (index >= 2 && index <= 3 && textArray.length > 8) {
          index === 2
            ? mesh.position.set(posi[0] - 0, posi[1] + 0.1, posi[2] - 0.1)
            : mesh.position.set(posi[0] - 0, posi[1] + 0.1, posi[2] - 0.1);
        } else if (index >= 3 && index <= 5 && textArray.length >= 7) {
          index === 3
            ? mesh.position.set(posi[0] - 0.1, posi[1] - 0, posi[2] - 0.1)
            : index === 4
            ? mesh.position.set(posi[0] + 0, posi[1] - 0, posi[2] - 0.1)
            : textArray.length === 7
            ? mesh.position.set(posi[0] - 0, posi[1] - 0, posi[2] - 0.12)
            : index === 5 && textArray.length === 11
            ? mesh.position.set(posi[0] + 0, posi[1] + 0, posi[2] - 0.1)
            : mesh.position.set(posi[0] - 0, posi[1] - 0.1, posi[2] - 0.12);
        } else if (index === 6) {
          const angle1 = flipped > 0 ? 0 : 0.2;
          textArray.length === 7
            ? mesh.position.set(posi[0] + 0.2, posi[1] - 0, posi[2] - 0.1)
            : textArray.length === 11
            ? mesh.position.set(posi[0] + 0.1, posi[1] - 0, posi[2] - 0.12)
            : mesh.position.set(posi[0] + 0.1, posi[1] - 0, posi[2] - 0.15);
        } else if (index === 7) {
          const angle1 = flipped > 0 ? 0 : 0.2;
          textArray.length === 8
            ? mesh.position.set(posi[0] + 0.2, posi[1] - 0, posi[2] - 0.1)
            : textArray.length === 11
            ? mesh.position.set(posi[0] + angle1, posi[1] + 0, posi[2] - 0.1)
            : textArray.length === 10
            ? mesh.position.set(posi[0] + 0.1, posi[1] + 0, posi[2] - 0.1)
            : mesh.position.set(posi[0] + 0.1, posi[1] + 0.1, posi[2] - 0.1);
        } else if (index >= 4 && index <= 7 && textArray.length > 8) {
          if (textArray.length === 8) {
            index === 5
              ? mesh.position.set(posi[0] - 0, posi[1] - 0.1, posi[2] - 0)
              : index >= 6
              ? mesh.position.set(posi[0] - 0, posi[1] - 0, posi[2] - 0.1)
              : mesh.position.set(posi[0] - 0, posi[1] + 0.1, posi[2] - 0.05);
          } else {
            index === 5
              ? mesh.position.set(posi[0] - 0, posi[1] - 0, posi[2] - 0.1)
              : index === 6
              ? mesh.position.set(posi[0] - 0, posi[1] - 0, posi[2] - 0.1)
              : index >= 7
              ? mesh.position.set(posi[0] - 0, posi[1] + 0, posi[2] - 0.1)
              : mesh.position.set(posi[0] - 0, posi[1] + 0.1, posi[2] - 0.05);
          }
        } else if (
          index <= 5 &&
          textArray.length >= 7 &&
          textArray.length <= 9
        ) {
          if (index >= 3 && index <= 5) {
            mesh.position.set(posi[0] + 0, posi[1] + 0, posi[2] + 0);
          } else {
            mesh.position.set(posi[0] + 0, posi[1] + 0, posi[2] - 0.1);
          }
        } else if (index >= 2 && index <= 7 && textArray.length <= 10) {
          mesh.position.set(posi[0] + 0.1, posi[1] + 0, posi[2] - 0.1);
        } else if (index === 8 && textArray.length <= 9) {
          mesh.position.set(posi[0] + 0, posi[1] + 0, posi[2] - 0.1);
        } else if (index === 8 && text.length >= 9) {
          textArray.length === 11
            ? mesh.position.set(posi[0] + 0.2, posi[1] + 0, posi[2] - 0.1)
            : mesh.position.set(posi[0] + 0.2, posi[1] + 0, posi[2] - 0.13);
        } else if (index === 9 && text.length >= 10) {
          const angle1 = flipped > 0 ? 0.1 : 0.15;
          text.length === 10
            ? mesh.position.set(posi[0] + 0.3, posi[1] - 0.15, posi[2] - 0.04)
            : mesh.position.set(posi[0] + 0.2, posi[1] - 0.1, posi[2] - angle1);
        } else if (index === 10 && text.length >= 10) {
          const angle1 = flipped > 0 ? 0.1 : 0.12;
          mesh.position.set(posi[0] + 0.3, posi[1] - 0.2, posi[2] - angle1);
        } else {
          mesh.position.copy(position); // Set position on Bezier curve
        }
        mesh.scale.set(fontScale * flipped, -fontScale, 1); // Apply dynamic scale
        function getAngleAdjustment(index, numCharacters, char) {
          // Define a threshold (adjust this value as needed)
          const threshold = Math.floor(numCharacters / 2);

          // Set different adjustment factors for different sections
          if (char === "L") {
            return -0.9;
          }

          if (flipped > 0 && index === 1 && textArray.length <= 10) {
            return -0.85;
          }

          if (flipped > 0 && index === 2 && textArray.length === 9) {
            return -0.95;
          }

          if (flipped > 0 && textArray.length <= 4) {
            return index < threshold
              ? -0.85
              : textArray.length > -1.8
              ? -0.8
              : -0.7;
          } else if (
            flipped > 0 &&
            textArray.length >= 5 &&
            textArray.length <= 6
          ) {
            return index < threshold
              ? -0.85
              : textArray.length > -1.8
              ? -0.8
              : -0.5;
          } else if (
            flipped > 0 &&
            textArray.length >= 7 &&
            textArray.length <= 10
          ) {
            return index < threshold
              ? -0.8
              : textArray.length > -1.8
              ? -0.68
              : -0.8;
          } else if (flipped > 0 && textArray.length === 11) {
            return index < threshold
              ? -0.85
              : textArray.length > -1.8
              ? -0.68
              : -0.8;
          } else {
            return index < threshold
              ? -0.6
              : textArray.length > -1.8
              ? -0.9
              : -0.8;
          }
        }

        const angle = Math.atan2(position.x, position.y);
        const adjustmentFactor = getAngleAdjustment(
          index,
          textArray.length,
          char
        );
        mesh.rotation.set(...textAngle(angle, adjustmentFactor, index));

        return <primitive object={mesh} key={index} />;
      })}
    </group>
  );
}

export default TopTextCurved;

// export default TopTextCurved;
// import { useEffect, useState } from "react";
// import { FontLoader } from "three/examples/jsm/Addons";
// import * as THREE from "three";

// function TopTextCurved({
//   selectedMaterial,
//   topScaleX,
//   topScaleY,
//   topZ,
//   text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   flipped = 1,
// }) {
//   let textArray = text.split("");
//   if (flipped < 0) {
//     textArray.reverse();
//   }
//   const fontLoader = new FontLoader();
//   const [font, setFont] = useState(null);

//   useEffect(() => {
//     fontLoader.load("/Inter_Bold.json", setFont);
//   }, []);

//   if (font === null) return null;

//   // Calculate a dynamic font scale based on the number of characters
//   const baseFontSize = 1.4; // Adjust this value for your desired base size
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
//   const curve = new THREE.CubicBezierCurve3(...controlPoints);
//   const points = curve.getSpacedPoints(textArray.length - 1 + 2);
//   const points2 = curve.getPoints(40);

//   const textAngle = (angle, adjustmentFactor, index) => {
//     let value;
//     if (index === 10) {
//       return (value = [
//         -Math.PI / 4.3 + (-angle * flipped - Math.PI / 4) * 0.05,
//         angle,
//         adjustmentFactor * angle,
//       ]);
//       // return (value = [-0.4, 0.8, adjustmentFactor * angle]);
//     } else if (index === 9) {
//       return (value = [
//        -0.78,
//         1.1,
//         adjustmentFactor * angle,
//       ]);
//       // return (value = [-0.4, 0.8, adjustmentFactor * angle]);
//     } else if (index === 0 && textArray.length >= 8) {
//       // return (value = [
//       //  -0.4,
//       //   -1.4,
//       //   adjustmentFactor * angle,
//       // ]);
//       return (value = [-0.4 - 0.55 + 0.2, -0.8 - 0.1, adjustmentFactor * angle]);
//     } else {
//       return (value = [
//         -Math.PI / 4.3 + (-angle * flipped - Math.PI / 4) * 0.05,
//         angle,
//         adjustmentFactor * angle,
//       ]);
//     }
//   };

//   return (
//     <group position={[0, 0.25 * flipped, 14.85]} scale={[-1, flipped, 1]}>
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
//         textGeometry.translate(-0.8, 0, 0);

//         const material = new THREE.MeshStandardMaterial({
//           color: selectedMaterial.color,
//           metalness: selectedMaterial.metalness,
//           roughness: selectedMaterial.roughness,
//         });
//         const mesh = new THREE.Mesh(textGeometry, material);
//         // set custom position
//         const posi = [...position];
//         if (char === "i" || char === "I" || char === "l") {
//           const posi = [...position];
//           textArray.length <= 4
//             ? mesh.position.set(posi[0] + 0.4, posi[1] + 0.1, posi[2])
//             : mesh.position.set(posi[0] + 0.2, posi[1] + 0.4, posi[2]);
//         } else if (char === "L") {
//           mesh.position.set(posi[0] + 0, posi[1] + 0.1, posi[2] - 0.05);
//         } else if (index === 0 && textArray.length >= 8) {
//           mesh.position.set(posi[0] + 0, posi[1] - 0.4, posi[2] + 0.1);
//         } else if (index === 8) {
//           mesh.position.set(posi[0] + 0, posi[1] - 0.2, posi[2] + 0.1);
//         } else if (index === 9) {
//           mesh.position.set(posi[0] + 0, posi[1] - 0.3, posi[2] + 0.15);
//         } else {
//           mesh.position.set(posi[0] + 0, posi[1] - 0.2, posi[2] + 0.1); // Set position on Bezier curve
//         }
//         mesh.scale.set(fontScale * flipped, -fontScale, 1); // Apply dynamic scale
//         function getAngleAdjustment(index, numCharacters, char) {
//           // Define a threshold (adjust this value as needed)
//           const threshold = Math.floor(numCharacters / 2);

//           // Set different adjustment factors for different sections
//           if (char === "L") {
//             return -0.9;
//           }

//           if (flipped > 0) {
//             return index < threshold
//               ? -0.78
//               : textArray.length > -1.8
//               ? -0.7
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
//         mesh.rotation.set(...textAngle(angle, adjustmentFactor, index));

//         return <primitive object={mesh} key={index} />;
//       })}
//     </group>
//   );
// }

// export default TopTextCurved;
