import SectionHeader from './SectionHeader';
import './AboutMe.css';

function AboutMe() {
  return (
    <div id='about-container'>
      <SectionHeader sectionName='About Me' />
      <div id='about-content'>
        <div id='words'>
        I am a recent graduate from the University of Massachusetts Amherst where I majored in Mathematics with concentrations in Computing
        and Data Science. In addition to the coding I did for my coursework at UMass, I enjoy programming as a hobby and much of my free time
        is spent working on personal projects and keeping up with the web development world. I am currently looking for opportunities!
        </div>
      </div>
      <img id='computers' src='assets/images/computers.svg' alt='' />
    </div>
  )
}

export default AboutMe;