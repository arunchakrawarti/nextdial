import ModifyMusic from '@/components/pages/admin/music-hold/ModifyMusic'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <ModifyMusic/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
