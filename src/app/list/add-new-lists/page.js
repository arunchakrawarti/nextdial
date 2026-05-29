import AddListForm from '@/components/pages/lists/add-new-list/AddListForm'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <AddListForm/>
      </MainLayout>
    </div>
  )
}

export default page
