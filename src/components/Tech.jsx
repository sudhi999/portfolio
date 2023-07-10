import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology,index) => (
        <div key={index} className='w-28 h-28 key={technology.name} '>
          <BallCanvas icon = {technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWapper(Tech)