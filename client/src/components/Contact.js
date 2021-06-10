import './Contact.css';
import SectionHeader from './SectionHeader';

function Contact() {
  return (
    <div id='contact-container'>
      <SectionHeader sectionName='Contact Me!' />
      <div id='contacts'>
        <a href='https://www.linkedin.com/in/alperen-yildiz-446576204/' target="_blank" rel="noreferrer">
          <img className='contact' src='https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' alt='LinkedIn Profile' />
        </a>
        <a href='https://github.com/mucyildiz' target="_blank" rel="noreferrer">
          <img className='contact' src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='GitHub Profile' />
        </a>
        <a href='mailto:alperenyildiz21@gmail.com'>
          <img className='contact' src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' alt='Email Me' />
        </a>
      </div>
    </div>
  )
}

export default Contact;