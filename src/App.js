import './App.css';
import Users from './data/components/users/Users';
import {ApiService} from './data/services/apiService';

function App() {

  let api = new ApiService();
  console.log(api);

  return (
    <div>
    <Users/>
    </div>
  );
}

export default App;
