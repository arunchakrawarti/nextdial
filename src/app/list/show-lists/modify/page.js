import ModufyInput from '@/components/pages/lists/show-list/ModufyInput'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>

       <ModufyInput/> 
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
