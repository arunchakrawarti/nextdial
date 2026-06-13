import AudioStore from '@/components/pages/admin/audio-store/AudioStore'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AudioStore/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
