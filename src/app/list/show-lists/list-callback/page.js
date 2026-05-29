import ListCallbackTable from '@/components/pages/lists/show-list/ListCallbackTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <ListCallbackTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
