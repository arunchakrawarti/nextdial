import SystemSetting from '@/components/pages/admin/system-settings/SystemSetting'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<SystemSetting/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
