import Statuses from '@/components/pages/campaigns/statuses/Statuses'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Statuses/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
