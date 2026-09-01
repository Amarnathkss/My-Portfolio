import { useMemo, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

const nodes = [
    { position: [0, 1.6, 0], label: 'AI', size: 0.075 },
    { position: [-1.8, 0.7, 0.3], label: 'React', size: 0.06 },
    { position: [1.8, 0.7, -0.2], label: 'Node', size: 0.06 },
    { position: [-1.4, -0.9, -0.3], label: 'API', size: 0.05 },
    { position: [1.5, -1, 0.2], label: 'Automation', size: 0.05 },
    { position: [0, -2, -0.2], label: 'Database', size: 0.065 },
]

const connections = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [1, 4],
    [2, 3],
]

const Network = () => {
    const groupRef = useRef(null)
    const nodeRefs = useRef([])
    const particleRefs = useRef([])

    const mouse = useRef({
        x: 0,
        y: 0,
    })

    const currentMouse = useRef({
        x: 0,
        y: 0,
    })

    /*
     * Generate background particles only once.
     */
    const particles = useMemo(() => {
        return Array.from({ length: 100 }, () => ({
            position: [
                (Math.random() - 0.5) * 9,
                (Math.random() - 0.5) * 7,
                (Math.random() - 0.5) * 4,
            ],
            size: Math.random() * 0.018 + 0.006,
            opacity: Math.random() * 0.35 + 0.1,
            speed: Math.random() * 0.6 + 0.2,
            phase: Math.random() * Math.PI * 2,
        }))
    }, [])

    /*
     * Track the actual browser cursor.
     */
    useEffect(() => {
        const handleMouseMove = (event) => {
            mouse.current.x =
                (event.clientX / window.innerWidth) * 2 - 1

            mouse.current.y =
                -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener(
            'mousemove',
            handleMouseMove,
        )

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove,
            )
        }
    }, [])

    useFrame((state) => {
        const elapsed = state.clock.getElapsedTime()

        if (!groupRef.current) return

        /*
         * Smooth cursor position.
         */
        currentMouse.current.x = THREE.MathUtils.lerp(
            currentMouse.current.x,
            mouse.current.x,
            0.06,
        )

        currentMouse.current.y = THREE.MathUtils.lerp(
            currentMouse.current.y,
            mouse.current.y,
            0.06,
        )

        /*
         * Main network movement.
         */
        const targetRotationY =
            currentMouse.current.x * 0.45

        const targetRotationX =
            currentMouse.current.y * 0.25

        const targetPositionX =
            currentMouse.current.x * 0.25

        const targetPositionY =
            currentMouse.current.y * 0.15

        groupRef.current.rotation.y =
            THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                targetRotationY,
                0.05,
            )

        groupRef.current.rotation.x =
            THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                targetRotationX,
                0.05,
            )

        groupRef.current.position.x =
            THREE.MathUtils.lerp(
                groupRef.current.position.x,
                targetPositionX,
                0.05,
            )

        groupRef.current.position.y =
            THREE.MathUtils.lerp(
                groupRef.current.position.y,
                targetPositionY +
                Math.sin(elapsed * 0.4) * 0.04,
                0.05,
            )

        /*
         * Main node breathing.
         */
        nodeRefs.current.forEach((node, index) => {
            if (!node) return

            const pulse =
                1 +
                Math.sin(
                    elapsed * 1.5 + index * 0.8,
                ) *
                0.12

            node.scale.setScalar(pulse)
        })

        /*
         * Background particle movement.
         */
        particleRefs.current.forEach(
            (particle, index) => {
                if (!particle) return

                const data = particles[index]

                particle.position.y =
                    data.position[1] +
                    Math.sin(
                        elapsed * data.speed +
                        data.phase,
                    ) *
                    0.12

                particle.position.x =
                    data.position[0] +
                    Math.cos(
                        elapsed * data.speed * 0.5 +
                        data.phase,
                    ) *
                    0.06
            },
        )
    })

    return (
        <group ref={groupRef}>
            {/* ========================================
          BACKGROUND PARTICLES
          ======================================== */}

            <group>
                {particles.map((particle, index) => (
                    <mesh
                        key={index}
                        ref={(element) => {
                            particleRefs.current[index] =
                                element
                        }}
                        position={particle.position}
                    >
                        <sphereGeometry
                            args={[
                                particle.size,
                                6,
                                6,
                            ]}
                        />

                        <meshBasicMaterial
                            color="#8b5cf6"
                            transparent
                            opacity={particle.opacity}
                            depthWrite={false}
                        />
                    </mesh>
                ))}
            </group>

            {/* ========================================
          MAIN NETWORK NODES
          ======================================== */}

            {nodes.map((node, index) => (
                <group
                    key={node.label}
                    position={node.position}
                    ref={(element) => {
                        nodeRefs.current[index] =
                            element
                    }}
                >
                    {/* Core */}
                    <mesh>
                        <sphereGeometry
                            args={[
                                node.size,
                                16,
                                16,
                            ]}
                        />

                        <meshBasicMaterial
                            color="#5b9cff"
                            transparent
                            opacity={0.95}
                        />
                    </mesh>

                    {/* Glow */}
                    <mesh>
                        <sphereGeometry
                            args={[
                                node.size * 3,
                                16,
                                16,
                            ]}
                        />

                        <meshBasicMaterial
                            color="#4f8cff"
                            transparent
                            opacity={0.07}
                            depthWrite={false}
                        />
                    </mesh>
                </group>
            ))}

            {/* ========================================
          NETWORK CONNECTIONS
          ======================================== */}

            {connections.map(
                ([from, to], index) => (
                    <Line
                        key={index}
                        points={[
                            nodes[from].position,
                            nodes[to].position,
                        ]}
                        color="#4f8cff"
                        transparent
                        opacity={0.2}
                        lineWidth={0.8}
                    />
                ),
            )}
        </group>
    )
}

const TechNetwork = () => {
    return (
        <div className="pointer-events-none absolute inset-0 z-0">
            <Canvas
                camera={{
                    position: [0, 0, 7],
                    fov: 45,
                }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference:
                        'high-performance',
                }}
            >
                <Network />
            </Canvas>
        </div>
    )
}

export default TechNetwork