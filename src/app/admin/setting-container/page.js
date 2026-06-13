import SettingTab from '@/components/pages/admin/settings-containers/SettingTab'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
<SettingTab/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
