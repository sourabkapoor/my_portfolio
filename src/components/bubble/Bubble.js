import React, { forwardRef, useEffect, useState } from 'react';
import './Bubble.styles.scss'
import { motion } from "framer-motion";

export const Bubble = forwardRef(function Bubble({icon}, ref) {
  const [containerSize, setContainerSize] = useState({width: 0, height: 0});
  const initialPosition =  {
    top: Math.floor(Math.random() * (containerSize.height - 20) + 10),
    left: Math.floor(Math.random() * (containerSize.width - 40) + 10),
  }

  useEffect(() => {
    // console.log(ref.current.offsetHeight)
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setContainerSize({ width: offsetWidth, height: offsetHeight });
    }
  }, [ref])

  const dragConst = {...ref, 
    bottom: containerSize.height - "100px",
    right: containerSize.width - "100px",
  }
 

  const generateRandomPosition = (max) => Math.floor(Math.random() * max);
  const padding = 70
  const randomKeyframes = () => ({
     x: [
      generateRandomPosition(containerSize.width - initialPosition.left - padding),
      generateRandomPosition(containerSize.width - initialPosition.left - padding),
      generateRandomPosition(containerSize.width - initialPosition.left - padding),
      generateRandomPosition(containerSize.width - initialPosition.left - padding),
      generateRandomPosition(containerSize.width - initialPosition.left - padding),
      generateRandomPosition(containerSize.width - initialPosition.left - padding),
    ],
    y: [
      generateRandomPosition(containerSize.height - initialPosition.top - padding),
      generateRandomPosition(containerSize.height - initialPosition.top - padding),
      generateRandomPosition(containerSize.height - initialPosition.top - padding),
      generateRandomPosition(containerSize.height - initialPosition.top - padding),
      generateRandomPosition(containerSize.height - initialPosition.top - padding),
      generateRandomPosition(containerSize.height - initialPosition.top - padding),
    ],
    transition: {
      duration: Math.random() * 5 + 25,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  });

return <motion.div 
    animate={randomKeyframes()} 
    drag
    style={initialPosition}
    className='bubble' 
    dragConstraints={dragConst}
  >
    <img src={icon} alt={"..."} />
  </motion.div>
})