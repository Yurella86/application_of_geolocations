import { useEffect, useState } from 'react';

import './App.scss';
import Result from './result/result';
import Search from './search/search';


function App() {

  const [ipAddress, setIpAddress] = useState(false)

  return (
    <div className="wrapper">
      <div className="window">

        <header>
          <div className="icon"></div>
          <div className="text">Find My IP</div>
        </header>

        <Search
          callbackIp={ip => {
            setIpAddress(ip)
          }} />

        {!ipAddress ?
          <p>Enter IP and press “Search” to get geolocation data</p> :
          <p><Result ipAddress={ipAddress} /></p>}


      </div>
    </div>
  );
}

export default App;
