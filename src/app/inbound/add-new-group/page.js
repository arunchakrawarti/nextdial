import AddInboundGroupForm from '@/components/pages/inbound/add-new-group/AddInboundGroupForm'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <AddInboundGroupForm/>
      </MainLayout>
    </div>
  )
}

export default page
