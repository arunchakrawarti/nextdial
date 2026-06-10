import PhoneTab from '@/components/pages/admin/phones/PhoneTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <PhoneTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
