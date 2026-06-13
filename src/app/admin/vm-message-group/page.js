import VmMessageTab from '@/components/pages/admin/vm-message-group/VmMessageTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
            <VmMessageTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
