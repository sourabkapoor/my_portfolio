import React from 'react'
import { Parallax } from '../parallax/Parallax'
import './ExtraCuricularStyles.scss'

const images = require.context('../../assets/life', true)
export const imageList = images.keys().map(image => images(image));


const ExtraCuricular = () => {
  return <>
    <Parallax baseVelocity={-5}>
        <div className='parallaxImages'>
          {imageList?.slice(0, 9).map((img, key) => {
            return <img src={img} alt={".."} key={`firstRow${key}`} />
          })}
        </div>
      </Parallax>
      <Parallax baseVelocity={5}>
        <div className='parallaxImages'>
          {imageList?.slice(9, 18).map((img, key) => {
            return <img src={img} alt={".."} key={`SecondRow${key}`} />
          })}
        </div>
      </Parallax>
      <Parallax baseVelocity={-5}>
        <div className='parallaxImages'>
          {imageList?.slice(19, 27).map((img, key) => {
            return <img src={img} alt={".."} key={`ThirdRow${key}`} />
          })}
        </div>
      </Parallax>
  </>
}

export default ExtraCuricular