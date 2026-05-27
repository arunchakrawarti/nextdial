import MainSummary from '@/components/pages/report/summary-report/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainSummary/>
      </MainLayout>
    </div>
  )
}

export default page
