import logo from './logo.svg';
import {useDispatch} from 'react-redux'
import { fetchGallery} from './store/gallery/slice'
import './App.css';
import Routes from './routes/routes'

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
