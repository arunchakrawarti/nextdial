import MainUser from '@/components/pages/users/user-stats/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainUser/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
