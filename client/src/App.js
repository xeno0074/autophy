import React from 'react';
import logo from './logo.svg';
import './App.css';

import ToggleSwitch from './utils/UtilsSwitches';

function getBuildPage() {
  let header = <h1>Build on 185 server</h1>

  return <div>
    {header}
    <ToggleSwitch switchName="Host-Sim build"></ToggleSwitch>
    <ToggleSwitch switchName="EBB build"></ToggleSwitch>
    <ToggleSwitch switchName="CTC build"></ToggleSwitch>
    <ToggleSwitch switchName="SAM build"></ToggleSwitch>
  </div>;
}

function App() {

  const buildPage = getBuildPage();

  return buildPage;

  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/server-loaded")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         {!data ? "Loading Autophy..." : data}
  //       </p>
  //     </header>
  //   </div>
  // );


}

export default App;
