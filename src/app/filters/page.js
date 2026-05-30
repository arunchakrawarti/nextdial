import LeadFilterList from '@/components/pages/filters/FilterTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <LeadFilterList/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
