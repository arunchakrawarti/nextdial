import ScreenColorTab from '@/components/pages/admin/screen-colors/ScreenColorTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<ScreenColorTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
