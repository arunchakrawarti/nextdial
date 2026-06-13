import MusicHoldTab from '@/components/pages/admin/music-hold/MusicHoldTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MusicHoldTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
