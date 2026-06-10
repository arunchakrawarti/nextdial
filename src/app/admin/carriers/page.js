import CarrierTab from '@/components/pages/admin/carriers/CarrierTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <CarrierTab/>

        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
