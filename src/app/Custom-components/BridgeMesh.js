import * as THREE from "three";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

export const BridgeMesh = () => {
  function bridgeMesh(
    width,
    height,
    depth,
    widthSegments,
    heightSegments,
    depthSegments
  ) {
    const geometry = new THREE.BufferGeometry();

    const widthHalf = width / 2;
    const heightHalf = height / 2;
    const depthHalf = depth / 2;

    const vertices = [];
    const normals = [];
    const indices = [];

    const grid = [];

    let vertexCounter = 0;

    for (let i = 0; i <= widthSegments; i++) {
      const u = i / widthSegments;
      const x = widthHalf * 2 * (u - 0.5);

      grid[i] = [];

      for (let j = 0; j <= heightSegments; j++) {
        const v = j / heightSegments;
        const y = heightHalf * 2 * (v - 0.5);

        grid[i][j] = [];

        for (let k = 0; k <= depthSegments; k++) {
          const w = k / depthSegments;
          const z = depthHalf * 2 * (w - 0.5);
          let xOffset =
            -0.1 * Math.sin(0.4 * (w - 0.5) * Math.PI + Math.PI / 2) + 0.1;
          if (x > widthHalf * (u - 0.5)) xOffset *= -1;
          vertices.push(x + xOffset, y - 2 * Math.sin(u * Math.PI), z);

          // Initialize normals
          normals.push(0, 0, 0);

          grid[i][j][k] = vertexCounter++;
        }
      }
    }

    for (let i = 0; i < widthSegments; i++) {
      for (let j = 0; j < heightSegments; j++) {
        for (let k = 0; k < depthSegments; k++) {
          const a = grid[i][j][k];
          const b = grid[i + 1][j][k];
          const c = grid[i + 1][j + 1][k];
          const d = grid[i][j + 1][k];
          const e = grid[i][j][k + 1];
          const f = grid[i + 1][j][k + 1];
          const g = grid[i + 1][j + 1][k + 1];
          const h = grid[i][j + 1][k + 1];
          indices.push(a, d, b);
          indices.push(d, c, b);

          indices.push(e, h, f);
          indices.push(h, g, f);

          indices.push(e, a, h);
          indices.push(a, d, h);

          indices.push(b, c, f);
          indices.push(c, g, f);

          indices.push(e, f, a);
          indices.push(f, b, a);

          indices.push(d, c, h);
          indices.push(c, g, h);
        }
      }
    }
    geometry.setIndex(indices);
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(vertices), 3)
    );

    return geometry;
  }

  // Usage
  const width = 2;
  const height = 2;
  const depth = 2;
  const widthSegments = 10;
  const heightSegments = 1;
  const depthSegments = 10;

  let geometry = bridgeMesh(
    width,
    height,
    depth,
    widthSegments,
    heightSegments,
    depthSegments
  );
  geometry.computeVertexNormals();
  geometry = BufferGeometryUtils.toCreasedNormals(geometry);
  //   geometry.computeVertexNormals();

  return (
    <mesh
      geometry={geometry}
      scale={[3.3125, 0.2, .8]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial color="white" side={2} />
    </mesh>
  );
};
