import ExercisesList from './ExercisesList';


import './Exercises.css';

const Exercises = () => {
  
  return(
    <div>
      <div className="mock-image">
       <img src='../images/mock_Image.webp' alt=""/>
      </div>
      <div>
       <h2 className='exec'>Exercises</h2>
      </div>
      <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <i className="fas fa-search search-icon"></i>
      <ExercisesList/>
    </div>

  
      
     
      {/* TO DO */}
      Hello from Exercises Page!
      <ExercisesList/>
      
    </div>
  )
}
export default Exercises;