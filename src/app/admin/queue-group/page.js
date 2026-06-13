import QueueTab from '@/components/pages/admin/queue-group/QueueTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<QueueTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
