import React from 'react'
import "./About.css"
import { whyChooseMe } from '../../sources'

const About = () => {
  return (
    <section id='about'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos='fade-left'>
            <span className="gradient-text">About Me</span>
          </h1>
          <h4 className="sub-title muted" data-aos='fade-left'>
            I'm Anas, a dedicated software engineer with a strong foundation in full-stack development, specializing in technologies such as Node.js, Java,
             Spring, and Python. I have over three years of hands-on experience designing, developing, and maintaining complex software solutions, including mobile 
             applications and e-commerce platforms. Transitioning from a background in Business Administration - Marketing to Software Engineering, I leveraged my problem-solving 
             skills and technical expertise to excel in freelance projects that required both front-end and back-end development. 


          </h4>
        </div>
        <div className="group">
          {
            whyChooseMe.map((list, index) => (
              <div className='flex-center group-item' data-aos='fade-right' key={index}>
                <div className="flex-center icon-wrapper">
                  {list.icon}
                </div>
                <h4 className="title">{list.title}</h4>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About
