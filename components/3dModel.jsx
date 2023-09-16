"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export const ModelComponent = ({ ModelPath }) => {
  const containerRef = useRef();

  // useEffect para que se ejecute cuando inicia la pagina
  useEffect(() => {
    // Escena que se va a renderizar

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight - 100);
    containerRef.current.appendChild(renderer.domElement);
    // Variables para el control de la camara con el mouse o touch

    /* 
       @param a: eje X --> Ancho
       @param b: eje Y --> Alto
       @param c: eje Z --> Lejanía
       --> ----->
    */

    camera.position.set(10, 2, -10); // Ajusta la posición en el eje Z para alejar la cámara
    camera.rotateX(250);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    scene.background = "transparent";

    // Agregar luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Agregar luz direccional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

    directionalLight.position.set(1, 1, 1);

    scene.add(directionalLight);

    // Acá se carga el archivo 3D ⬇️

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/gltf");
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(ModelPath, (gltf) => {
      const model = gltf.scene;
      model.scale.set(6, 6, 6);
      scene.add(model);

      const hdr = new RGBELoader();
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      hdr.load("/lilienstein_4k.hdr", (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      });

      // Función de animación
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    });
  }, [ModelPath]);

  return <div ref={containerRef} className="3d_model"></div>;
};
