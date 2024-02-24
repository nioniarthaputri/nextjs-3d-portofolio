import React from 'react'
import Link from 'next/link'
import { arrow } from '../../../public/assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
     <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link href={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center neo-brutalism-purple py-4 px-8 text-white mx-5"
    >
      Hii!, I am <span className='font-semibold'>Nioni Artha Putri</span>
      <br />
      A Frontend Developer from Bandung
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Successfully managed several projects over time. Interested in understanding their overall impact?"
      link="/projects"
      btnText="Visit my portofolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? i'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo