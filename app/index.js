import React from 'react'
import Navbar from '../components/Navbar'
import TabContent from '../components/TabContent'
import Home from '../components/Home'

export interface Tab {
  ref: string,
  title: string,
  imageTitle: string
}

const index = () => {
  return (
    <>
      <Navbar setActiveTab={setActiveTab}/>
      {activeTab ? (
      <TabContent activeTab={activeTab}></TabContent>
      ) : <Home/>}
    </>
  )
}

export default index
