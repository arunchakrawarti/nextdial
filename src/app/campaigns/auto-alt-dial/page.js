import AutoAltTable from '@/components/pages/campaigns/auto-alt-dial/AutoAltTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AutoAltTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
