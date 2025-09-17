import { useEffect, useRef } from "react";
import * as THREE from "three";

// Skill data remains the same
const skillData = {
  1: { name: "Frontend", skills: "React, TypeScript, Tailwind, Three.js" },
  2: { name: "Backend", skills: "Node.js, Python, PostgreSQL, Docker" },
  3: { name: "Database", skills: "PostgreSQL, MongoDB, Redis, SQL" },
  4: { name: "DevOps", skills: "AWS, Docker, CI/CD, Kubernetes" },
};

export default function Space() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);

  // Using a ref for the pause state to be accessible inside the animation loop
  const isPausedRef = useRef(false);

  useEffect(() => {
    // Check if refs are available
    if (!canvasRef.current || !containerRef.current) return;

    // A flag to ensure setup runs only once
    let isInitialized = false;

    // All Three.js objects that need to persist
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio will be set later
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const spheres = [];
    let animationId;
    let lastTime = performance.now() / 1000;
    let timeOffset = 0;
    let hoveredSphereIndex = null;

    // --- ONE-TIME SETUP ---
    const init = () => {
      if (isInitialized) return;

      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Camera setup
      camera.aspect = width / height;
      camera.position.set(0, 0, 10);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();

      // Renderer setup
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
      pointLight.position.set(10, 10, 10);
      scene.add(pointLight);

      // Sphere specifications
      const sphereSpecs = [
        {
          radius: 2.0,
          color: 0x1e40af,
          orbitRadius: 0,
          speed: 0,
          angleOffset: 0,
        },
        {
          radius: 0.5,
          color: 0xf97316,
          orbitRadius: 5.0,
          speed: (2 * Math.PI) / 20,
          angleOffset: 0, // 0°
        },
        {
          radius: 0.5,
          color: 0x16a34a,
          orbitRadius: 5.0,
          speed: (2 * Math.PI) / 20,
          angleOffset: Math.PI / 2, // 90°
        },
        {
          radius: 0.5,
          color: 0xdc2626,
          orbitRadius: 5.0,
          speed: (2 * Math.PI) / 20,
          angleOffset: Math.PI, // 180°
        },
        {
          radius: 0.5,
          color: 0x9333ea,
          orbitRadius: 5.0,
          speed: (2 * Math.PI) / 20,
          angleOffset: (3 * Math.PI) / 2, // 270°
        },
      ];
      sphereSpecs.forEach((spec) => {
        const sphereGeometry = new THREE.IcosahedronGeometry(spec.radius, 0);
        const wireframeGeometry = new THREE.WireframeGeometry(sphereGeometry);
        const material = new THREE.LineBasicMaterial({
          color: spec.color,
          transparent: true,
          opacity: 0.8,
          linewidth: 1,
        });
        const wireframeSphere = new THREE.LineSegments(
          wireframeGeometry,
          material
        );
        wireframeSphere.userData = {
          orbitRadius: spec.orbitRadius,
          speed: spec.speed,
          currentOrbitAngle: spec.angleOffset,
        };
        scene.add(wireframeSphere);
        spheres.push(wireframeSphere);
      });

      isInitialized = true;
    };

    // --- EVENT HANDLERS ---
    const handleMouseMove = (event) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const orbitingSpheres = spheres.slice(1);
      const intersects = raycaster.intersectObjects(orbitingSpheres);

      if (intersects.length > 0) {
        const intersectedSphere = intersects[0].object;
        hoveredSphereIndex = spheres.indexOf(intersectedSphere);
        isPausedRef.current = true;
      } else {
        hoveredSphereIndex = null;
        isPausedRef.current = false;
      }
    };

    const handleResize = () => {
      const container = containerRef.current;
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    // --- ANIMATION LOOP ---
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const currentTime = performance.now() / 1000;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // This block handles logic that should be paused on hover.
      if (!isPausedRef.current) {
        timeOffset += deltaTime; // Only advance time when not paused.

        spheres.forEach((sphere, index) => {
          // Pulsating and opacity changes for the central sphere.
          if (index === 0) {
            sphere.scale.setScalar(1.0 + 0.1 * Math.sin(timeOffset * 2));
            sphere.material.opacity = 0.6 + 0.3 * Math.sin(timeOffset * 3);
          } else {
            // This is the orbital motion for the smaller spheres.
            const { orbitRadius, speed } = sphere.userData;
            sphere.userData.currentOrbitAngle += speed * deltaTime;

            const x = orbitRadius * Math.cos(sphere.userData.currentOrbitAngle);
            const z = orbitRadius * Math.sin(sphere.userData.currentOrbitAngle);
            sphere.position.set(x, 0, z);

            sphere.material.opacity = Math.max(
              0.3,
              0.6 + Math.sin(timeOffset * 3 + index) * 0.2
            );
          }
        });
      }

      // This self-rotation logic is now outside the pause check and will run on every frame.
      spheres.forEach((sphere, index) => {
        sphere.rotation.y += (0.01 + index * 0.002) * deltaTime * 60;
        sphere.rotation.x += 0.003 * deltaTime * 60;
      });

      // Tooltip logic runs regardless of pause state
      if (hoveredSphereIndex !== null && tooltipRef.current) {
        const sphere = spheres[hoveredSphereIndex];
        const position = new THREE.Vector3();
        sphere.getWorldPosition(position);
        position.project(camera);
        const x = (position.x * 0.5 + 0.5) * containerRef.current.clientWidth;
        const y = (position.y * -0.5 + 0.5) * containerRef.current.clientHeight;
        tooltipRef.current.style.left = `${x}px`;
        tooltipRef.current.style.top = `${y}px`;
        tooltipRef.current.style.opacity = "1";

        // Update tooltip content
        const data = skillData[hoveredSphereIndex];
        if (data) {
          tooltipRef.current.innerHTML = `
             <div class="font-semibold text-sm text-white">${data.name}</div>
             <div class="text-xs text-gray-200 mt-1">${data.skills}</div>
           `;
        }
      } else if (tooltipRef.current) {
        tooltipRef.current.style.opacity = "0";
      }

      renderer.render(scene, camera);
    };

    init();
    animate();

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      // Optional: dispose of Three.js objects to free memory
      spheres.forEach((sphere) => {
        scene.remove(sphere);
        sphere.geometry.dispose();
        sphere.material.dispose();
      });
    };
  }, []); // Empty dependency array ensures this runs only ONCE

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {" "}
      <canvas ref={canvasRef} className="block" />
      <div
        ref={tooltipRef}
        className="absolute pointer-events-none bg-gray-900/90 backdrop-blur-sm border border-gray-700 text-white px-4 py-3 rounded-lg shadow-lg transition-opacity duration-200 z-50"
        style={{
          opacity: 0,
          transform: "translate(-50%, -120%)",
        }}
      ></div>
    </div>
  );
}
