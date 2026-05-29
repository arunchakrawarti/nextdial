import AdminChangeLogTable from '@/components/pages/lists/show-list/AdminChangeLogTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <AdminChangeLogTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
