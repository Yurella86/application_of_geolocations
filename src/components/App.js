import { useState } from 'react';

import './App.scss';
import Result from './result/result';
import Search from './search/search';


function App() {

  const [ipAddress, setIpAddress] = useState(false)

  return (<div>
    <div className="background">
      <div className="wrapper">
        <div className="header">
          <div className="icon"></div>
          <div className="text">Find My IP</div>
        </div>
        <div>
          <Search
            callbackIp={ip => {
              setIpAddress(ip)
            }} />

          <div className="content">
            {
              !ipAddress ?
                <div>Enter IP and press “Search” to get geolocation data</div> :
                <Result ipAddress={ipAddress} />}
          </div>
        </div>
      </div>
    </div>
  </div >
  )
}

export default App;
