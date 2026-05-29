import PauseCodeTable from '@/components/pages/campaigns/pause-codes/PauseCodeTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <PauseCodeTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
