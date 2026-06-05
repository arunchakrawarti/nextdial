import UserGroupTable from '@/components/pages/user-group/show-user-group/UserGroupTable'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <UserGroupTable/>
      </MainLayout>
    </div>
  )
}

export default page
