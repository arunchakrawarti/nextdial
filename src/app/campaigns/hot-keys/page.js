import HotkeyTable from '@/components/pages/campaigns/hotkeys/HotkeyTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <HotkeyTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
