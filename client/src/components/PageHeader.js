import './PageHeader.css';
import Resume from './MucahitResume.pdf';

function PageHeader() {

  return (
    <div id='page-header-container'>
      <img id='logo' src='/assets/images/versioncontrol.svg' alt='' />
      <div id='tabs'>
        <a href='#about-container'>
          <div className='tab'>about</div>
        </a>
        <a href='#projects-container'>
          <div className='tab'>projects</div>
        </a>
        <a href='#education-container'>
          <div className='tab'>education</div>
        </a>
        <a href='#skills-container'>
          <div className='tab'>skills</div>
        </a>
        <a href='#contact-container'>
          <div className='tab'>contact</div>
        </a>
        <a href={Resume} target = '_blank' rel="noreferrer">
          <div className='tab'>resume</div>
        </a>
      </div>
    </div>
  )
}

export default PageHeader;