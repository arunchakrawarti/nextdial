import SystemTab from '@/components/pages/admin/system-statuses/SystemTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<SystemTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
