import VoicemailTab from '@/components/pages/admin/voicemail/VoicemailTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<VoicemailTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
