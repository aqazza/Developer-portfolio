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
          {/* <h4 className="sub-title muted" data-aos='fade-left'>
            My expertise in cybersecurity ensures that every solution I deliver is not just functional, but also fortified against potential threats.
            I approach each project with enthusiasm, whether it's developing web applications, creating software solutions, or implementing security measures.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            What sets me apart is my blend of technical proficiency and creative problem solving. I don't just
            write code; I craft experiences. Each project is an opportunity to explore new possibilities and
            deliver solutions that exceed expectations.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            If you're seeking a dedicated professional to transform complex challenges into
            secure, efficient, and innovative solutions, let's connect and create impactful technology together.
          </h4> */}
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
