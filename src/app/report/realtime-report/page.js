import MainrealTime from '@/components/pages/report/realtime-report/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainrealTime/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
