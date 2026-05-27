import MainStatus from '@/components/pages/users/days-status/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <MainStatus/>
      </MainLayout>
    </div>
  )
}

export default page
