import React from 'react'
import { tasksData } from '../../data/data'
import image from '../../assets/user2.png'
import UserImage from '../UserImage/UserImage'
import { useTasks } from '../../contexts/TasksContext'

function MessageContentView() {
  const { currentTaskIndex } = useTasks()

  const currentBusinessContexts = tasksData[currentTaskIndex].businessContexts

  const activeBusinessContextIndex = currentBusinessContexts.findIndex(
    (task) => task.status === 'current'
  )

  const currentBusinessContextIndex =
    activeBusinessContextIndex !== -1 ? activeBusinessContextIndex : 1

  const { title, author, created_at, content } =
    currentBusinessContexts[currentBusinessContextIndex]

  console.log(created_at.toDateString(), new Date().toDateString())

  return (
    <div className="message-content">
      <h2 className="message-content__headline">{title}</h2>
      <div className="content">
        <div className="content__image-container">
          <UserImage image={image} />
        </div>
        <div>
          <div className="content__info">
            <span className="content__headline">{author}</span>
            <span className="content__text">
              <span className="content__text-dot">•</span>
              <span className="content__text">
                {created_at.toDateString() === new Date().toDateString() &&
                  'Today, '}
              </span>
              <span className="content__text">
                {created_at.getDate()}th{' '}
                {created_at.toLocaleString('en-GB', { month: 'long' })}
              </span>
              <span className="content__text-dot">•</span>
              <span className="content__text">
                {created_at.getHours()}:{created_at.getMinutes()}
              </span>
            </span>
          </div>
          <p className="content__description">{content[0]}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageContentView
