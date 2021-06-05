import './PageHeader.css';

function PageHeader() {
  return (
    <div id='page-header-container'>
      <div id='logo'>Placeholder</div>
      <div id='tabs'>
        <div className='tab'>about</div>
        <div className='tab'>projects</div>
        <div className='tab'>education</div>
        <div className='tab'>skills</div>
        <div className='tab'>contact</div>
        <div className='tab'>resume</div>
      </div>
      <img id='menu-icon' src='/assets/images/menu.svg' alt= "click to see all page sections"/>
    </div>
  )
}

export default PageHeader;