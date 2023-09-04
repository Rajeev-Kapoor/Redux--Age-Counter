
import './App.css';
import CCounter from './Component/CCounter';
import { Provider } from 'react-redux'
import store from './MultiReduxFolder/MCstore';
import HookCounter from './Component/HookCounter';
import Mage from './Component/Mage'
// here we are connecting provider to store
// we have imported both and comnnected and made it global  
function App() {
  return (
    <div className="App">
      <p> Redux used to Adjust the Age</p>
      <Provider store = {store}>

      {/* <CCounter/>
      <HookCounter/> */}
      <Mage/>
      </Provider>
    </div>
  );
}

export default App;
