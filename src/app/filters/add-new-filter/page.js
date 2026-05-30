import AddFilterForm from '@/components/pages/filters/add-new-filters/AddFilterForm'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddFilterForm/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
