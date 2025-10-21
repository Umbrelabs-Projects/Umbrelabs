// "use client"

// import { Canvas, useFrame } from "@react-three/fiber"
// import { OrbitControls, Environment, Float, Html, Sparkles } from "@react-three/drei"
// import { Suspense, useRef, useMemo, useState } from "react"
// import * as THREE from "three"
// import { a, useSpring } from "@react-spring/web"

// const services = [
//   { name: "Business Solutions", icon: "💼", color: "#3b82f6", position: [-2.2, -1.5, 1.2] },
//   { name: "Technology Development", icon: "⚙️", color: "#10b981", position: [2.5, -1, -0.8] },
//   { name: "Creative Design", icon: "🎨", color: "#ec4899", position: [-1.5, -2.5, -0.3] },
//   { name: "Project Management", icon: "📋", color: "#f59e0b", position: [1.8, -2, 1.8] },
//   { name: "Data Analytics", icon: "📊", color: "#06b6d4", position: [-3, -1.2, -1.5] },
//   { name: "Digital Consulting", icon: "🤝", color: "#8b5cf6", position: [0.8, -2.8, 1] },
//   { name: "Innovation Labs", icon: "💡", color: "#eab308", position: [-1.2, -2.2, -2] },
//   { name: "Process Optimization", icon: "🔄", color: "#6b7280", position: [2.8, -1.5, 0.2] },
// ]

// function ServiceOrb({ service, index }: { service: (typeof services)[0]; index: number }) {
//   const groupRef = useRef<THREE.Group>(null)
//   const [isVisible, setIsVisible] = useState(false)

//   useFrame((state) => {
//     if (groupRef.current) {
//       const worldPosition = new THREE.Vector3()
//       groupRef.current.getWorldPosition(worldPosition)

//       const camera = state.camera
//       const direction = new THREE.Vector3().subVectors(camera.position, worldPosition).normalize()

//       const isProperlyOriented = direction.y > -0.5 && direction.length() > 0
//       const timeOffset = index * 0.15
//       const shouldShow = state.clock.elapsedTime > timeOffset && isProperlyOriented

//       setIsVisible(shouldShow)
//     }
//   })

//   // 🌟 Animate opacity + scale with react-spring
//   const spring = useSpring({
//     opacity: isVisible ? 1 : 0,
//     scale: isVisible ? 1 : 0.8,
//     config: { tension: 200, friction: 20 },
//   })

//   return (
//     <Float speed={0.8 + index * 0.05} rotationIntensity={0.3} floatIntensity={0.5} floatingRange={[0.3, 0.6]}>
//       <group ref={groupRef} position={service.position}>
//         {/* Orbs */}
//         <mesh>
//           <sphereGeometry args={[0.4, 32, 32]} />
//           <meshStandardMaterial
//             color={service.color}
//             transparent
//             opacity={0.95}
//             roughness={0.05}
//             metalness={0.4}
//             emissive={service.color}
//             emissiveIntensity={0.08}
//           />
//         </mesh>
//         <mesh>
//           <sphereGeometry args={[0.35, 24, 24]} />
//           <meshStandardMaterial color="white" transparent opacity={0.15} roughness={0.0} metalness={0.9} />
//         </mesh>
//         <mesh>
//           <sphereGeometry args={[0.45, 16, 16]} />
//           <meshStandardMaterial
//             color={service.color}
//             transparent
//             opacity={0.08}
//             emissive={service.color}
//             emissiveIntensity={0.15}
//           />
//         </mesh>

//         {/* Animated Label */}
//         <Html
//           position={[0, 0.8, 0]}
//           center
//           distanceFactor={10}
//           transform={false}
//           occlude
//           style={{ pointerEvents: "none", textAlign: "center" }}
//         >
//           <a.div
//             style={{
//               opacity: spring.opacity,
//               transform: spring.scale.to((s) => `scale(${s})`),
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "white",
//               textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)",
//               fontFamily: "system-ui, -apple-system, sans-serif",
//             }}
//           >
//             <div
//               style={{
//                 fontSize: "18px",
//                 marginBottom: "4px",
//                 filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
//               }}
//             >
//               {service.icon}
//             </div>
//             <div
//               style={{
//                 background: "rgba(0,0,0,0.8)",
//                 padding: "4px 10px",
//                 borderRadius: "10px",
//                 backdropFilter: "blur(16px)",
//                 border: "1px solid rgba(255,255,255,0.3)",
//                 fontSize: "9px",
//                 fontWeight: "700",
//                 letterSpacing: "0.3px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
//                 color: "#ffffff",
//               }}
//             >
//               {service.name}
//             </div>
//           </a.div>
//         </Html>
//       </group>
//     </Float>
//   )
// }

// function UmbrellaScene() {
//   const umbrellaRef = useRef<THREE.Group>(null)
//   const canopyRef = useRef<THREE.Mesh>(null)

//   useFrame((state) => {
//     if (umbrellaRef.current) {
//       // ✅ reversed swing
//       umbrellaRef.current.rotation.y = -Math.sin(state.clock.elapsedTime * 0.3) * 0.1
//     }
//     if (canopyRef.current) {
//       // ✅ reversed spin
//       canopyRef.current.rotation.y -= 0.008
//     }
//   })

//   const umbrellaGeometry = useMemo(() => {
//     const geometry = new THREE.ConeGeometry(3.5, 2, 16, 1, false, 0, Math.PI * 2)
//     const positions = geometry.attributes.position.array as Float32Array

//     for (let i = 0; i < positions.length; i += 3) {
//       const x = positions[i]
//       const y = positions[i + 1]
//       const z = positions[i + 2]

//       if (y > -1) {
//         const distance = Math.sqrt(x * x + z * z)
//         positions[i + 1] = y - distance * 0.15
//       }
//     }

//     geometry.attributes.position.needsUpdate = true
//     geometry.computeVertexNormals()
//     return geometry
//   }, [])

//   return (
//     <>
//       <group ref={umbrellaRef} position={[0, 1.5, 0]}>
//         {/* Handle */}
//         <group position={[0, -2.5, 0]}>
//           <mesh>
//             <cylinderGeometry args={[0.08, 0.06, 2.5, 12]} />
//             <meshStandardMaterial color="#8b4513" roughness={0.3} metalness={0.1} />
//           </mesh>
//           <mesh position={[0, -1, 0]}>
//             <cylinderGeometry args={[0.12, 0.12, 0.3, 8]} />
//             <meshStandardMaterial color="#654321" roughness={0.8} />
//           </mesh>
//         </group>

//         {/* Canopy */}
//         <mesh ref={canopyRef} position={[0, 0.2, 0]} geometry={umbrellaGeometry}>
//           <meshStandardMaterial
//             color="#6366f1"
//             transparent
//             opacity={0.85}
//             side={THREE.DoubleSide}
//             roughness={0.2}
//             metalness={0.1}
//           />
//         </mesh>

//         {/* Hub */}
//         <mesh position={[0, 0.8, 0]}>
//           <sphereGeometry args={[0.15, 12, 12]} />
//           <meshStandardMaterial color="#374151" roughness={0.3} metalness={0.7} />
//         </mesh>
//       </group>

//       {services.map((service, index) => (
//         <ServiceOrb key={service.name} service={service} index={index} />
//       ))}

//       {/* Lights & FX */}
//       <ambientLight intensity={0.4} color="#f0f9ff" />
//       <directionalLight
//         position={[8, 12, 5]}
//         intensity={1.2}
//         color="#ffffff"
//         castShadow
//         shadow-mapSize={[4096, 4096]}
//         shadow-camera-far={50}
//         shadow-camera-left={-10}
//         shadow-camera-right={10}
//         shadow-camera-top={10}
//         shadow-camera-bottom={-10}
//       />
//       <pointLight position={[0, 6, 0]} intensity={0.8} color="#6366f1" />
//       <pointLight position={[-5, 3, -5]} intensity={0.4} color="#ec4899" />
//       <pointLight position={[5, 3, 5]} intensity={0.4} color="#10b981" />

//       <Sparkles count={50} scale={[8, 6, 8]} size={2} speed={0.3} opacity={0.6} color="#6366f1" />

//       <Environment preset="sunset" background={false} />

//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         maxPolarAngle={Math.PI / 1.8}
//         minPolarAngle={Math.PI / 6}
//         autoRotate
//         autoRotateSpeed={0.5}
//         enableDamping
//         dampingFactor={0.05}
//       />
//     </>
//   )
// }

// export default function InteractiveUmbrella() {
//   return (
//     <div className="h-[600px] w-full max-w-2xl relative">
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-3xl blur-3xl"></div>
//       <Canvas
//         camera={{ position: [0, 0, 10], fov: 50 }}
//         style={{ background: "transparent" }}
//         shadows
//         gl={{ antialias: true, alpha: true }}
//       >
//         <Suspense fallback={null}>
//           <UmbrellaScene />
//         </Suspense>
//       </Canvas>
//     </div>
//   )
// }


"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Html, Sparkles } from "@react-three/drei"
import { Suspense, useRef, useMemo, useState } from "react"
import * as THREE from "three"
import { a, useSpring } from "@react-spring/web"

const services = [
  { name: "Business Solutions", icon: "💼", color: "#f59e0b", position: [-2.2, -1.5, 1.2] as [number, number, number]},
  { name: "Technology Development", icon: "⚙️", color: "#fbbf24", position: [2.5, -1, -0.8] as [number, number, number] },
  { name: "Creative Design", icon: "🎨", color: "#f59e0b", position: [-1.5, -2.5, -0.3] as [number, number, number]},
  { name: "Project Management", icon: "📋", color: "#d97706", position: [1.8, -2, 1.8] as [number, number, number]},
  { name: "Data Analytics", icon: "📊", color: "#f59e0b", position: [-3, -1.2, -1.5] as [number, number, number]},
  { name: "Digital Consulting", icon: "🤝", color: "#fbbf24", position: [0.8, -2.8, 1] as [number, number, number]},
  { name: "Innovation Labs", icon: "💡", color: "#d97706", position: [-1.2, -2.2, -2] as [number, number, number]},
  { name: "Process Optimization", icon: "🔄", color: "#92400e", position: [2.8, -1.5, 0.2] as [number, number, number]},
]

function ServiceOrb({ service, index }: { service: (typeof services)[0]; index: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const [isVisible, setIsVisible] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      const worldPosition = new THREE.Vector3()
      groupRef.current.getWorldPosition(worldPosition)

      const camera = state.camera
      const direction = new THREE.Vector3().subVectors(camera.position, worldPosition).normalize()

      const isProperlyOriented = direction.y > -0.5 && direction.length() > 0
      const timeOffset = index * 0.15
      const shouldShow = state.clock.elapsedTime > timeOffset && isProperlyOriented

      setIsVisible(shouldShow)
    }
  })

  // 🌟 Animate opacity + scale
  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    config: { tension: 200, friction: 20 },
  })

  return (
    <Float speed={0.8 + index * 0.05} rotationIntensity={0.3} floatIntensity={0.5} floatingRange={[0.3, 0.6]}>
      <group ref={groupRef} position={service.position}>
        {/* Orbs */}
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color={service.color}
            transparent
            opacity={0.95}
            roughness={0.05}
            metalness={0.4}
            emissive={service.color}
            emissiveIntensity={0.08}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.35, 24, 24]} />
          <meshStandardMaterial color="white" transparent opacity={0.15} roughness={0.0} metalness={0.9} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial
            color={service.color}
            transparent
            opacity={0.08}
            emissive={service.color}
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Animated Label */}
        <Html
          position={[0, 0.8, 0]}
          center
          distanceFactor={10}
          transform={false}
          occlude
          style={{ pointerEvents: "none", textAlign: "center" }}
        >
          <a.div
            style={{
              opacity: spring.opacity,
              transform: spring.scale.to((s) => `scale(${s})`),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                marginBottom: "4px",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
              }}
            >
              {service.icon}
            </div>
            <div
              style={{
                background: "rgba(0,0,0,0.8)",
                padding: "4px 10px",
                borderRadius: "10px",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.3)",
                fontSize: "9px",
                fontWeight: "700",
                letterSpacing: "0.3px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                color: "#ffffff",
              }}
            >
              {service.name}
            </div>
          </a.div>
        </Html>
      </group>
    </Float>
  )
}

function UmbrellaScene() {
  const umbrellaRef = useRef<THREE.Group>(null)
  const canopyRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (umbrellaRef.current) {
      // ✅ reversed swing
      umbrellaRef.current.rotation.y = -Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    if (canopyRef.current) {
      // ✅ reversed spin
      canopyRef.current.rotation.y -= 0.008
    }
  })

  const umbrellaGeometry = useMemo(() => {
    // Start with half a sphere
    const geometry = new THREE.SphereGeometry(2.8, 64, 9, 0, Math.PI * 2, 0, Math.PI / 2)

    const pos = geometry.attributes.position as THREE.BufferAttribute

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      const z = pos.getZ(i)

      // Apply scallops to bottom edge
      if (Math.abs(y) < 0.05) {
        const angle = Math.atan2(z, x)
        const wave = Math.sin(angle * 8) * 0.3 // 8 scallops
        pos.setY(i, y - wave)
      }
    }

    pos.needsUpdate = true
    geometry.computeVertexNormals()
    return geometry
  }, [])

  return (
    <>
      <group ref={umbrellaRef} position={[0, 1.5, 0]}>
        {/* Handle */}
        <group position={[0, -2.5, 0]}>
          <mesh position={[0, 2.5 / 2, 0]}>
            <cylinderGeometry args={[0.08, 0.06, 3.7, 12]} />
            <meshStandardMaterial color="#8b4513" roughness={0.3} metalness={0.1} />
          </mesh>
          <mesh position={[0, -1, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.5, 8]} />
            <meshStandardMaterial color="#654321" roughness={0.8} />
          </mesh>
        </group>

        {/* Canopy (rounded + scalloped) */}
        <mesh ref={canopyRef} position={[0, 0.15, 0]} geometry={umbrellaGeometry}>
          <meshStandardMaterial
            color="#d97706" // amber umbrella
            transparent
            opacity={0.95}
            side={THREE.DoubleSide}
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>

        {/* Hub */}
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.15, 12, 12]} />
          <meshStandardMaterial color="#374151" roughness={0.3} metalness={0.7} />
        </mesh>
      </group>

      {services.map((service, index) => (
        <ServiceOrb key={service.name} service={service} index={index} />
      ))}

      {/* Lights & FX */}
      <ambientLight intensity={0.4} color="#f0f9ff" />
      <directionalLight
        position={[8, 12, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
        shadow-mapSize={[4096, 4096]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[0, 6, 0]} intensity={0.8} color="#d97706" />
      <pointLight position={[-5, 3, -5]} intensity={0.4} color="#f59e0b" />
      <pointLight position={[5, 3, 5]} intensity={0.4} color="#fbbf24" />

      <Sparkles count={50} scale={[8, 6, 8]} size={2} speed={0.3} opacity={0.6} color="#d97706" />

      <Environment preset="sunset" background={false} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 6}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  )
}

export default function InteractiveUmbrella() {
  return (
    <div className="h-full w-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-yellow-100/20 rounded-3xl blur-3xl"></div>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: "transparent" }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <UmbrellaScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
