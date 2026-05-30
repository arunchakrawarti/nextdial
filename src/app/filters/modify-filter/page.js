import ModifyFilterForm from '@/components/pages/filters/show-filters/ModifyFilterForm'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <ModifyFilterForm/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
