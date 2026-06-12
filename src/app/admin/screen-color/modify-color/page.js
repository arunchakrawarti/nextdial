import ModifyScreenColors from '@/components/pages/admin/screen-colors/ModifyColor'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<ModifyScreenColors/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
