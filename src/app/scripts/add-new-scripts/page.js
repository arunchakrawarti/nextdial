import AddScriptForm from '@/components/pages/scripts/add-new-scripts/AddScriptForm'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddScriptForm/>

        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
