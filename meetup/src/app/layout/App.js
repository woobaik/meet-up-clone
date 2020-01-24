import React, { Fragment } from 'react';
import Navbar from '../layout/navigation/NavBar'
import MainHeader from '../layout/header/Header'
import EventDashBoard from '../features/event/EventDashBoard/EventDashBoard'
import EventDetail from '../features/event/EventDetail/EventDetailPage'
import PeopleDashboard from '../features/user/PeopleDashboard/PeopleDashboard'
import UserDetailPage from '../features/user/userDetail/UserDetailPage'
import SettingsDashboard from '../features/Settings/SettingDashboard'
import EventForm from '../features//event/EventDashBoard/EventForm'

import { Route } from 'react-router-dom'

import Homepage from '../features/home/HomePage'

import './App.css';

function App() {
  return (
    <div className="App">

      <Route path="/" component={Homepage} exact />
      <Route path='/(.+)' render={() => (

        <Fragment>
          <Navbar />
          <MainHeader />
          <Route path='/events' component={EventDashBoard} />
          <Route path='/events/:id' component={EventDetail} />
          <Route path='/people' component={PeopleDashboard} />
          <Route path='/people/:id' component={UserDetailPage} />
          <Route path='/settings' component={SettingsDashboard} />
          <Route path='/createEvent' component={EventForm} />
        </Fragment>
      )
      } />


    </div>
  );
}

export default App;
