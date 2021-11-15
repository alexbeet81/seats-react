import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ClassGroups.css';
import './NewClassGroup';
import NewClassGroup from './NewClassGroup';

const ClassGroups = () => {
  const [classGroups, setClassGroups] = useState([])
  const [addClassForm, setAddClassFrom] = useState(false);

  useEffect(() => {
    // Get all of the class groups from api
    // update class groups in state
    // this API call needs to be for the users classes.
    axios.get('/api/v1/class_groups.json')
    .then( resp => {
      console.log(resp.data.data)
      setClassGroups(resp.data.data)
    })
    .catch( resp => console.log(resp))
  }, [classGroups.length])

  const classCard = classGroups.map( item => {
    console.log(item)
    return (
      <Link className="class_card__link" to={`/class_groups/${item.attributes.slug}`}>
        <div className="class_card">
          <div key={item.attributes.name}>Class Name: {item.attributes.name}</div>
          <h3>students: {item.relationships.students.data.length}</h3>
        </div>    
      </Link>
    )
  })

  const addNewClass = () => {
    setAddClassFrom(true);
  }

  const dissmissAddNewClassFrom = () => {
    setAddClassFrom(false);
  }

  return (
    <div className="background">
      {addClassForm && <NewClassGroup onDismiss={dissmissAddNewClassFrom}/> }
      <div className="class_card__container">
        {classCard}
        <div className="class_card__new" onClick={addNewClass}>
          <h3>+ add new class</h3>
        </div>
      </div>
    </div>
  )
}

export default ClassGroups