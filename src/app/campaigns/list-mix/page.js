import ListMixTable from '@/components/pages/campaigns/list-mix/ListMixTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>


        <ListMixTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
