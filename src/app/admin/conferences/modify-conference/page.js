import ModifyConference from '@/components/pages/admin/conferences/ModifyConference'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<ModifyConference/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
