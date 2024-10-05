import React from 'react';

import MainComponent from './Mycomponent';
import './styles/App.css';
import './styles/fonts/Font.css';
import axios from 'axios';

const App() = () => {
  const [data, SetData] = UseState("");
  useEffect(() => {
    axios.get('/demo/api/data')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, []);
  return <MainComponent></MainComponent>;
};

export default App;

