import AddNewUser from '@/components/pages/users/add-new-user/AddNewUser'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddNewUser/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
