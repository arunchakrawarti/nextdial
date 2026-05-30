import AdminChangeTable from '@/components/pages/report/AdminChangeTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AdminChangeTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
