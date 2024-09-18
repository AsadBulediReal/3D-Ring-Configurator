// import { CameraControls } from "@react-three/drei";
// import { useEffect, useRef } from "react";

// function CameraWithAnimations({ cameraPosTarget }) {
//   const cameraRef = useRef();
//   useEffect(() => {
//     if (cameraPosTarget?.length === 6) {
//       cameraRef.current?.setLookAt?.(
//         cameraPosTarget[0],
//         cameraPosTarget[1],
//         cameraPosTarget[2],
//         0,
//         0,
//         0,
//         true
//       );
//     }
//     if (cameraRef.current) {
//       cameraRef.current.setPosition(1.8, 1.8, 1.8); // Set the camera position closer
//     }
//   }, [cameraPosTarget]);
//   return (
//     <CameraControls
//       makeDefault
//       smoothTime={1}
//       minDistance={3}
//       maxDistance={3}
//       ref={(ref) => {
//         if (ref) {
//           cameraRef.current = ref;
//           ref.mouseButtons.right = 0;
//           ref.mouseButtons.middle = 0;
//           //   ref.mouseButtons.wheel = 0;
//           console.log([
//             ref.getPosition().x,
//             ref.getPosition().y,
//             ref.getPosition().z,
//             ref.getTarget().x,
//             ref.getTarget().y,
//             ref.getTarget().z,
//           ]);
//         }
//       }}
//     />
//   );
// }
// export default CameraWithAnimations;

import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

function CameraWithAnimations({ cameraPosTarget }) {
  const cameraRef = useRef();
  const initialized = useRef(false); // Ref to track initialization

  useEffect(() => {
    if (cameraPosTarget?.length === 6) {
      cameraRef.current?.setLookAt?.(
        cameraPosTarget[0],
        cameraPosTarget[1],
        cameraPosTarget[2],
        0,
        0,
        0,
        true
      );
    }
    console.log(
      "posi" + cameraPosTarget[0],
      cameraPosTarget[1],
      cameraPosTarget[2]
    );

    if (initialized.current) return; // Skip if already initialized
    if (cameraRef.current) {
      cameraRef.current.setPosition(
        0.06467748940688177,
        3.295286520146695,
        -1.7855349719379543
      ); // Set the camera position closer
    }
    initialized.current = true; // Set the initialization flag to true
  }, [cameraPosTarget]);

  return (
    <CameraControls
      makeDefault
      smoothTime={1}
      minDistance={3}
      maxDistance={3}
      ref={(ref) => {
        if (ref) {
          cameraRef.current = ref;
          ref.mouseButtons.right = 0;
          ref.mouseButtons.middle = 0;
          // ref.mouseButtons.wheel = 0; // Uncomment to disable zoom with the wheel
          console.log([
            ref.getPosition().x,
            ref.getPosition().y,
            ref.getPosition().z,
            ref.getTarget().x,
            ref.getTarget().y,
            ref.getTarget().z,
          ]);
        }
      }}
    />
  );
}

export default CameraWithAnimations;
