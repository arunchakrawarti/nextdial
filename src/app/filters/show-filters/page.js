import ShowFilterTable from '@/components/pages/filters/show-filters/ShowFilterTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <ShowFilterTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
