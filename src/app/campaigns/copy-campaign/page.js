import CopyCampaign from '@/components/pages/campaigns/campaigns-main/CopyCampaign'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <CopyCampaign/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
