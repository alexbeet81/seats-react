import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ClassGroup from './components/ClassGroup/ClassGroup';
import ClassGroups from './components/ClassGroups/ClassGroups';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" component={ClassGroups} />
      <Route exact path="/class_groups/:slug" component={ClassGroup} />
    </Routes>
  )
};

export default App