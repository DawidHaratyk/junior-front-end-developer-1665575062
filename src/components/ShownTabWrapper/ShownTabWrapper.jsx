import React from 'react'
import { useState } from 'react'
import tabIcon from '../../assets/tab.png'
import CardWrapper from '../CardWrapper/CardWrapper'
import MessageContentView from '../MessageContentView/MessageContentView'
import MessagesListView from '../MessagesListView/MessagesListView'
import Tab from '../Tab/Tab'

const shownTabWrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '16px',
  width: '100%',
}

function ShownTabWrapper() {
  // const [currentTab, setCurrentTab] = useState('Business Context')
  // in the future there is an option to add tabs and set current one
  const [currentTab] = useState('Business Context')

  return (
    <CardWrapper styles={shownTabWrapperStyles}>
      <div className="tabs">
        <Tab title={currentTab} icon={tabIcon} currentTab={currentTab} />
      </div>
      <section className="tab-content">
        <MessagesListView />
        <MessageContentView />
      </section>
    </CardWrapper>
  )
}

export default ShownTabWrapper
