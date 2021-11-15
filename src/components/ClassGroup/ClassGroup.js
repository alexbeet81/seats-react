import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ClassGroup = () => {
  // API call to find the seating plan for this class group.
  const [seatingChart, setSeatingChart] = useState();
  const [classGroup, setClassGroup] = useState({});
  const [students, setStudents] = useState();

  useEffect(() => {
    axios.get(`/api/v1/class_groups/class-one.json`)
    .then(resp => {
      // console.log('I am in useEffect', resp.data.data);
      setClassGroup(resp.data.data);e
    })
    .catch(resp => console.log(resp))
  }, [])

  console.log(classGroup.attributes)

  // const classInformation = classGroup.map( item => {
  //   console.log(item)
  //   if (!item) {
  //     return (
  //       <div>
  //         hello
  //       </div>
  //     )
  //   }
  // })

  return (
    <div>
      {/* <h1>{classGroup.attributes.name}</h1> */}
    </div>
  )
}

export default ClassGroup