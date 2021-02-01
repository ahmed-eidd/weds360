import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import { fetchGallery } from './store/gallery/slice';
import './App.css';
import Routes from './routes/routes';
import Layout from './components/Layout/Layout';

function App() {
  const dispatch = useDispatch();
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
