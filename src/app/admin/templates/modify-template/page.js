import ModifyTemplate from '@/components/pages/admin/templates/ModifyTemplate'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
            <ModifyTemplate/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
