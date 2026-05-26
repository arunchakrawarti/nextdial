import CampaignsTable from '@/components/pages/campaigns/campaigns-main/CampaignsTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
 <CampaignsTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
