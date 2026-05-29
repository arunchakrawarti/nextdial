import AddNewCampaign from '@/components/pages/campaigns/campaigns-main/AddNewCampaign'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddNewCampaign/>
     </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
