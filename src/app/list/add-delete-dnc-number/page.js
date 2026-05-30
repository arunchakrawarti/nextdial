import DncManagement from '@/components/pages/lists/add-delete-dnc-number/DncManagement'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <DncManagement/>
      </MainLayout>
    </div>
  )
}

export default page
