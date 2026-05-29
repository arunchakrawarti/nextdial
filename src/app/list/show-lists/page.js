import ListTable from '@/components/pages/lists/show-list/ListTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

        <ListTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
