import CidTab from '@/components/pages/admin/cid-group/CidTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<CidTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
