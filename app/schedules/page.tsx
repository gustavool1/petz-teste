'use client'

import React from 'react'
import { Modal, NavBar, NavigationHeader } from '../../components/components'
import { ModalType } from '../../components/modal/modal'

const Schedules = () => {
  return (
    <>
      <NavBar />
      <NavigationHeader />
      <div style={{ margin: '20px' }}>
        <Modal type={ModalType.error} day="" pokemonQuantity="2" time="" />
      </div>
    </>
  )
}

export default Schedules
