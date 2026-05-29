import LeadRecycle from '@/components/pages/campaigns/lead-recycle/LeadRecycle'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <LeadRecycle/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
