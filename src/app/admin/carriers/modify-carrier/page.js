import ModifyCarrierForm from '@/components/pages/admin/carriers/ModifyCarrierForm'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
         <ModifyCarrierForm/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
