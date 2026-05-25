import TimeSheet from '@/components/pages/users/time-sheet/TimeSheet'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <TimeSheet/>
      </MainLayout>
    </div>
  )
}

export default page
