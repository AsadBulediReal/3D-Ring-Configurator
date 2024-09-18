// import {
//   Caustics,
//   CubeCamera,
//   MeshRefractionMaterial,
//   useGLTF,
// } from "@react-three/drei";

// import { useLoader } from "@react-three/fiber";
// import { useRef } from "react";
// import { Color } from "three";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
// import { MeshStandardMaterial } from "three";

// function Stone({ color, isExporting }) {
//   const ref = useRef();
//   const { nodes } = useGLTF("/rings/diamonds1.glb");
//   const texture = useLoader(
//     RGBELoader,
//     "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
//   );

//   const config = {
//     bounces: 1,
//     aberrationStrength: 0.01,
//     ior: 1.3,
//     fresnel: 0.01,
//     color: color,
//   };
//   return (
//     <>
//       <group rotation={[Math.PI / 2, 0, 0]}>
//         <CubeCamera resolution={256} frames={1} envMap={texture}>
//           {(envMap) => (
//             <mesh
//               ref={ref}
//               geometry={nodes.diamondwhite.geometry}
//               position={nodes.diamondwhite.position}
//               rotation={nodes.diamondwhite.rotation}
//               scale={nodes.diamondwhite.scale}
//               frustumCulled={false}
//             >
//               <meshStandardMaterial
//                 envMap={envMap}
//                 color={color}
//                 roughness={0.2}
//                 metalness={1}
//               />
//             </mesh>
//           )}
//         </CubeCamera>
//       </group>
//     </>
//   );
// }

// export default Stone;

import {
  Caustics,
  CubeCamera,
  MeshRefractionMaterial,
  useGLTF,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Color } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { MeshStandardMaterial } from "three";

function Stone({ color, isExporting }) {
  const ref = useRef();
  const { nodes } = useGLTF("/rings/diamonds1.glb");
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  const config = {
    bounces: 1,
    aberrationStrength: 0.01,
    ior: 1.3,
    fresnel: 0.01,
    color: color,
  };
  return (
    <>
      {isExporting ? (
        <group rotation={[Math.PI / 2, 0, 0]}>
          <CubeCamera resolution={256} frames={1} envMap={texture}>
            {(envMap) => (
              <mesh
                ref={ref}
                geometry={nodes.diamondwhite.geometry}
                position={nodes.diamondwhite.position}
                rotation={nodes.diamondwhite.rotation}
                scale={nodes.diamondwhite.scale}
                frustumCulled={false}
              >
                <meshStandardMaterial
                  envMap={envMap}
                  color={color}
                  roughness={0.2}
                  metalness={1}
                />
              </mesh>
            )}
          </CubeCamera>
        </group>
      ) : (
        <group rotation={[Math.PI / 2, 0, 0]}>
          <CubeCamera resolution={256} frames={1} envMap={texture}>
            {(texture) => (
              <mesh
                // castShadow
                ref={ref}
                geometry={nodes.diamondwhite.geometry}
                position={nodes.diamondwhite.position}
                rotation={nodes.diamondwhite.rotation}
                scale={nodes.diamondwhite.scale}
                frustumCulled={false}
              >
                <MeshRefractionMaterial
                  envMap={texture}
                  {...config}
                  toneMapped={false}
                />
              </mesh>
            )}
          </CubeCamera>
        </group>
      )}
    </>
  );
}

export default Stone;
