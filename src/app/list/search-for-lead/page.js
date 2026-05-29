import SearchLeadsForm from '@/components/pages/lists/search-for-lead/SearchLeadsForm'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <SearchLeadsForm/>
      </MainLayout>
    </div>
  )
}

export default page
