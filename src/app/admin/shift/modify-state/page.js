import ModifyStateCallTimeForm from '@/components/pages/admin/shift/ModifyStateCallTimeForm'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <ModifyStateCallTimeForm/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
