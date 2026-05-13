"use client"
import BasicTable from '@/components/common/BasicTable';
import StatCard from '@/components/molecules/StatCard';
import React from 'react'

const Mainhome = () => {
    const stats = [
    { title: "Agents Logged In", value: 0 },
    { title: "Agents In Calls", value: 1 },
    { title: "Active Calls", value: 0 },
    { title: "Calls Ringing", value: 0 },
  ];


  const columns = [
    {
      label: "Records",
      key: "recordName",
      render: (value) => (
        <span className="text-purple-700 font-medium">{value}</span>
      ),
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Inactive",
      key: "inactive",
    },
    {
      label: "Total",
      key: "total",
    },
  ];

  const data = [
    { recordName: "Users:", active: 8, inactive: 2, total: 10 },
    { recordName: "Campaigns:", active: 1, inactive: 0, total: 1 },
    { recordName: "Lists:", active: 1, inactive: 2, total: 3 },
    { recordName: "In-Groups:", active: 3, inactive: 0, total: 3 },
    { recordName: "DIDs:", active: 2, inactive: 0, total: 2 },
  ];
  return (
    <div>
      <h1 className='text-black font-semibold text-2xl font-lexend'>System Summary:</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {stats.map((item, index) => (
          <StatCard key={index} title={item.title} value={item.value} />
        ))}
      </div>
      <div className="mt-5">
      <BasicTable 
        columns={columns} 
        data={data}
        pagination={true}
        pageSize={10}
        wrapperClassName="rounded-xl shadow-lg border-none"
      />
    </div>
    </div>
  )
}

export default Mainhome
