import ShowScriptsTable from '@/components/pages/scripts/show-scripts/ShowScriptsTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <ShowScriptsTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
