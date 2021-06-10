import './Skills.css';
import SectionHeader from './SectionHeader';

function Skills() {
  return (
    <div id='skills-container'>
      <SectionHeader sectionName='Skills' />
      <div id='logos'>
        <Skill src='https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' alt='Git Version Control' />
        <Skill src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' alt='HTML5' />
        <Skill src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' alt='CSS3' />
        <Skill src='/assets/images/java-icon.svg' alt='Java' />
        <Skill src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' alt='JavaScript' />
        <Skill src='https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' alt='MongoDB' />
        <Skill src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' alt='Node.js' />
        <Skill src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' alt='Python' />
        <Skill src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt='React.js' /> 
      </div>
    </div>
  )
}

function Skill(props) {
  return (
    <img className='skill' src={props.src} alt={props.alt} />
  )
}

export default Skills;