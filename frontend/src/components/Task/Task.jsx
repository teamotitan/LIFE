import React from 'react'
import './Task.css'

const Task = ({challenge, days, image}) => {
  return (
    <div className='Task'>
      <h2 className='Task-title'>{challenge}</h2>
      <h2>challenge</h2>
      <hr/>
      <p className="Task-duration">Number of days left: {days}</p>
      <p className="reward">Rewards: {image}</p>
      <button>View Task</button>
    </div>
  )
}

export default Task
