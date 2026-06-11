import ModifyServer from '@/components/pages/admin/servers/ModifyServer'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
            <ModifyServer/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
