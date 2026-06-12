import StatusGroupTab from '@/components/pages/admin/status-group/StatusGroupTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <StatusGroupTab/>

        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
