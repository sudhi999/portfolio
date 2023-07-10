import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWapper } from '../hoc'
import { textVariant } from '../utils/motion'


const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement contentStyle = {{background : '#1d1836' , color:'#fff'}} date = {experience.date}  
    iconStyle = {{background:experience.iconBg}}
    icon ={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.comapany_name} className='w-[60%] h-[60%] object-contain ' />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[16px]'>{experience.company_name}</p>
      <p className='text-secondary text-[16px]'>{experience.grade ? `Grade : ${experience.grade} CGPA` : " " }</p>
    </div>
  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index) => (
            <ExperienceCard key={index} experience = {experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWapper(Experience,'Education')