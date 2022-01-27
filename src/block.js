import { useRef, createContext, useContext } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import lerp from "lerp"
import state from "./state";
const offsetContext = createContext(0)

const Block = ({ children, offset, factor, ...props }) => {
  const ref = useRef()
  // Fetch parent offset and the height of a single section
  const { offset: parentOffset, sectionHeight } = useBlock()
  offset = offset !== undefined ? offset : parentOffset
  // Runs every frame and lerps the inner block into its place
  useFrame(() => {
    const curY = ref.current.position.y
    const curTop = state.top.current
    ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1)
  })
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 0]}>
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  )
}

const useBlock = () => {
    const { sections, pages, zoom } = state
  const { viewport } = useThree()
  const offset = useContext(offsetContext)
  const canvasWidth = viewport.width / zoom
  const canvasHeight = viewport.height / zoom
  const sectionHeight = canvasHeight * ((pages - 1) / (sections - 1))
  return { offset, canvasWidth, canvasHeight, sectionHeight }
}

export {useBlock, Block };
