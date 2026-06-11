import ServerTab from '@/components/pages/admin/servers/ServerTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
         <ServerTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
