import AcCidTable from '@/components/pages/campaigns/ac-cid/AcCidTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AcCidTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
