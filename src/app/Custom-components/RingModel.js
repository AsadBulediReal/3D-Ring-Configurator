// import { CameraControls, Environment, OrbitControls } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
// import { BridgeMesh } from "./BridgeMesh";
// import * as THREE from "three";

// import { useEffect, useMemo, useRef, useState } from "react";
// import ExtrudedSVG from "./ExtrudedSVG";
// import BottomTextEngraving from "./BottomTextEngraving";
// import CurvedText from "./CurvedText";
// import { Base, Geometry } from "@react-three/csg";
// import TopTextCurved from "./TopTextCurved";
// import RightTextCurved from "./RightTextCurved";
// import Stone from "./Stone";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";
// import BirthstonePicker from "./BirthstonePicker";
// import CameraWithAnimations from "./CameraWithAnimation";
// import {
//   GLTFExporter,
//   OBJExporter,
//   STLExporter,
// } from "three/examples/jsm/Addons";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../../../@/components/ui/accordion";

// const RingModel = () => {
//   const canvasRef = useRef();
//   const modelSizes = [
//     // {
//     //   model: "/rings_sizes/SZ 5.3dm",
//     //   size: "5",
//     //   scale: 1.0125,
//     //   stoneScale: 1.01,
//     // },
//     {
//       model: "/rings_sizes/SZ 5.5.3dm",
//       size: "5.5",
//       scale: 0.813,
//       stoneScale: 0.875,
//       geometry: 48,
//       topScaleX: 1.08,
//       topScaleY: 1.05,
//       topZ: -4.1,
//       sideScale: 0.995,
//     },
//     {
//       model: "/rings_sizes/SZ 6.3dm",
//       size: "6",
//       scale: 0.835,
//       stoneScale: 0.89,
//       geometry: 50,
//       topScaleX: 1.04,
//       topScaleY: 1.0,
//       topZ: -3.7,
//       sideScale: 0.9982,
//       //  scaleFactorX = 1.04;
//       // const scaleFactorY = 1.0;
//       // const zV = -4 + 0.3;
//     },
//     {
//       model: "/rings_sizes/SZ 6.5.3dm",
//       size: "6.5",
//       scale: 0.858,
//       stoneScale: 0.91,
//       geometry: 0,
//       topScaleX: 1.04,
//       topScaleY: 1.02,
//       topZ: -3.6,
//       sideScale: 1.0014,
//     },
//     {
//       model: "/rings_sizes/SZ 7.3dm",
//       size: "7",
//       scale: 0.877,
//       stoneScale: 0.919,
//       geometry: 60,
//       topScaleX: 1.07,
//       topScaleY: 1.05,
//       topZ: -3.5,
//       sideScale: 1.0046,
//     },
//     {
//       model: "/rings_sizes/SZ 7.5.3dm",
//       size: "7.5",
//       scale: 0.896,
//       stoneScale: 0.93,
//       geometry: 64,
//       topScaleX: 1.08,
//       topScaleY: 1.07,
//       topZ: -3.35,
//       sideScale: 1.0078,
//     },
//     {
//       model: "/rings_sizes/SZ 8.3dm",
//       size: "8",
//       scale: 0.919,
//       stoneScale: 0.942,
//       geometry: 10,
//       topScaleX: 1.1,
//       topScaleY: 1.05,
//       topZ: -3.1,
//       sideScale: 1.011,
//     },
//     {
//       model: "/rings_sizes/SZ 8.5.3dm",
//       size: "8.5",
//       scale: 0.938,
//       stoneScale: 0.953,
//       geometry: 0,
//       topScaleX: 1.12,
//       topScaleY: 1.05,
//       topZ: -3,
//       sideScale: 1.0142,
//     },
//     {
//       model: "/rings_sizes/SZ 9.3dm",
//       size: "9",
//       scale: 0.96,
//       stoneScale: 0.963,
//       geometry: 66,
//       topScaleX: 1.08,
//       topScaleY: 1.05,
//       topZ: -2.6,
//       sideScale: 1.0174,
//     },
//     {
//       model: "/rings_sizes/SZ 9.5.3dm",
//       size: "9.5",
//       scale: 0.9875,
//       stoneScale: 0.978,
//       geometry: 0,
//       topScaleX: 1.08,
//       topScaleY: 1.05,
//       topZ: -2.4,
//       sideScale: 1.0206,
//     },
//     {
//       model: "/rings_sizes/SZ 10.3dm",
//       size: "10",
//       scale: 1.009,
//       stoneScale: 0.99,
//       geometry: 0,
//       topScaleX: 1.06,
//       topScaleY: 1.02,
//       topZ: -2.2,
//       sideScale: 1.0238,
//     },
//     {
//       model: "/rings_sizes/SZ 10.5.3dm",
//       size: "10.5",
//       scale: 1.029,
//       stoneScale: 1.01,
//       geometry: 0,
//       topScaleX: 1.08,
//       topScaleY: 1.02,
//       topZ: -2,
//       sideScale: 1.027,
//     },
//     {
//       model: "/rings_sizes/SZ 11.3dm",
//       size: "11",
//       scale: 1.051,
//       stoneScale: 1.02,
//       geometry: 0,
//       topScaleX: 1.07,
//       topScaleY: 1.02,
//       topZ: -1.8,
//       sideScale: 1.0302,
//     },
//     {
//       model: "/rings_sizes/SZ 11.5.3dm",
//       size: "11.5",
//       scale: 1.071,
//       stoneScale: 1.03,
//       geometry: 0,
//       topScaleX: 1.07,
//       topScaleY: 1.04,
//       topZ: -1.6,
//       sideScale: 1.0334,
//     },
//     {
//       model: "/rings_sizes/SZ 12.3dm",
//       size: "12",
//       scale: 1.085,
//       stoneScale: 1.04,
//       geometry: 70,
//       topScaleX: 1.07,
//       topScaleY: 1.04,
//       topZ: -1.4,
//       sideScale: 1.0366,
//     },
//     {
//       model: "/rings_sizes/SZ 12.5.3dm",
//       size: "12.5",
//       scale: 1.11,
//       stoneScale: 1.05,
//       geometry: 0,
//       topScaleX: 1.07,
//       topScaleY: 1.05,
//       sideScale: 1.0398,
//       topZ: -1.2,
//     },
//   ];

//   const [cameraPosTarget, setCameraPosTarget] = useState([
//     -0.01172012893025394, 3.2752921248200932, -0.5248722244160388,
//   ]);
//   const maxCharacters = 11;
//   const maxCharactersShank = 10;
//   const maxCharactersBottom = 15;
//   const [selectedSize, setSelectedSize] = useState(modelSizes[0]);
//   const myScale = selectedSize.scale;
//   const [model, setModel] = useState();
//   const [error, setError] = useState(null);
//   const [topText1, setTopText1] = useState("");
//   const [topText2, setTopText2] = useState("");
//   const [rightText, setRightText] = useState("");
//   const [leftText, setLeftText] = useState("");

//   const [enableRightText, setEnableRightText] = useState(true);
//   const [enableLeftText, setEnableLeftText] = useState(true);

//   const [enableTopText, setEnableTopText] = useState(true);
//   const [enableLeft, setEnableLeft] = useState(true);
//   const [enableRight, setEnableRight] = useState(true);

//   const [selectedLeftImage, setSelectedLeftImage] = useState("");
//   const [selectedRightImage, setSelectedRightImage] = useState("");
//   const [bottomText, setBottomText] = useState("");
//   const [color, setColor] = useState("#ff0000"); // Default color
//   const [sliderValue, setSliderValue] = useState(0);

//   const materialOptions = [
//     {
//       value: "sterlingSilver",
//       label: "Sterling Silver",
//       color: "#c0c0c0", // Light gray
//       metalness: 1,
//       roughness: 0.2,
//     },
//     {
//       value: "goldPlatedOverSilver",
//       label: "Gold Plated Over Silver",
//       color: "#ffd700", // Gold color
//       metalness: 0.8,
//       roughness: 0.3,
//     },
//     {
//       value: "10KYellowGold",
//       label: "10K Yellow Gold",
//       color: "#ffd700", // Gold color
//       metalness: 0.9,
//       roughness: 0.4,
//     },
//     {
//       value: "10KWhiteGold",
//       label: "10K White Gold",
//       color: "#ffffff", // White color
//       metalness: 0.9,
//       roughness: 0.4,
//     },
//     {
//       value: "14KYellowGold",
//       label: "14K Yellow Gold",
//       color: "#ffd700", // Gold color
//       metalness: 0.95,
//       roughness: 0.3,
//     },
//     {
//       value: "14KWhiteGold",
//       label: "14K White Gold",
//       color: "#ffffff", // White color
//       metalness: 0.95,
//       roughness: 0.3,
//     },
//     {
//       value: "roseGoldPlatedOverSilver",
//       label: "Rose Gold Plated Over Silver",
//       color: "#ffdab9", // Rose Gold color
//       metalness: 0.85,
//       roughness: 0.35,
//     },
//     // Add more material options as needed
//   ];
//   const [selectedMaterial, setSelectedMaterial] = useState(0);

//   const handleMaterialChange = (material) => {
//     setSelectedMaterial(material);
//   };

//   const handleChangeTopText1 = (event) => {
//     if (event.target.value.length <= maxCharacters) {
//       setTopText1(event.target.value);
//     }
//     setCameraPosTarget([
//       0.023390319799149777, 2.5883663013825286, -1.0072221037047675,
//       0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
//     ]);
//   };
//   const handleChangeTopText2 = (event) => {
//     if (event.target.value.length <= maxCharacters) {
//       setTopText2(event.target.value);
//     }
//     setCameraPosTarget([
//       0.01897903732754415, 2.545647462415288, 0.9147422547287468,
//       0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
//     ]);
//   };

//   const handleChangeRightText = (event) => {
//     setRightText(event.target.value);
//     cameraPosTarget[0] === -1.924878367122549
//       ? 0
//       : setCameraPosTarget([
//           -1.924878367122549, 0.9043610940122987, 0.07418633906935732,
//           -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//         ]);
//   };

//   const handleChangeLeftText = (event) => {
//     setLeftText(event.target.value);
//     setCameraPosTarget([
//       1.8594691085774895, 0.9983656785036318, 0.06628664486049485,
//       -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//     ]);
//   };

//   const handleLeftImageChange = (e) => {
//     setSelectedLeftImage(e.target.value);
//     setCameraPosTarget([
//       1.8594691085774895, 0.3983656785036318, 0.06628664486049485,
//       -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//     ]);
//   };

//   const handleRightImageChange = (e) => {
//     setSelectedRightImage(e.target.value);
//     setCameraPosTarget([
//       -1.924878367122549, 0.3043610940122987, 0.07418633906935732,
//       -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//     ]);
//   };
//   const imageOptions = [
//     { value: "heart.svg", label: "heart.svg" },
//     { value: "butterfly.svg", label: "butterfly.svg" },
//     // Add more image options here
//   ];
//   useEffect(() => {
//     try {
//       const loader = new Rhino3dmLoader();
//       loader.load(
//         selectedSize.model,
//         (object) => {
//           setModel(object);
//           console.log(object.children);
//           object.children.forEach((e, i) => {
//             e.material.color = "red";
//           });
//         },
//         (progressEvent) => {},
//         (error) => {
//           setError(error);
//         }
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   }, [selectedSize]);
//   if (error) {
//     return <div>Error loading model: {error.message}</div>;
//   }

//   const handleBottomTextChange = (e) => {
//     if (e.target.value.length <= maxCharactersBottom)
//       setBottomText(e.target.value);
//     setCameraPosTarget([
//       -0.17191261220697443, 0.9160258852260153, -1.5581231106493767,
//       0.030457963074306864, 0.6105591751870776, -0.8648414961936356,
//     ]);
//   };

//   function save(blob, filename) {
//     const link = document.createElement("a");
//     link.style.display = "none";
//     document.body.appendChild(link);
//     console.log(blob.toString());
//     link.href = URL.createObjectURL(blob);
//     link.download = filename;
//     link.click();
//   }

//   function saveString(text, filename) {
//     const myBlob = new Blob([text], { type: "text/plain" });

//     save(myBlob, filename);
//   }
//   const handleExport = () => {
//     const exporting = canvasRef.current.children[0];
//     console.log(exporting);
//     // return;
//     const exporter = new STLExporter();
//     var options = {
//       // trs: true,
//       // onlyVisible: true,
//       // truncateDrawRange: true,
//       // binary: false,
//       // //animations: ,
//       // forceIndices: false,
//       // forcePowerOfTwoTextures: false,
//       // maxTextureSize: Infinity,
//     };
//     const result = exporter.parse(exporting, (e) => {
//       console.log(e);
//       saveString(e, "object.stl");
//     });
//   };

//   console.log(selectedRightImage !== "");

//   return (
//     <div className="flex justify-center bg-white">
//       <div className="w-[30%]">
//         <Accordion type="single" collapsible className="w-full">
//           <AccordionItem value="item-1">
//             <AccordionTrigger>TOP OF RING TEXT</AccordionTrigger>
//             <AccordionContent>
//               <label className="text-[10px] font-bold">TOP TEXT 1</label>
//               <input
//                 type="text"
//                 value={topText1}
//                 onChange={handleChangeTopText1}
//                 maxLength={maxCharacters}
//                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//               />
//               <p className="text-[10px]">
//                 Remaining characters: {maxCharacters - topText1.length}
//               </p>
//               <label className="text-[10px] font-bold">TOP TEXT 2</label>
//               <input
//                 type="text"
//                 value={topText2}
//                 onChange={handleChangeTopText2}
//                 maxLength={maxCharacters}
//                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//               />
//               <p className="text-[10px]">
//                 Remaining characters: {maxCharacters - topText2.length}
//               </p>
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-2">
//             <AccordionTrigger>
//               LEFT & RIGHT SHANK PERSONALIZATION
//             </AccordionTrigger>
//             <AccordionContent>
//               {/* Left Text */}
//               <div>
//                 <label className="text-[10px] font-bold">LEFT TEXT</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={leftText}
//                   onChange={handleChangeLeftText}
//                   maxLength={maxCharactersShank}
//                   placeholder="Left Text"
//                   disabled={!enableLeftText}
//                   className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                 />
//                 <p className="text-[10px]">
//                   Remaining characters: {maxCharactersShank - leftText.length}
//                 </p>

//                 <label className="flex text-[10px] font-bold mt-4">
//                   LEFT IMAGE
//                 </label>

//                 {enableLeft && (
//                   <select
//                     value={selectedLeftImage}
//                     onChange={handleLeftImageChange}
//                     className="mb-4"
//                   >
//                     <option value={""}>Select Image</option>

//                     {imageOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 )}
//               </div>

//               {/* Right Text */}
//               <label className="text-[10px] font-bold">RIGHT TEXT</label>
//               <br />
//               <input
//                 type="text"
//                 value={rightText}
//                 onChange={handleChangeRightText}
//                 maxLength={maxCharactersShank}
//                 placeholder="Right Text"
//                 // disabled={!enableRightText}
//                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//               />
//               <p className="text-[10px]">
//                 Remaining characters: {maxCharactersShank - rightText.length}
//               </p>

//               <label className="flex text-[10px] font-bold mt-4">
//                 RIGHT IMAGE
//               </label>

//               <select
//                 value={selectedRightImage}
//                 onChange={handleRightImageChange}
//                 className="mb-4"
//               >
//                 <option value={""}>Select Image</option>
//                 {imageOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-3">
//             <AccordionTrigger>INSIDE RING ENGRAVING</AccordionTrigger>
//             <AccordionContent>
//               <label className="flex text-[10px] font-bold">INSIDE TEXT</label>
//               <input
//                 type="text"
//                 value={bottomText}
//                 onChange={handleBottomTextChange}
//                 maxLength={maxCharactersBottom}
//                 placeholder="Bottom Text"
//                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//               />
//               <p className="text-[10px]">
//                 Remaining characters: {maxCharactersBottom - bottomText.length}
//               </p>
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-4">
//             <AccordionTrigger>CHOOSE BIRTHSTONE</AccordionTrigger>
//             <AccordionContent>
//               <BirthstonePicker
//                 sele={color}
//                 setColor={setColor}
//                 setCameraPosTarget={setCameraPosTarget}
//               />
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//         <p>Select Metal</p>
//         {materialOptions.map((option, i) => (
//           <div key={i}>
//             <label>
//               <input
//                 type="radio"
//                 value={i}
//                 checked={selectedMaterial === i}
//                 onChange={() => handleMaterialChange(i)}
//               />
//               {option.label}
//             </label>
//           </div>
//         ))}
//         <p>Select Size</p>
//         {modelSizes.map((option, i) => (
//           <div key={i}>
//             <label>
//               <input
//                 type="radio"
//                 value={option.size}
//                 checked={selectedSize.size === option.size}
//                 onChange={() => {
//                   setModel(null);
//                   setSelectedSize(option);
//                 }}
//               />
//               {option.size}
//             </label>
//           </div>
//         ))}
//         <button onClick={handleExport}>export</button>
//       </div>
//       <div className="w-[50%] h-[50vh]">
//         {!model && (
//           <div className="loader absolute top-[330px] left-[60vw]"></div>
//         )}
//         <Canvas
//           className="h-[50vh]"
//           style={{ height: "100vh" }}
//           gl={{ alpha: true }}
//           camera={{ fov: 10, zoom: 0.06 }} // Adjust the FOV here
//         >
//           {/* <ambientLight intensity={0.5} /> */}
//           <pointLight position={[10, 10, 10]} />
//           <Environment preset="sunset" />

//           {model && (
//             <group
//               ref={canvasRef}
//               frustumCulled={false}
//               scale={[0.125, 0.125, 0.125]}
//               rotation={[-Math.PI / 2, 0, 0]}
//               position={[0, 0, 0]}
//             >
//               {model.children.map((e, i) => {
//                 console.log("lenhth:", model.children.length);
//                 return (
//                   <mesh
//                     key={i}
//                     frustumCulled={false}
//                     geometry={
//                       i != selectedSize.geometry
//                         ? model.children[i].geometry
//                         : new THREE.BufferGeometry()
//                     }
//                   >
//                     <meshPhysicalMaterial
//                       {...materialOptions[selectedMaterial]}
//                       opacity={0.5}
//                     />
//                   </mesh>
//                 );
//               })}
//               {enableTopText && (
//                 <group position={[0.0, 0, 0]}>
//                   <TopTextCurved
//                     selectedMaterial={materialOptions[selectedMaterial]}
//                     text={topText1}
//                     topScaleX={selectedSize.topScaleX}
//                     topScaleY={selectedSize.topScaleY}
//                     topZ={selectedSize.topZ}
//                   />

//                   <TopTextCurved
//                     selectedMaterial={materialOptions[selectedMaterial]}
//                     flipped={-1}
//                     text={topText2}
//                     topScaleX={selectedSize.topScaleX}
//                     topScaleY={selectedSize.topScaleY}
//                     topZ={selectedSize.topZ}
//                   />
//                 </group>
//               )}

//               <group scale={selectedSize.stoneScale - 0}>
//                 <Stone color={color} />
//                 <group scale={selectedSize.sideScale}>
//                   {selectedLeftImage !== "" && (
//                     <ExtrudedSVG
//                       size={0.005}
//                       path={selectedLeftImage}
//                       selectedMaterial={materialOptions[selectedMaterial]}
//                     />
//                   )}
//                   {selectedRightImage !== "" && (
//                     <ExtrudedSVG
//                       size={0.005}
//                       flipped={-1}
//                       path={selectedRightImage}
//                       selectedMaterial={materialOptions[selectedMaterial]}
//                     />
//                   )}

//                   {enableRightText && (
//                     <RightTextCurved
//                       text={rightText}
//                       selectedMaterial={materialOptions[selectedMaterial]}
//                     />
//                   )}
//                   {enableLeftText && (
//                     <RightTextCurved
//                       text={leftText}
//                       flipped={-1}
//                       selectedMaterial={materialOptions[selectedMaterial]}
//                     />
//                   )}
//                 </group>
//               </group>
//               <group scale={myScale}>
//                 <BottomTextEngraving
//                   model={model.children[selectedSize.geometry].geometry}
//                   bottomText={bottomText}
//                   maxCharactersBottom={maxCharactersBottom}
//                   selectedMaterial={materialOptions[selectedMaterial]}
//                   myScale={myScale}
//                 />
//               </group>
//             </group>
//           )}
//           <CameraWithAnimations cameraPosTarget={cameraPosTarget} />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default RingModel;

// import { CameraControls, Environment, OrbitControls } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
// import { BridgeMesh } from "./BridgeMesh";
// import * as THREE from "three";

// import { useEffect, useMemo, useRef, useState } from "react";
// import ExtrudedSVG from "./ExtrudedSVG";
// import BottomTextEngraving from "./BottomTextEngraving";
// import CurvedText from "./CurvedText";
// import { Base, Geometry } from "@react-three/csg";
// import TopTextCurved from "./TopTextCurved";
// import RightTextCurved from "./RightTextCurved";
// import Stone from "./Stone";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";
// import BirthstonePicker from "./BirthstonePicker";
// import CameraWithAnimations from "./CameraWithAnimation";
// import TopStarCurved from "./TopStarCurved";
// import TopStarCurvedRight from "./TopStarCurvedRight";
// import {
//   BufferGeometryUtils,
//   GLTFExporter,
//   OBJExporter,
//   STLExporter,
// } from "three/examples/jsm/Addons";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../../../@/components/ui/accordion";

// const RingModel = () => {
//   const canvasRef = useRef();
//   const modelSizes = [
//     // {
//     //   model: "/rings_sizes/SZ 5.3dm",
//     //   size: "5",
//     //   scale: 1.0125,
//     //   stoneScale: 1.01,
//     // },
//     {
//       model: "/rings_sizes/SZ 5.5.3dm",
//       size: "5.5",
//       scale: 0.813,
//       stoneScale: 0.875,
//       geometry: 48,
//       topScaleX: 1.08,
//       topScaleY: 1.05,
//       topZ: -4.1,
//       sideScale: 0.995,
//     },
//     {
//       model: "/rings_sizes/SZ 6.3dm",
//       size: "6",
//       scale: 0.835,
//       stoneScale: 0.89,
//       geometry: 50,
//       topScaleX: 1.1,
//       topScaleY: 1.04,
//       topZ: -3.7,
//       sideScale: 0.9982,
//       //  scaleFactorX = 1.04;
//       // const scaleFactorY = 1.0;
//       // const zV = -4 + 0.3;
//     },
//     {
//       model: "/rings_sizes/SZ 6.5.3dm",
//       size: "6.5",
//       scale: 0.858,
//       stoneScale: 0.91,
//       geometry: 0,
//       topScaleX: 1.08,
//       topScaleY: 1.02,
//       topZ: -3.7,
//       sideScale: 1.0014,
//     },
//     {
//       model: "/rings_sizes/SZ 7.3dm",
//       size: "7",
//       scale: 0.877,
//       stoneScale: 0.919,
//       geometry: 60,
//       topScaleX: 1.07,
//       topScaleY: 1.05,
//       topZ: -3.5,
//       sideScale: 1.0046,
//     },
//     {
//       model: "/rings_sizes/SZ 7.5.3dm",
//       size: "7.5",
//       scale: 0.896,
//       stoneScale: 0.93,
//       geometry: 64,
//       topScaleX: 1.08,
//       topScaleY: 1.03,
//       topZ: -3.35,
//       sideScale: 1.0078,
//     },
//     {
//       model: "/rings_sizes/SZ 8.3dm",
//       size: "8",
//       scale: 0.919,
//       stoneScale: 0.942,
//       geometry: 10,
//       topScaleX: 1.1,
//       topScaleY: 1.05,
//       topZ: -3.1,
//       sideScale: 1.011,
//     },
//     {
//       model: "/rings_sizes/SZ 8.5.3dm",
//       size: "8.5",
//       scale: 0.938,
//       stoneScale: 0.953,
//       geometry: 0,
//       topScaleX: 1.12,
//       topScaleY: 1.05,
//       topZ: -3,
//       sideScale: 1.0142,
//     },
//     {
//       model: "/rings_sizes/SZ 9.3dm",
//       size: "9",
//       scale: 0.96,
//       stoneScale: 0.963,
//       geometry: 66,
//       topScaleX: 1.08,
//       topScaleY: 1.05,
//       topZ: -2.9,
//       sideScale: 1.0174,
//     },
//     {
//       model: "/rings_sizes/SZ 9.5.3dm",
//       size: "9.5",
//       scale: 0.9875,
//       stoneScale: 0.978,
//       geometry: 0,
//       topScaleX: 1.09,
//       topScaleY: 1.05,
//       topZ: -2.6,
//       sideScale: 1.0206,
//     },
//     {
//       model: "/rings_sizes/SZ 10.3dm",
//       size: "10",
//       scale: 1.009,
//       stoneScale: 0.99,
//       geometry: 0,
//       topScaleX: 1.06,
//       topScaleY: 1.02,
//       topZ: -2.2,
//       sideScale: 1.0238,
//     },
//     {
//       model: "/rings_sizes/SZ 10.5.3dm",
//       size: "10.5",
//       scale: 1.029,
//       stoneScale: 1.01,
//       geometry: 0,
//       topScaleX: 1.08,
//       topScaleY: 1.02,
//       topZ: -2,
//       sideScale: 1.027,
//     },
//     {
//       model: "/rings_sizes/SZ 11.3dm",
//       size: "11",
//       scale: 1.051,
//       stoneScale: 1.02,
//       geometry: 0,
//       topScaleX: 1.07,
//       topScaleY: 1.02,
//       topZ: -1.8,
//       sideScale: 1.0302,
//     },
//     {
//       model: "/rings_sizes/SZ 11.5.3dm",
//       size: "11.5",
//       scale: 1.071,
//       stoneScale: 1.03,
//       geometry: 0,
//       topScaleX: 1.07,
//       topScaleY: 1.04,
//       topZ: -1.6,
//       sideScale: 1.0334,
//     },
//     {
//       model: "/rings_sizes/SZ 12.3dm",
//       size: "12",
//       scale: 1.085,
//       stoneScale: 1.04,
//       geometry: 70,
//       topScaleX: 1.07,
//       topScaleY: 1.04,
//       topZ: -1.4,
//       sideScale: 1.0366,
//     },
//     {
//       model: "/rings_sizes/SZ 12.5.3dm",
//       size: "12.5",
//       scale: 1.11,
//       stoneScale: 1.05,
//       geometry: 0,
//       topScaleX: 1.07,
//       topScaleY: 1.05,
//       sideScale: 1.0398,
//       topZ: -1.2,
//     },
//   ];

//   const [scene, setScene] = useState(null);

//   const [cameraPosTarget, setCameraPosTarget] = useState([
//     -0.01172012893025394, 3.2752921248200932, -0.5248722244160388,
//   ]);
//   const [lastCameraPosition, setLastCameraPosition] = useState([
//     -0.01172012893025394, 3.2752921248200932, -0.5248722244160388,
//   ]);
//   const maxCharacters = 11;
//   const maxCharactersShank = 10;
//   const maxCharactersBottom = 15;
//   const [selectedSize, setSelectedSize] = useState(modelSizes[0]);
//   const myScale = selectedSize.scale;
//   const [model, setModel] = useState();
//   const [error, setError] = useState(null);
//   const [topText1, setTopText1] = useState("");
//   const [topText2, setTopText2] = useState("");
//   const [rightText, setRightText] = useState("");
//   const [leftText, setLeftText] = useState("");

//   const [enableRightText, setEnableRightText] = useState(true);
//   const [enableLeftText, setEnableLeftText] = useState(true);

//   const [enableTopText, setEnableTopText] = useState(true);
//   const [enableLeft, setEnableLeft] = useState(true);
//   const [enableRight, setEnableRight] = useState(true);

//   const [selectedLeftImage, setSelectedLeftImage] = useState("");
//   const [selectedRightImage, setSelectedRightImage] = useState("");
//   const [bottomText, setBottomText] = useState("");
//   const [color, setColor] = useState("#ff0000"); // Default color
//   const [sliderValue, setSliderValue] = useState(0);

//   const materialOptions = [
//     {
//       value: "sterlingSilver",
//       label: "Sterling Silver",
//       color: "#c0c0c0", // Light gray
//       metalness: 1,
//       roughness: 0.2,
//     },
//     {
//       value: "goldPlatedOverSilver",
//       label: "Gold Plated Over Silver",
//       color: "#ffd700", // Gold color
//       metalness: 0.8,
//       roughness: 0.3,
//     },
//     {
//       value: "10KYellowGold",
//       label: "10K Yellow Gold",
//       color: "#ffd700", // Gold color
//       metalness: 0.9,
//       roughness: 0.4,
//     },
//     {
//       value: "10KWhiteGold",
//       label: "10K White Gold",
//       color: "#ffffff", // White color
//       metalness: 0.9,
//       roughness: 0.4,
//     },
//     {
//       value: "14KYellowGold",
//       label: "14K Yellow Gold",
//       color: "#ffd700", // Gold color
//       metalness: 0.95,
//       roughness: 0.3,
//     },
//     {
//       value: "14KWhiteGold",
//       label: "14K White Gold",
//       color: "#ffffff", // White color
//       metalness: 0.95,
//       roughness: 0.3,
//     },
//     {
//       value: "roseGoldPlatedOverSilver",
//       label: "Rose Gold Plated Over Silver",
//       color: "#ffdab9", // Rose Gold color
//       metalness: 0.85,
//       roughness: 0.35,
//     },
//     // Add more material options as needed
//   ];
//   const [selectedMaterial, setSelectedMaterial] = useState(0);

//   const handleMaterialChange = (material) => {
//     setSelectedMaterial(material);
//   };

//   const handleChangeTopText1 = (event) => {
//     if (event.target.value.length <= maxCharacters) {
//       setTopText1(event.target.value);
//     }
//     setCameraPosTarget([
//       0.023390319799149777, 2.5883663013825286, -1.0072221037047675,
//       0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
//     ]);
//     lastCameraPosition[0] === cameraPosTarget[0]
//       ? ""
//       : setLastCameraPosition([
//           0.023390319799149777, 2.5883663013825286, -1.0072221037047675,
//           0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
//         ]);
//   };
//   const handleChangeTopText2 = (event) => {
//     if (event.target.value.length <= maxCharacters) {
//       setTopText2(event.target.value);
//     }
//     setCameraPosTarget([
//       0.01897903732754415, 2.545647462415288, 0.9147422547287468,
//       0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
//     ]);
//     lastCameraPosition[0] === cameraPosTarget[0]
//       ? ""
//       : setLastCameraPosition([
//           0.01897903732754415, 2.545647462415288, 0.9147422547287468,
//           0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
//         ]);
//   };

//   const handleChangeRightText = (event) => {
//     setRightText(event.target.value);
//     setCameraPosTarget([
//       -1.924878367122549, 0.9043610940122987, 0.07418633906935732,
//       -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//     ]);

//     lastCameraPosition[0] === cameraPosTarget[0]
//       ? ""
//       : setLastCameraPosition([
//           -1.924878367122549, 0.9043610940122987, 0.07418633906935732,
//           -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//         ]);
//   };

//   const handleChangeLeftText = (event) => {
//     setLeftText(event.target.value);
//     setCameraPosTarget([
//       1.8594691085774895, 0.9983656785036318, 0.06628664486049485,
//       -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//     ]);
//     lastCameraPosition[0] === cameraPosTarget[0]
//       ? ""
//       : setLastCameraPosition([
//           1.8594691085774895, 0.9983656785036318, 0.06628664486049485,
//           -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//         ]);
//   };

//   const handleLeftImageChange = (e) => {
//     setSelectedLeftImage(e.target.value);
//     setCameraPosTarget([
//       1.8594691085774895, 0.3983656785036318, 0.06628664486049485,
//       -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//     ]);
//   };

//   const handleRightImageChange = (e) => {
//     setSelectedRightImage(e.target.value);
//     setCameraPosTarget([
//       -1.924878367122549, 0.3043610940122987, 0.07418633906935732,
//       -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
//     ]);
//   };
//   const imageOptions = [
//     { value: "heart.svg", label: "heart.svg" },
//     { value: "butterfly.svg", label: "butterfly.svg" },
//     // Add more image options here
//   ];
//   useEffect(() => {
//     try {
//       const loader = new Rhino3dmLoader();
//       loader.load(
//         selectedSize.model,
//         (object) => {
//           setModel(object);
//           console.log(object.children);
//           object.children.forEach((e, i) => {
//             e.material.color = "red";
//           });
//         },
//         (progressEvent) => {},
//         (error) => {
//           setError(error);
//         }
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   }, [selectedSize]);
//   if (error) {
//     return <div>Error loading model: {error.message}</div>;
//   }

//   const handleBottomTextChange = (e) => {
//     if (e.target.value.length <= maxCharactersBottom)
//       setBottomText(e.target.value);

//     setCameraPosTarget([
//       -0.17191261220697443, 0.9160258852260153, -1.5581231106493767,
//       0.030457963074306864, 0.6105591751870776, -0.8648414961936356,
//     ]);

//     lastCameraPosition[0] === cameraPosTarget[0]
//       ? ""
//       : setLastCameraPosition([
//           -0.17191261220697443, 0.9160258852260153, -1.5581231106493767,
//           0.030457963074306864, 0.6105591751870776, -0.8648414961936356,
//         ]);
//   };

//   function save(blob, filename) {
//     const link = document.createElement("a");
//     link.style.display = "none";
//     document.body.appendChild(link);
//     console.log(blob.toString());
//     link.href = URL.createObjectURL(blob);
//     link.download = filename;
//     link.click();
//   }

//   function saveString(text, filename) {
//     const myBlob = new Blob([text], { type: "text/plain" });

//     save(myBlob, filename);
//   }
//   // const handleExport = () => {
//   //   const exporting = canvasRef.current.children[0];
//   //   console.log(exporting);
//   //   // return;
//   //   const exporter = new STLExporter();

//   //   var str = exporter.parse(exporting); // Export the scene
//   //   var blob = new Blob([str], { type: "text/plain" }); // Generate Blob from the string
//   //   //saveAs( blob, 'file.stl' ); //Save the Blob to file.stl

//   //   var link = document.createElement("a");
//   //   link.style.display = "none";
//   //   document.body.appendChild(link);
//   //   link.href = URL.createObjectURL(blob);
//   //   link.download = "Ring.stl";
//   //   link.click();
//   // };

//   // const handleExport = () => {
//   //   const canvas = canvasRef.current;
//   //   const children = canvas.children; // Get all children
//   //   console.log(children);

//   //   for (let i = 0; i < children.length; i++) {
//   //     const child = children[i];
//   //     console.log(`Exporting child ${i + 1}`);

//   //     const exporter = new STLExporter();
//   //     const str = exporter.parse(child); // Export the child scene

//   //     const blob = new Blob([str], { type: "text/plain" });

//   //     const link = document.createElement("a");
//   //     link.style.display = "none";
//   //     document.body.appendChild(link);
//   //     link.href = URL.createObjectURL(blob);
//   //     link.download = `Ring-${i + 1}.stl`; // Unique filename for each child
//   //     link.click();

//   //     // Remove the temporary link element
//   //     document.body.removeChild(link);
//   //   }
//   // };

//   // const handleExport = () => {
//   //   // Create a new group to hold all children
//   //   const combinedGroup = new THREE.Group();

//   //   // Get all children from the target element
//   //   const children = canvasRef.current.children;

//   //   // Add each child to the new group
//   //   for (const child of children) {
//   //     combinedGroup.add(child);
//   //   }

//   //   console.log(combinedGroup.children); // Optional: Log the combined group for verification

//   //   // Export the combined group
//   //   const exporter = new STLExporter();
//   //   const str = exporter.parse(combinedGroup); // Export the combined group
//   //   const blob = new Blob([str], { type: "text/plain" }); // Generate Blob from the string

//   //   // Save the Blob to file.stl
//   //   const link = document.createElement("a");
//   //   link.style.display = "none";
//   //   document.body.appendChild(link);
//   //   link.href = URL.createObjectURL(blob);
//   //   link.download = "Ring.stl";
//   //   link.click();
//   // };

//   const handleExport = () => {
//     const exporting = canvasRef.current;
//     console.log(exporting);
//     const geometries = [];

//     exporting.children.forEach((child) => {
//       if (child instanceof THREE.Mesh) {
//         geometries.push(child.geometry.clone()); // Clone the geometry to avoid modifications
//       }
//     });

//     const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);
//     const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Define your material

//     const mergedMesh = new THREE.Mesh(mergedGeometry, material);

//     console.log(mergedGeometry);
//     // return;
//     const exporter = new STLExporter();

//     var str = exporter.parse(mergedMesh); // Export the scene
//     var blob = new Blob([str], { type: "text/plain" }); // Generate Blob from the string
//     //saveAs( blob, 'file.stl' ); //Save the Blob to file.stl

//     var link = document.createElement("a");
//     link.style.display = "none";
//     document.body.appendChild(link);
//     link.href = URL.createObjectURL(blob);
//     link.download = "Ring.stl";
//     link.click();
//   };

//   console.log(selectedRightImage !== "");
//   console.log(model);

//   const sizesPicker = ["6.5", "8.5", "9.5", "10", "10.5", "11", "11.5", "12.5"];
//   const getSize = sizesPicker.some((size) => size === selectedSize.size);

//   return (
//     <div className="flex justify-center bg-white">
//       <div className="w-[30%]">
//         <Accordion type="single" collapsible className="w-full">
//           <AccordionItem value="item-1">
//             <AccordionTrigger>TOP OF RING TEXT</AccordionTrigger>
//             <AccordionContent>
//               <label className="text-[10px] font-bold">TOP TEXT 1</label>
//               <input
//                 type="text"
//                 value={topText1}
//                 onChange={handleChangeTopText1}
//                 maxLength={maxCharacters}
//                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//               />
//               <p className="text-[10px]">
//                 Remaining characters: {maxCharacters - topText1.length}
//               </p>
//               <label className="text-[10px] font-bold">TOP TEXT 2</label>
//               <input
//                 type="text"
//                 value={topText2}
//                 onChange={handleChangeTopText2}
//                 maxLength={maxCharacters}
//                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//               />
//               <p className="text-[10px]">
//                 Remaining characters: {maxCharacters - topText2.length}
//               </p>
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-2">
//             <AccordionTrigger>
//               LEFT & RIGHT SHANK PERSONALIZATION
//             </AccordionTrigger>
//             <AccordionContent>
//               {/* Left Text */}
//               <div>
//                 <label className="text-[10px] font-bold">LEFT TEXT</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={leftText}
//                   onChange={handleChangeLeftText}
//                   maxLength={maxCharactersShank}
//                   placeholder="Left Text"
//                   disabled={!enableLeftText}
//                   className="border border-gray-300 rounded-md px-2 py-1 w-full"
//                 />
//                 <p className="text-[10px]">
//                   Remaining characters: {maxCharactersShank - leftText.length}
//                 </p>

//                 <label className="flex text-[10px] font-bold mt-4">
//                   LEFT IMAGE
//                 </label>

//                 {enableLeft && (
//                   <select
//                     value={selectedLeftImage}
//                     onChange={handleLeftImageChange}
//                     className="mb-4"
//                   >
//                     <option value={""}>Select Image</option>

//                     {imageOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 )}
//               </div>

//               {/* Right Text */}
//               <label className="text-[10px] font-bold">RIGHT TEXT</label>
//               <br />
//               <input
//                 type="text"
//                 value={rightText}
//                 onChange={handleChangeRightText}
//                 maxLength={maxCharactersShank}
//                 placeholder="Right Text"
//                 // disabled={!enableRightText}
//                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//               />
//               <p className="text-[10px]">
//                 Remaining characters: {maxCharactersShank - rightText.length}
//               </p>

//               <label className="flex text-[10px] font-bold mt-4">
//                 RIGHT IMAGE
//               </label>

//               <select
//                 value={selectedRightImage}
//                 onChange={handleRightImageChange}
//                 className="mb-4"
//               >
//                 <option value={""}>Select Image</option>
//                 {imageOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-3">
//             <AccordionTrigger>INSIDE RING ENGRAVING</AccordionTrigger>
//             <AccordionContent>
//               <label className="flex text-[10px] font-bold">INSIDE TEXT</label>
//               <input
//                 type="text"
//                 value={bottomText}
//                 onChange={handleBottomTextChange}
//                 maxLength={maxCharactersBottom}
//                 placeholder="Bottom Text"
//                 className="border border-gray-300 rounded-md px-2 py-1 w-full"
//               />
//               <p className="text-[10px]">
//                 Remaining characters: {maxCharactersBottom - bottomText.length}
//               </p>
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-4">
//             <AccordionTrigger>CHOOSE BIRTHSTONE</AccordionTrigger>
//             <AccordionContent>
//               <BirthstonePicker
//                 sele={color}
//                 setColor={setColor}
//                 setCameraPosTarget={setCameraPosTarget}
//                 setLastCameraPosition={setLastCameraPosition}
//                 lastCameraPosition={lastCameraPosition}
//                 cameraPosTarget={cameraPosTarget}
//               />
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//         <p>Select Metal</p>
//         {materialOptions.map((option, i) => (
//           <div key={i}>
//             <label>
//               <input
//                 type="radio"
//                 value={i}
//                 checked={selectedMaterial === i}
//                 onChange={() => handleMaterialChange(i)}
//               />
//               {option.label}
//             </label>
//           </div>
//         ))}
//         <p>Select Size</p>
//         {modelSizes.map((option, i) => (
//           <div key={i}>
//             <label>
//               <input
//                 type="radio"
//                 value={option.size}
//                 checked={selectedSize.size === option.size}
//                 onChange={() => {
//                   setModel(null);
//                   setSelectedSize(option);
//                 }}
//               />
//               {option.size}
//             </label>
//           </div>
//         ))}
//         <button onClick={handleExport}>export</button>
//       </div>
//       <div className="w-[50%] h-[50vh]">
//         {!model && (
//           <div className="loader absolute top-[330px] left-[60vw]"></div>
//         )}
//         <Canvas
//           className="h-[50vh]"
//           style={{ height: "100vh" }}
//           gl={{ alpha: true }}
//           camera={{ fov: 10, zoom: 0.06 }} // Adjust the FOV here
//         >
//           {/* <ambientLight intensity={0.5} /> */}
//           <pointLight position={[10, 10, 10]} />
//           <Environment preset="sunset" />

//           {model && (
//             <group
//               ref={canvasRef}
//               frustumCulled={false}
//               scale={[0.125, 0.125, 0.125]}
//               rotation={[-Math.PI / 2, 0, 0]}
//               position={[0, 0, 0]}
//             >
//               {model.children.map((e, i) => {
//                 console.log(e.material.name);

//                 let color1;

//                 color1 =
//                   e.material.name === "Black"
//                     ? {
//                         value: "sterlingSilver",
//                         label: "Sterling Silver",
//                         color: "#191a19", // Light gray
//                         metalness: 1,
//                         roughness: 0.2,
//                       }
//                     : materialOptions[selectedMaterial];

//                 return (
//                   <mesh
//                     key={i}
//                     frustumCulled={false}
//                     position={[0, 0, -0.1]}
//                     rotation={[1.6 - 0.03, 0, 0]}
//                     geometry={
//                       i != selectedSize.geometry
//                         ? model.children[i].geometry
//                         : new THREE.BufferGeometry()
//                     }
//                   >
//                     <meshPhysicalMaterial {...color1} opacity={2} />
//                   </mesh>
//                 );
//               })}
//               {enableTopText && (
//                 <group position={[0.0, 0, 0]}>
//                   <TopStarCurved
//                     selectedMaterial={materialOptions[selectedMaterial]}
//                     text={"★"}
//                     topScaleX={selectedSize.topScaleX}
//                     topScaleY={selectedSize.topScaleY}
//                     topZ={selectedSize.topZ}
//                     totallText={topText1}
//                   />
//                   <TopStarCurvedRight
//                     selectedMaterial={materialOptions[selectedMaterial]}
//                     text={"★"}
//                     topScaleX={selectedSize.topScaleX}
//                     topScaleY={selectedSize.topScaleY}
//                     topZ={selectedSize.topZ}
//                     totallText={topText1}
//                   />
//                   <TopTextCurved
//                     selectedMaterial={materialOptions[selectedMaterial]}
//                     text={topText1}
//                     topScaleX={selectedSize.topScaleX}
//                     topScaleY={selectedSize.topScaleY}
//                     topZ={selectedSize.topZ}
//                   />

//                   <TopTextCurved
//                     selectedMaterial={materialOptions[selectedMaterial]}
//                     flipped={-1}
//                     text={topText2}
//                     topScaleX={selectedSize.topScaleX}
//                     topScaleY={selectedSize.topScaleY}
//                     topZ={selectedSize.topZ}
//                   />
//                 </group>
//               )}

//               <group scale={selectedSize.stoneScale - 0}>
//                 <Stone color={color} />
//                 <group scale={selectedSize.sideScale}>
//                   {selectedLeftImage !== "" && (
//                     <ExtrudedSVG
//                       size={0.005}
//                       path={selectedLeftImage}
//                       selectedMaterial={materialOptions[selectedMaterial]}
//                     />
//                   )}
//                   {selectedRightImage !== "" && (
//                     <ExtrudedSVG
//                       size={0.005}
//                       flipped={-1}
//                       path={selectedRightImage}
//                       selectedMaterial={materialOptions[selectedMaterial]}
//                     />
//                   )}

//                   {enableRightText && (
//                     <RightTextCurved
//                       text={rightText}
//                       selectedMaterial={materialOptions[selectedMaterial]}
//                     />
//                   )}
//                   {enableLeftText && (
//                     <RightTextCurved
//                       text={leftText}
//                       flipped={-1}
//                       selectedMaterial={materialOptions[selectedMaterial]}
//                     />
//                   )}
//                 </group>
//               </group>
//               <group scale={myScale}>
//                 <BottomTextEngraving
//                   model={
//                     getSize
//                       ? model.children[selectedSize.geometry].geometry
//                       : ""
//                   }
//                   bottomText={bottomText}
//                   maxCharactersBottom={maxCharactersBottom}
//                   selectedMaterial={materialOptions[selectedMaterial]}
//                   myScale={myScale}
//                   selectedSize={selectedSize}
//                 />
//               </group>
//             </group>
//           )}

//           <CameraWithAnimations
//             cameraPosTarget={cameraPosTarget}
//             lastCameraPosition={lastCameraPosition}
//             setScene={setScene}
//           />
//         </Canvas>
//       </div>
//     </div>
//   );
// };

// export default RingModel;

import { CameraControls, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
import { BridgeMesh } from "./BridgeMesh";
import * as THREE from "three";

import { useEffect, useMemo, useRef, useState } from "react";
import ExtrudedSVG from "./ExtrudedSVG";
import BottomTextEngraving from "./BottomTextEngraving";
import CurvedText from "./CurvedText";
import { Base, Geometry } from "@react-three/csg";
import TopTextCurved from "./TopTextCurved";
import RightTextCurved from "./RightTextCurved";
import Stone from "./Stone";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import BirthstonePicker from "./BirthstonePicker";
import CameraWithAnimations from "./CameraWithAnimation";
import TopStarCurved from "./TopStarCurved";
import TopStarCurvedRight from "./TopStarCurvedRight";
import {
  BufferGeometryUtils,
  GLTFExporter,
  OBJExporter,
  STLExporter,
} from "three/examples/jsm/Addons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../@/components/ui/accordion";

const RingModel = () => {
  const canvasRef = useRef();
  const modelSizes = [
    // {
    //   model: "/rings_sizes/SZ 5.3dm",
    //   size: "5",
    //   scale: 1.0125,
    //   stoneScale: 1.01,
    // },
    {
      model: "/rings_sizes/SZ 5.5.3dm",
      size: "5.5",
      scale: 0.813,
      stoneScale: 0.875,
      geometry: 48,
      topScaleX: 1.08,
      topScaleY: 1.05,
      topZ: -4.1,
      sideScale: 0.995,
    },
    {
      model: "/rings_sizes/SZ 6.3dm",
      size: "6",
      scale: 0.835,
      stoneScale: 0.89,
      geometry: 50,
      topScaleX: 1.1,
      topScaleY: 1.04,
      topZ: -3.7,
      sideScale: 0.9982,
      //  scaleFactorX = 1.04;
      // const scaleFactorY = 1.0;
      // const zV = -4 + 0.3;
    },
    {
      model: "/rings_sizes/SZ 6.5.3dm",
      size: "6.5",
      scale: 0.858,
      stoneScale: 0.91,
      geometry: 0,
      topScaleX: 1.08,
      topScaleY: 1.02,
      topZ: -3.7,
      sideScale: 1.0014,
    },
    {
      model: "/rings_sizes/SZ 7.3dm",
      size: "7",
      scale: 0.877,
      stoneScale: 0.919,
      geometry: 60,
      topScaleX: 1.07,
      topScaleY: 1.05,
      topZ: -3.5,
      sideScale: 1.0046,
    },
    {
      model: "/rings_sizes/SZ 7.5.3dm",
      size: "7.5",
      scale: 0.896,
      stoneScale: 0.93,
      geometry: 64,
      topScaleX: 1.08,
      topScaleY: 1.03,
      topZ: -3.35,
      sideScale: 1.0078,
    },
    {
      model: "/rings_sizes/SZ 8.3dm",
      size: "8",
      scale: 0.919,
      stoneScale: 0.942,
      geometry: 10,
      topScaleX: 1.1,
      topScaleY: 1.05,
      topZ: -3.1,
      sideScale: 1.011,
    },
    {
      model: "/rings_sizes/SZ 8.5.3dm",
      size: "8.5",
      scale: 0.938,
      stoneScale: 0.953,
      geometry: 0,
      topScaleX: 1.12,
      topScaleY: 1.05,
      topZ: -3,
      sideScale: 1.0142,
    },
    {
      model: "/rings_sizes/SZ 9.3dm",
      size: "9",
      scale: 0.96,
      stoneScale: 0.963,
      geometry: 66,
      topScaleX: 1.08,
      topScaleY: 1.05,
      topZ: -2.9,
      sideScale: 1.0174,
    },
    {
      model: "/rings_sizes/SZ 9.5.3dm",
      size: "9.5",
      scale: 0.9875,
      stoneScale: 0.978,
      geometry: 0,
      topScaleX: 1.09,
      topScaleY: 1.05,
      topZ: -2.6,
      sideScale: 1.0206,
    },
    {
      model: "/rings_sizes/SZ 10.3dm",
      size: "10",
      scale: 1.009,
      stoneScale: 0.99,
      geometry: 0,
      topScaleX: 1.06,
      topScaleY: 1.02,
      topZ: -2.2,
      sideScale: 1.0238,
    },
    {
      model: "/rings_sizes/SZ 10.5.3dm",
      size: "10.5",
      scale: 1.029,
      stoneScale: 1.01,
      geometry: 0,
      topScaleX: 1.08,
      topScaleY: 1.02,
      topZ: -2,
      sideScale: 1.027,
    },
    {
      model: "/rings_sizes/SZ 11.3dm",
      size: "11",
      scale: 1.051,
      stoneScale: 1.02,
      geometry: 0,
      topScaleX: 1.07,
      topScaleY: 1.02,
      topZ: -1.8,
      sideScale: 1.0302,
    },
    {
      model: "/rings_sizes/SZ 11.5.3dm",
      size: "11.5",
      scale: 1.071,
      stoneScale: 1.03,
      geometry: 0,
      topScaleX: 1.07,
      topScaleY: 1.04,
      topZ: -1.6,
      sideScale: 1.0334,
    },
    {
      model: "/rings_sizes/SZ 12.3dm",
      size: "12",
      scale: 1.085,
      stoneScale: 1.04,
      geometry: 70,
      topScaleX: 1.07,
      topScaleY: 1.04,
      topZ: -1.4,
      sideScale: 1.0366,
    },
    {
      model: "/rings_sizes/SZ 12.5.3dm",
      size: "12.5",
      scale: 1.11,
      stoneScale: 1.05,
      geometry: 0,
      topScaleX: 1.07,
      topScaleY: 1.05,
      sideScale: 1.0398,
      topZ: -1.2,
    },
  ];

  const [scene, setScene] = useState(null);

  const [cameraPosTarget, setCameraPosTarget] = useState([
    -0.01172012893025394, 3.2752921248200932, -0.5248722244160388,
  ]);
  const [lastCameraPosition, setLastCameraPosition] = useState([
    -0.01172012893025394, 3.2752921248200932, -0.5248722244160388,
  ]);
  const maxCharacters = 11;
  const maxCharactersShank = 10;
  const maxCharactersBottom = 15;
  const [selectedSize, setSelectedSize] = useState(modelSizes[0]);
  const myScale = selectedSize.scale;
  const [model, setModel] = useState();
  const [error, setError] = useState(null);
  const [topText1, setTopText1] = useState("");
  const [topText2, setTopText2] = useState("");
  const [rightText, setRightText] = useState("");
  const [leftText, setLeftText] = useState("");

  const [enableRightText, setEnableRightText] = useState(true);
  const [enableLeftText, setEnableLeftText] = useState(true);

  const [enableTopText, setEnableTopText] = useState(true);
  const [enableLeft, setEnableLeft] = useState(true);
  const [isexporting, setIsexporting] = useState(false);

  const [selectedLeftImage, setSelectedLeftImage] = useState("");
  const [selectedRightImage, setSelectedRightImage] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [color, setColor] = useState("#ff0000"); // Default color
  const [getScene, setgetScene] = useState(null);

  const materialOptions = [
    {
      value: "sterlingSilver",
      label: "Sterling Silver",
      color: "#c0c0c0", // Light gray
      metalness: 1,
      roughness: 0.2,
    },
    {
      value: "goldPlatedOverSilver",
      label: "Gold Plated Over Silver",
      color: "#ffd700", // Gold color
      metalness: 0.8,
      roughness: 0.3,
    },
    {
      value: "10KYellowGold",
      label: "10K Yellow Gold",
      color: "#ffd700", // Gold color
      metalness: 0.9,
      roughness: 0.4,
    },
    {
      value: "10KWhiteGold",
      label: "10K White Gold",
      color: "#ffffff", // White color
      metalness: 0.9,
      roughness: 0.4,
    },
    {
      value: "14KYellowGold",
      label: "14K Yellow Gold",
      color: "#ffd700", // Gold color
      metalness: 0.95,
      roughness: 0.3,
    },
    {
      value: "14KWhiteGold",
      label: "14K White Gold",
      color: "#ffffff", // White color
      metalness: 0.95,
      roughness: 0.3,
    },
    {
      value: "roseGoldPlatedOverSilver",
      label: "Rose Gold Plated Over Silver",
      color: "#ffdab9", // Rose Gold color
      metalness: 0.85,
      roughness: 0.35,
    },
    // Add more material options as needed
  ];
  const [selectedMaterial, setSelectedMaterial] = useState(0);

  const handleMaterialChange = (material) => {
    setSelectedMaterial(material);
  };

  const handleChangeTopText1 = (event) => {
    if (event.target.value.length <= maxCharacters) {
      setTopText1(event.target.value);
    }
    setCameraPosTarget([
      0.023390319799149777, 2.5883663013825286, -1.0072221037047675,
      0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
    ]);
    lastCameraPosition[0] === cameraPosTarget[0]
      ? ""
      : setLastCameraPosition([
          0.023390319799149777, 2.5883663013825286, -1.0072221037047675,
          0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
        ]);
  };
  const handleChangeTopText2 = (event) => {
    if (event.target.value.length <= maxCharacters) {
      setTopText2(event.target.value);
    }
    setCameraPosTarget([
      0.01897903732754415, 2.545647462415288, 0.9147422547287468,
      0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
    ]);
    lastCameraPosition[0] === cameraPosTarget[0]
      ? ""
      : setLastCameraPosition([
          0.01897903732754415, 2.545647462415288, 0.9147422547287468,
          0.008159044763515502, 1.0691868518900585, 0.002652247078546246,
        ]);
  };

  const handleChangeRightText = (event) => {
    setRightText(event.target.value);
    setCameraPosTarget([
      -1.924878367122549, 0.9043610940122987, 0.07418633906935732,
      -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
    ]);

    lastCameraPosition[0] === cameraPosTarget[0]
      ? ""
      : setLastCameraPosition([
          -1.924878367122549, 0.9043610940122987, 0.07418633906935732,
          -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
        ]);
  };

  const handleChangeLeftText = (event) => {
    setLeftText(event.target.value);
    setCameraPosTarget([
      1.8594691085774895, 0.9983656785036318, 0.06628664486049485,
      -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
    ]);
    lastCameraPosition[0] === cameraPosTarget[0]
      ? ""
      : setLastCameraPosition([
          1.8594691085774895, 0.9983656785036318, 0.06628664486049485,
          -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
        ]);
  };

  const handleLeftImageChange = (e) => {
    setSelectedLeftImage(e.target.value);
    setCameraPosTarget([
      1.8594691085774895, 0.3983656785036318, 0.06628664486049485,
      -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
    ]);
  };

  const handleRightImageChange = (e) => {
    setSelectedRightImage(e.target.value);
    setCameraPosTarget([
      -1.924878367122549, 0.3043610940122987, 0.07418633906935732,
      -0.03335211985182495, 0.39156927745529435, 0.0745692670467591,
    ]);
  };
  const imageOptions = [
    { value: "heart.svg", label: "heart.svg" },
    { value: "butterfly.svg", label: "butterfly.svg" },
    // Add more image options here
  ];
  useEffect(() => {
    try {
      const loader = new Rhino3dmLoader();
      loader.load(
        selectedSize.model,
        (object) => {
          setModel(object);
          console.log(object.children);
          object.children.forEach((e, i) => {
            e.material.color = "red";
          });
        },
        (progressEvent) => {},
        (error) => {
          setError(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [selectedSize]);
  if (error) {
    return <div>Error loading model: {error.message}</div>;
  }

  const handleBottomTextChange = (e) => {
    if (e.target.value.length <= maxCharactersBottom)
      setBottomText(e.target.value);

    setCameraPosTarget([
      -0.17191261220697443, 0.9160258852260153, -1.5581231106493767,
      0.030457963074306864, 0.6105591751870776, -0.8648414961936356,
    ]);

    lastCameraPosition[0] === cameraPosTarget[0]
      ? ""
      : setLastCameraPosition([
          -0.17191261220697443, 0.9160258852260153, -1.5581231106493767,
          0.030457963074306864, 0.6105591751870776, -0.8648414961936356,
        ]);
  };

  function save(blob, filename) {
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }

  const handleExport = () => {
    setIsexporting(true);
    setTimeout(() => {
      const exporting = getScene; // Ensure this returns the correct Three.js scene
      console.log(exporting);

      const exporter = new GLTFExporter();
      const options = {
        binary: true, // Export as binary GLB format
      };

      exporter.parse(
        exporting,
        (result) => {
          const jsonBlob = new Blob([JSON.stringify(result)], {
            type: "application/json",
          });
          console.log(jsonBlob);

          save(jsonBlob, "object.gltf");
        },
        options
      );
    }, 100);
    setTimeout(() => {
      setIsexporting(false);
    }, 300);
  };
  console.log(selectedRightImage !== "");
  console.log(model);

  const sizesPicker = ["6.5", "8.5", "9.5", "10", "10.5", "11", "11.5", "12.5"];
  const getSize = sizesPicker.some((size) => size === selectedSize.size);

  return (
    <div className="flex justify-center bg-white">
      <div className="w-[30%]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>TOP OF RING TEXT</AccordionTrigger>
            <AccordionContent>
              <label className="text-[10px] font-bold">TOP TEXT 1</label>
              <input
                type="text"
                value={topText1}
                onChange={handleChangeTopText1}
                maxLength={maxCharacters}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
              />
              <p className="text-[10px]">
                Remaining characters: {maxCharacters - topText1.length}
              </p>
              <label className="text-[10px] font-bold">TOP TEXT 2</label>
              <input
                type="text"
                value={topText2}
                onChange={handleChangeTopText2}
                maxLength={maxCharacters}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
              />
              <p className="text-[10px]">
                Remaining characters: {maxCharacters - topText2.length}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              LEFT & RIGHT SHANK PERSONALIZATION
            </AccordionTrigger>
            <AccordionContent>
              {/* Left Text */}
              <div>
                <label className="text-[10px] font-bold">LEFT TEXT</label>
                <br />
                <input
                  type="text"
                  value={leftText}
                  onChange={handleChangeLeftText}
                  maxLength={maxCharactersShank}
                  placeholder="Left Text"
                  disabled={!enableLeftText}
                  className="border border-gray-300 rounded-md px-2 py-1 w-full"
                />
                <p className="text-[10px]">
                  Remaining characters: {maxCharactersShank - leftText.length}
                </p>

                <label className="flex text-[10px] font-bold mt-4">
                  LEFT IMAGE
                </label>

                {enableLeft && (
                  <select
                    value={selectedLeftImage}
                    onChange={handleLeftImageChange}
                    className="mb-4"
                  >
                    <option value={""}>Select Image</option>

                    {imageOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Right Text */}
              <label className="text-[10px] font-bold">RIGHT TEXT</label>
              <br />
              <input
                type="text"
                value={rightText}
                onChange={handleChangeRightText}
                maxLength={maxCharactersShank}
                placeholder="Right Text"
                // disabled={!enableRightText}
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
              />
              <p className="text-[10px]">
                Remaining characters: {maxCharactersShank - rightText.length}
              </p>

              <label className="flex text-[10px] font-bold mt-4">
                RIGHT IMAGE
              </label>

              <select
                value={selectedRightImage}
                onChange={handleRightImageChange}
                className="mb-4"
              >
                <option value={""}>Select Image</option>
                {imageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>INSIDE RING ENGRAVING</AccordionTrigger>
            <AccordionContent>
              <label className="flex text-[10px] font-bold">INSIDE TEXT</label>
              <input
                type="text"
                value={bottomText}
                onChange={handleBottomTextChange}
                maxLength={maxCharactersBottom}
                placeholder="Bottom Text"
                className="border border-gray-300 rounded-md px-2 py-1 w-full"
              />
              <p className="text-[10px]">
                Remaining characters: {maxCharactersBottom - bottomText.length}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>CHOOSE BIRTHSTONE</AccordionTrigger>
            <AccordionContent>
              <BirthstonePicker
                sele={color}
                setColor={setColor}
                setCameraPosTarget={setCameraPosTarget}
                setLastCameraPosition={setLastCameraPosition}
                lastCameraPosition={lastCameraPosition}
                cameraPosTarget={cameraPosTarget}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p>Select Metal</p>
        {materialOptions.map((option, i) => (
          <div key={i}>
            <label>
              <input
                type="radio"
                value={i}
                checked={selectedMaterial === i}
                onChange={() => handleMaterialChange(i)}
              />
              {option.label}
            </label>
          </div>
        ))}
        <p>Select Size</p>
        {modelSizes.map((option, i) => (
          <div key={i}>
            <label>
              <input
                type="radio"
                value={option.size}
                checked={selectedSize.size === option.size}
                onChange={() => {
                  setModel(null);
                  setSelectedSize(option);
                }}
              />
              {option.size}
            </label>
          </div>
        ))}
        <button onClick={handleExport}>export</button>
      </div>
      <div className="w-[50%] h-[50vh]">
        {!model && (
          <div className="loader absolute top-[330px] left-[60vw]"></div>
        )}
        <Canvas
          className="h-[50vh]"
          style={{ height: "100vh" }}
          gl={{ alpha: true }}
          camera={{ fov: 10, zoom: 0.06 }} // Adjust the FOV here
        >
          {/* <ambientLight intensity={0.5} /> */}
          <pointLight position={[10, 10, 10]} />
          <Environment preset="sunset" />

          {model && (
            <group
              ref={canvasRef}
              frustumCulled={false}
              scale={[0.125, 0.125, 0.125]}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0, 0]}
            >
              {model.children.map((e, i) => {
                console.log(e.material.name);

                let color1;

                color1 =
                  e.material.name === "Black"
                    ? {
                        value: "sterlingSilver",
                        label: "Sterling Silver",
                        color: "#191a19", // Light gray
                        metalness: 1,
                        roughness: 0.2,
                      }
                    : materialOptions[selectedMaterial];

                return (
                  <mesh
                    key={i}
                    frustumCulled={false}
                    position={[0, 0, -0.1]}
                    rotation={[1.6 - 0.03, 0, 0]}
                    geometry={
                      i != selectedSize.geometry
                        ? model.children[i].geometry
                        : new THREE.BufferGeometry()
                    }
                  >
                    <meshPhysicalMaterial {...color1} opacity={2} />
                  </mesh>
                );
              })}
              {enableTopText && (
                <group position={[0.0, 0, 0]}>
                  <TopStarCurved
                    selectedMaterial={materialOptions[selectedMaterial]}
                    text={"★"}
                    topScaleX={selectedSize.topScaleX}
                    topScaleY={selectedSize.topScaleY}
                    topZ={selectedSize.topZ}
                    totallText={topText1}
                  />
                  <TopStarCurvedRight
                    selectedMaterial={materialOptions[selectedMaterial]}
                    text={"★"}
                    topScaleX={selectedSize.topScaleX}
                    topScaleY={selectedSize.topScaleY}
                    topZ={selectedSize.topZ}
                    totallText={topText1}
                  />
                  <TopTextCurved
                    selectedMaterial={materialOptions[selectedMaterial]}
                    text={topText1}
                    topScaleX={selectedSize.topScaleX}
                    topScaleY={selectedSize.topScaleY}
                    topZ={selectedSize.topZ}
                    getScene={setgetScene}
                  />

                  <TopTextCurved
                    selectedMaterial={materialOptions[selectedMaterial]}
                    flipped={-1}
                    text={topText2}
                    topScaleX={selectedSize.topScaleX}
                    topScaleY={selectedSize.topScaleY}
                    topZ={selectedSize.topZ}
                    getScene={setgetScene}
                  />
                </group>
              )}

              <group scale={selectedSize.stoneScale - 0}>
                <Stone color={color} isExporting={isexporting} />
                <group scale={selectedSize.sideScale}>
                  {selectedLeftImage !== "" && (
                    <ExtrudedSVG
                      size={0.005}
                      path={selectedLeftImage}
                      selectedMaterial={materialOptions[selectedMaterial]}
                    />
                  )}
                  {selectedRightImage !== "" && (
                    <ExtrudedSVG
                      size={0.005}
                      flipped={-1}
                      path={selectedRightImage}
                      selectedMaterial={materialOptions[selectedMaterial]}
                    />
                  )}

                  {enableRightText && (
                    <RightTextCurved
                      text={rightText}
                      selectedMaterial={materialOptions[selectedMaterial]}
                    />
                  )}
                  {enableLeftText && (
                    <RightTextCurved
                      text={leftText}
                      flipped={-1}
                      selectedMaterial={materialOptions[selectedMaterial]}
                    />
                  )}
                </group>
              </group>
              <group scale={myScale}>
                <BottomTextEngraving
                  model={
                    getSize
                      ? model.children[selectedSize.geometry].geometry
                      : ""
                  }
                  bottomText={bottomText}
                  maxCharactersBottom={maxCharactersBottom}
                  selectedMaterial={materialOptions[selectedMaterial]}
                  myScale={myScale}
                  selectedSize={selectedSize}
                />
              </group>
            </group>
          )}

          <CameraWithAnimations
            cameraPosTarget={cameraPosTarget}
            lastCameraPosition={lastCameraPosition}
            setScene={setScene}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default RingModel;
