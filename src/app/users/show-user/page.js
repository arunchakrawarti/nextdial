import UserTable from '@/components/pages/users/show-users/UserTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading...</div>}>
        <UserTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
