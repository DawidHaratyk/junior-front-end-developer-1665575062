import React from 'react'
import { useTasks } from '../../contexts/TasksContext'

function MessageBox({
  businessContextIndex,
  author,
  created_at,
  title,
  content,
  status,
}) {
  const { tasks, setTasks, currentTaskIndex } = useTasks()

  const handleSwitchMessage = (businessContextIndex) => {
    tasks[currentTaskIndex].businessContexts.forEach((businessContext) => {
      if (businessContext.status === 'current') {
        businessContext.status = 'old'
      }
    })

    tasks[currentTaskIndex].businessContexts[businessContextIndex].status =
      'current'
    setTasks((oldTasks) => [...oldTasks])
  }

  switch (status) {
    case 'new':
      return (
        <div
          className="message message__shadow-light"
          onClick={() => handleSwitchMessage(businessContextIndex)}
        >
          <div className="message__author-container">
            <span className="message__text message__status">new</span>
            <span className="message__text">
              {author}
              <span className="message__text-dot">•</span>
              {created_at.toLocaleString('en-GB', { month: 'short' }) + ' '}
              {created_at.getDate()}
            </span>
          </div>
          <h5 className="message__title message__active">{title}</h5>
          <p className="message__description">{content[0]}</p>
        </div>
      )
    case 'current':
      return (
        <div
          className="message message__shadow"
          onClick={() => handleSwitchMessage(businessContextIndex)}
        >
          <div className="message__author-container">
            <span className="message__text">
              {author}
              <span className="message__text-dot">•</span>
              {created_at.toLocaleString('en-GB', { month: 'short' }) + ' '}
              {created_at.getDate()}
            </span>
          </div>
          <h5 className="message__title">{title}</h5>
          <p className="message__description">{content[0]}</p>
        </div>
      )
    case 'old':
      return (
        <div
          className="message message__no-background"
          onClick={() => handleSwitchMessage(businessContextIndex)}
        >
          <div className="message__author-container">
            <span className="message__text">
              {author}
              <span className="message__text-dot">•</span>
              {created_at.toLocaleString('en-GB', { month: 'short' }) + ' '}
              {created_at.getDate()}
            </span>
          </div>
          <h5 className="message__title">{title}</h5>
          <p className="message__description">{content[0]}</p>
        </div>
      )
    default:
      console.log('The status is incorrect')
  }
}

export default MessageBox
