import CopyUser from '@/components/pages/users/copy-user/CopyUser'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <CopyUser/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
