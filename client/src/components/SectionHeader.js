import './SectionHeader.css';

function SectionHeader(props) {
  return (
    <div id='section-header-container'>
      <div id='section-name'>{props.sectionName}</div>
    </div>
  )
}

export default SectionHeader;