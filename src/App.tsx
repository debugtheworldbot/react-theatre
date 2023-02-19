import { Canvas, useFrame } from '@react-three/fiber'
import { Gltf, ScrollControls, useScroll } from '@react-three/drei'
import { getProject, ISheet, types, val } from '@theatre/core'
import fly from './fly.json'

import { SheetProvider, PerspectiveCamera, useCurrentSheet } from '@theatre/r3f'

export default function App() {
	const sheet = getProject('Fly  Through').sheet('Scene')

	return (
		<Canvas gl={{ preserveDrawingBuffer: true }}>
			<ScrollControls pages={5}>
				<SheetProvider sheet={sheet}>
					<Scene />
				</SheetProvider>
			</ScrollControls>
		</Canvas>
	)
}

function Scene() {
	const sheet = useCurrentSheet() as ISheet
	const scroll = useScroll()

	// our callback will run on every animation frame
	useFrame(() => {
		// the length of our sequence
		const sequenceLength = val(sheet.sequence.pointer.length)
		// update the "position" of the playhead in the sequence, as a fraction of its whole length
		sheet.sequence.position = scroll.offset * sequenceLength
	})

	const bgColor = '#84a4f4'

	return (
		<>
			<color attach='background' args={[bgColor]} />
			<fog attach='fog' color={bgColor} near={-5} far={10} />
			<ambientLight intensity={0.5} />
			<directionalLight position={[1, 1, -1]} intensity={1.5} />
			<Gltf
				src='/environment.glb'
				castShadow
				receiveShadow
				key={undefined}
				quaternion={undefined}
				onPointerMissed={undefined}
				position={undefined}
				attach={undefined}
				args={undefined}
				onUpdate={undefined}
				up={undefined}
				scale={undefined}
				rotation={undefined}
				matrix={undefined}
				layers={undefined}
				dispose={undefined}
				onClick={undefined}
				onContextMenu={undefined}
				onDoubleClick={undefined}
				onPointerUp={undefined}
				onPointerDown={undefined}
				onPointerOver={undefined}
				onPointerOut={undefined}
				onPointerEnter={undefined}
				onPointerLeave={undefined}
				onPointerMove={undefined}
				onPointerCancel={undefined}
				onWheel={undefined}
				visible={undefined}
				type={undefined}
				isGroup={undefined}
				id={undefined}
				uuid={undefined}
				name={undefined}
				parent={undefined}
				modelViewMatrix={undefined}
				normalMatrix={undefined}
				matrixWorld={undefined}
				matrixAutoUpdate={undefined}
				matrixWorldAutoUpdate={undefined}
				matrixWorldNeedsUpdate={undefined}
				frustumCulled={undefined}
				renderOrder={undefined}
				animations={undefined}
				userData={undefined}
				customDepthMaterial={undefined}
				customDistanceMaterial={undefined}
				isObject3D={undefined}
				onBeforeRender={undefined}
				onAfterRender={undefined}
				applyMatrix4={undefined}
				applyQuaternion={undefined}
				setRotationFromAxisAngle={undefined}
				setRotationFromEuler={undefined}
				setRotationFromMatrix={undefined}
				setRotationFromQuaternion={undefined}
				rotateOnAxis={undefined}
				rotateOnWorldAxis={undefined}
				rotateX={undefined}
				rotateY={undefined}
				rotateZ={undefined}
				translateOnAxis={undefined}
				translateX={undefined}
				translateY={undefined}
				translateZ={undefined}
				localToWorld={undefined}
				worldToLocal={undefined}
				lookAt={undefined}
				add={undefined}
				remove={undefined}
				removeFromParent={undefined}
				clear={undefined}
				getObjectById={undefined}
				getObjectByName={undefined}
				getObjectByProperty={undefined}
				getObjectsByProperty={undefined}
				getWorldPosition={undefined}
				getWorldQuaternion={undefined}
				getWorldScale={undefined}
				getWorldDirection={undefined}
				raycast={undefined}
				traverse={undefined}
				traverseVisible={undefined}
				traverseAncestors={undefined}
				updateMatrix={undefined}
				updateMatrixWorld={undefined}
				updateWorldMatrix={undefined}
				toJSON={undefined}
				clone={undefined}
				copy={undefined}
				addEventListener={undefined}
				hasEventListener={undefined}
				removeEventListener={undefined}
				dispatchEvent={undefined}
			/>
			<PerspectiveCamera
				theatreKey='Camera'
				makeDefault
				position={[0, 0, 0]}
				fov={90}
				near={0.1}
				far={70}
				key={undefined}
				view={undefined}
				quaternion={undefined}
				onPointerMissed={undefined}
				attach={undefined}
				args={undefined}
				onUpdate={undefined}
				up={undefined}
				scale={undefined}
				rotation={undefined}
				matrix={undefined}
				layers={undefined}
				dispose={undefined}
				onClick={undefined}
				onContextMenu={undefined}
				onDoubleClick={undefined}
				onPointerUp={undefined}
				onPointerDown={undefined}
				onPointerOver={undefined}
				onPointerOut={undefined}
				onPointerEnter={undefined}
				onPointerLeave={undefined}
				onPointerMove={undefined}
				onPointerCancel={undefined}
				onWheel={undefined}
				castShadow={undefined}
				receiveShadow={undefined}
				type={undefined}
				id={undefined}
				uuid={undefined}
				name={undefined}
				parent={undefined}
				modelViewMatrix={undefined}
				normalMatrix={undefined}
				matrixWorld={undefined}
				matrixAutoUpdate={undefined}
				matrixWorldNeedsUpdate={undefined}
				frustumCulled={undefined}
				renderOrder={undefined}
				animations={undefined}
				userData={undefined}
				customDepthMaterial={undefined}
				customDistanceMaterial={undefined}
				isObject3D={undefined}
				onBeforeRender={undefined}
				onAfterRender={undefined}
				applyMatrix4={undefined}
				applyQuaternion={undefined}
				setRotationFromAxisAngle={undefined}
				setRotationFromEuler={undefined}
				setRotationFromMatrix={undefined}
				setRotationFromQuaternion={undefined}
				rotateOnAxis={undefined}
				rotateOnWorldAxis={undefined}
				rotateX={undefined}
				rotateY={undefined}
				rotateZ={undefined}
				translateOnAxis={undefined}
				translateX={undefined}
				translateY={undefined}
				translateZ={undefined}
				localToWorld={undefined}
				worldToLocal={undefined}
				add={undefined}
				remove={undefined}
				removeFromParent={undefined}
				clear={undefined}
				getObjectById={undefined}
				getObjectByName={undefined}
				getObjectByProperty={undefined}
				getWorldPosition={undefined}
				getWorldQuaternion={undefined}
				getWorldScale={undefined}
				getWorldDirection={undefined}
				raycast={undefined}
				traverse={undefined}
				traverseVisible={undefined}
				traverseAncestors={undefined}
				updateMatrix={undefined}
				updateMatrixWorld={undefined}
				updateWorldMatrix={undefined}
				toJSON={undefined}
				clone={undefined}
				copy={undefined}
				addEventListener={undefined}
				hasEventListener={undefined}
				removeEventListener={undefined}
				dispatchEvent={undefined}
				zoom={undefined}
				attachArray={undefined}
				attachObject={undefined}
				attachFns={undefined}
				matrixWorldInverse={undefined}
				projectionMatrix={undefined}
				projectionMatrixInverse={undefined}
				isCamera={undefined}
				isPerspectiveCamera={undefined}
				aspect={undefined}
				focus={undefined}
				filmGauge={undefined}
				filmOffset={undefined}
				setFocalLength={undefined}
				getFocalLength={undefined}
				getEffectiveFOV={undefined}
				getFilmWidth={undefined}
				getFilmHeight={undefined}
				setViewOffset={undefined}
				clearViewOffset={undefined}
				updateProjectionMatrix={undefined}
				setLens={undefined}
			/>
		</>
	)
}
