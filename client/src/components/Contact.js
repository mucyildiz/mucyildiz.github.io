import './Contact.css';
import SectionHeader from './SectionHeader';

function Contact() {
  return (
    <div id='contact-container'>
      <SectionHeader sectionName='Contact Me!' />
      <div id='contacts'>
        <img className='contact' src='https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' alt='LinkedIn Profile' />
        <img className='contact' src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='GitHub Profile' />
        <img className='contact' src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' alt='Email Me' />
      </div>
    </div>
  )
}

export default Contact;