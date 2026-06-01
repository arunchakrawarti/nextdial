import InboundDidListings from '@/components/pages/inbound/show-dids/InboundDidListings'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <InboundDidListings/>
      </MainLayout>
    </div>
  )
}

export default page
