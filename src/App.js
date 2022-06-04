import './App.css';
import Question from './components/Question';
import { GlobalProvider} from './context/globalState';
function App() {
 
  return (
    <GlobalProvider>
        
        <div className="question_layout">
            <Question/>
        </div>
    </GlobalProvider> 
    
  );
}

export default App;
