import ModifySettingsContainer from '@/components/pages/admin/settings-containers/ModifySettingsContainer'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
            <ModifySettingsContainer/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
