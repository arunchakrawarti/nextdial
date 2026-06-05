import GroupHourlyStats from '@/components/pages/user-group/group-hourly-report/GroupHourlyStats'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <GroupHourlyStats/>
      </MainLayout>
    </div>
  )
}

export default page
