import ScreenTab from '@/components/pages/admin/screen-labels/ScreenTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<ScreenTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
