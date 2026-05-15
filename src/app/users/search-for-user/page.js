import SearchForUser from '@/components/pages/users/search-for-user/SearchForUser'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <SearchForUser/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
