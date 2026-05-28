import AddNewCampaign from '@/components/pages/campaigns/campaigns-main/AddNewCampaign'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <AddNewCampaign/>
      </MainLayout>
    </div>
  )
}

export default page
