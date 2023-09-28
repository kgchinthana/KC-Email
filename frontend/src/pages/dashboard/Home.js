import React from 'react';
import './styles/home.css';
import Topbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import Featured from './components/Featured';
import Chart from './components/Chart';
import Dashboard from './services/Dashbord';
import MessageService from './services/MessageService';
import MessageHistory from './services/MessageHistory';

const Home = () => {
  return (
    <div className='home'>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <div className="widgets">
          <Widget type="birthday" />
          <Widget type="user" />
          <Widget type="count" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Progress)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
