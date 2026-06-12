import ConferencesTab from '@/components/pages/admin/conferences/ConferencesTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
         <ConferencesTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
