import ShowUserTable from '@/components/pages/user-group/show-user-group/ShowUserTable'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <ShowUserTable/>
      </MainLayout>
    </div>
  )
}

export default page
