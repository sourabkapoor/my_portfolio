import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import './ProgressCard.styles.scss'

export const ProgressCard = ({logo, brand, duration, info, degree}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  return (
    <section>
      <div ref={ref}>
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="40" cy="40" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="40"
              cy="40"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
        <div className="content">
          <div className="branding">
            <img src={logo} alt={"..."}></img>
            <div>
              <div className="bold">{brand}</div>
              <div className="duration">{duration}</div>
            </div>
          </div>
          {/* Job responsibilities */}
          {info && 
            <div className="jobDescription">
              {
                info.map((resp, key) => {
                  return <div key={`resp${key}`}>{`- ${resp}`}</div>
                })
              }
            </div>
          }

          {/* Degree */}
          {degree &&
            <div className="degree">
              {degree}
            </div>
          }
        </div>
      </div>
    </section>
  )
} 