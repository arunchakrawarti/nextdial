import ModifyUser from '@/components/pages/users/show-users/ModifyUser'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <ModifyUser/>
      </MainLayout>
    </div>
  )
}

export default page
