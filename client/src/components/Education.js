import SectionHeader from './SectionHeader';
import './Education.css';

function Education() {
  return (
    <div id='education-container'>
      <SectionHeader sectionName='Education' />
      <div id='education'>
        <div id='degree'>
          <div id='school-name'>
            <div id='umass'>University of Massachusetts Amherst - Amherst, MA</div>
            <div>September 2017 - May 2021</div>
          </div>
          <div>Bachelors of Science in Mathematics</div>
          <div>Concentrations in Computing and Data Science</div>
          <div>Major GPA: 3.6</div>
        </div>
      </div>
      <div id='courses'>
          <h2>Relevant Coursework</h2>
          <div id='classes'>Analysis of Algorithms, Data Structures, Databases (SQL), Data Analysis with Python, Regression Analysis, Combinatorics, Advanced
            Calculus, Applied Linear Algebra
          </div>
      </div>
    </div>
  )
}

export default Education;