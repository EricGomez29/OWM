import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ipInfo, setIpInfo] = useState('');

  useEffect(() => {
    getIpInfo();
  }, []);

  const getIpInfo = async () => {
    try {
      const response = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=8c7356483ea445aab475d2ff5543e337');
      setIpInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">

      <div className="header">

      </div>
      
      <div className="body">
        <h1>Hola Mundo!</h1><br/>
        <span>Localidad: {ipInfo && ipInfo.city ? ipInfo.city : 'No localizado'}</span><br/>
        <span>Ciudad: {ipInfo && ipInfo.region ? ipInfo.region : 'No localizado'}</span><br/>
        <span>País: {ipInfo && ipInfo.country ? ipInfo.country : 'No localizado'}</span>
      </div>

      <div className="footer">

      </div>
    </div>
  );
}

export default App;
