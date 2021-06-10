import './Introduction.css';

function Introduction() {
  return (
    <div id='intro-container'>
      <div id='greeting'>Hello! My name is</div>
      <div id='name'>Mucahit Alperen Yildiz.
        <br/> 
        <span id='subtitle'>I like to create.</span>
      </div>
      <div id='message'>
        I am an aspiring software developer fresh out of the
        University of Massachusetts Amherst. My degree in Mathematics
        with concentrations in Data Science and Computing taught me 
        both coding and critical thinking skills that I utilize daily in creating
        web applications.
      </div>
      <a href='mailto:alperenyildiz21@gmail.com'>
        <button id='contact'>
          Contact Me!
        </button>
      </a>
    </div>
  )
}

export default Introduction;