import UserStatus from '@/components/pages/users/user-status/UserStatus'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <UserStatus/>
      </MainLayout>
    </div>
  )
}

export default page
