import TemplateTab from '@/components/pages/admin/templates/TemplateTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <TemplateTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
