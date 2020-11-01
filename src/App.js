import './App.css';
import Comments from './data/components/Comments/Comments';
import Posts from './data/components/Posts/Posts';
import Users from './data/components/Users/Users';

function App() {



  return (
    <div className="d-flex flex-row p-3">
    <Users/>
    <Posts/>
    <Comments/>
    </div>);
}

export default App;
