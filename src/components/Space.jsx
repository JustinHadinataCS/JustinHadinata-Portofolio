import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Space() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const spheresRef = useRef([]);
  const animationIdRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const cameraRef = useRef(null);
  const tooltipRef = useRef(null);

  const [hoveredSphere, setHoveredSphere] = useState(null);

  const skillData = {
    1: { name: "Frontend", skills: "React, TypeScript, Tailwind, Three.js" },
    2: { name: "Backend", skills: "Node.js, Python, PostgreSQL, Docker" },
    3: { name: "Database", skills: "PostgreSQL, MongoDB, Redis, SQL" },
    4: { name: "DevOps", skills: "AWS, Docker, CI/CD, Kubernetes" },
    5: { name: "Tools", skills: "Git, VS Code, Linux, Figma" },
    6: { name: "Soft Skills", skills: "Problem Solving, Team Lead, Agile" },
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // White background
    sceneRef.current = scene;

    // Get container dimensions
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    const rimLight1 = new THREE.PointLight(0x00ffff, 0.8, 50);
    rimLight1.position.set(-10, 5, 5);
    scene.add(rimLight1);
    const rimLight2 = new THREE.PointLight(0xff00ff, 0.6, 50);
    rimLight2.position.set(5, -10, 5);
    scene.add(rimLight2);

    // Sphere specifications
    const sphereSpecs = [
      {
        position: [0, 0, 0],
        radius: 2.0,
        color: 0x1e40af,
        orbitRadius: 0,
        speed: 0,
        angleOffset: 0,
      },
      {
        position: [2.5, 0, 0],
        radius: 0.5,
        color: 0xf97316,
        orbitRadius: 5.0,
        speed: (2 * Math.PI) / 20,
        angleOffset: 0,
      },
      {
        position: [3.5, 0, 0],
        radius: 0.5,
        color: 0x16a34a,
        orbitRadius: 5.0,
        speed: (2 * Math.PI) / 20,
        angleOffset: Math.PI / 3,
      },
      {
        position: [4.5, 0, 0],
        radius: 0.5,
        color: 0xdc2626,
        orbitRadius: 5.0,
        speed: (2 * Math.PI) / 20,
        angleOffset: (2 * Math.PI) / 3,
      },
      {
        position: [5.5, 0, 0],
        radius: 0.5,
        color: 0x9333ea,
        orbitRadius: 5.0,
        speed: (2 * Math.PI) / 20,
        angleOffset: Math.PI,
      },
      {
        position: [6.5, 0, 0],
        radius: 0.5,
        color: 0xeab308,
        orbitRadius: 5.0,
        speed: (2 * Math.PI) / 20,
        angleOffset: (4 * Math.PI) / 3,
      },
      {
        position: [7.5, 0, 0],
        radius: 0.5,
        color: 0x06b6d4,
        orbitRadius: 5.0,
        speed: (2 * Math.PI) / 20,
        angleOffset: (5 * Math.PI) / 3,
      },
    ];

    const spheres = [];

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
      wireframeSphere.position.set(
        spec.position[0],
        spec.position[1],
        spec.position[2]
      );
      wireframeSphere.userData = {
        orbitRadius: spec.orbitRadius,
        speed: spec.speed,
        angleOffset: spec.angleOffset,
      };
      scene.add(wireframeSphere);
      spheres.push(wireframeSphere);
    });

    spheresRef.current = spheres;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / height) * 2 + 1;

      if (!cameraRef.current) return;
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);

      const orbitingSpheres = spheresRef.current.slice(1);
      const intersects = raycasterRef.current.intersectObjects(orbitingSpheres);

      if (intersects.length > 0) {
        const intersectedSphere = intersects[0].object;
        const sphereIndex = spheresRef.current.indexOf(intersectedSphere);
        setHoveredSphere(sphereIndex);
      } else {
        setHoveredSphere(null);
      }
    };
    container.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const time = performance.now() / 1000;

      spheresRef.current.forEach((sphere, index) => {
        if (index === 0) {
          // Central sphere pulsation
          const scale = 1.0 + 0.1 * Math.sin(time * 2);
          sphere.scale.setScalar(scale);
          sphere.material.opacity = 0.6 + 0.3 * Math.sin(time * 3);
        } else {
          // Orbiting spheres
          const { orbitRadius, speed, angleOffset } = sphere.userData;
          const orbitTime = time * speed + angleOffset;
          const x = orbitRadius * Math.cos(orbitTime);
          const z = orbitRadius * Math.sin(orbitTime);
          sphere.position.set(x, 0, z);

          const pulseOpacity = 0.6 + Math.sin(time * 3 + index) * 0.2;
          sphere.material.opacity = Math.max(0.3, pulseOpacity);
        }

        sphere.rotation.y += 0.01 + index * 0.002;
        sphere.rotation.x += 0.003;
      });

      // Update tooltip position
      if (
        hoveredSphere !== null &&
        tooltipRef.current &&
        cameraRef.current &&
        rendererRef.current
      ) {
        const sphere = spheresRef.current[hoveredSphere];
        const position = new THREE.Vector3();
        sphere.getWorldPosition(position);
        position.project(cameraRef.current);

        const x = (position.x * 0.5 + 0.5) * width;
        const y = (position.y * -0.5 + 0.5) * height;

        tooltipRef.current.style.left = `${x}px`;
        tooltipRef.current.style.top = `${y}px`;
        tooltipRef.current.style.opacity = "1";
      } else if (tooltipRef.current) {
        tooltipRef.current.style.opacity = "0";
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        renderer.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !containerRef.current)
        return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup logic
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="block" />

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="absolute pointer-events-none bg-gray-900/90 backdrop-blur-sm border border-gray-700 text-white px-4 py-3 rounded-lg shadow-lg transition-opacity duration-200 z-10"
        style={{
          opacity: 0,
          transform: "translate(-50%, -120%)",
        }}
      >
        {hoveredSphere && skillData[hoveredSphere] && (
          <>
            <div className="font-semibold text-sm text-white">
              {skillData[hoveredSphere].name}
            </div>
            <div className="text-xs text-gray-200 mt-1">
              {skillData[hoveredSphere].skills}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
