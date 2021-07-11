import './App.css';
import GeneralInformation from '../GeneralInformation/GeneralInformation';
import EducationContainer from '../Education/EducationContainer';



function App() {
  return (
    <div className="App">
      <div className="component-container">
        <GeneralInformation />
        <EducationContainer />
      </div>
    </div>
  );
}

export default App;
