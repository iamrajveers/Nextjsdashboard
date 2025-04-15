"use client";
import React from 'react'

const Dashboard = () => {
  return (

  <>
  
  
  <div class="p-6 bg-white rounded-md shadow border border-gray-100">
  {/* <!-- Top Controls --> */}
  <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
    {/* <!-- Filter --> */}
    <div class="mb-2 md:mb-0">
      <label class="block text-sm text-gray-600 font-medium mb-1">Filter by Status</label>
      <select class="text-sm border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring focus:border-blue-400">
        <option>All</option>
      </select>
    </div>
{/* 
    <!-- Search --> */}
    <div class="flex items-center space-x-2">
      <label class="text-sm font-medium text-gray-600">Search:</label>
      <input
        type="text"
        placeholder="Search here"
        class="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring focus:border-blue-400"
      />
    </div>
  </div>

  {/* <!-- Top Pagination Info --> */}

  <div class="flex flex-col md:flex-row md:items-center justify-between mb-2 text-sm text-gray-500">
    <div class="flex items-center space-x-2 mb-2 md:mb-0">
      <label>Show</label>
      <select class="border-gray-300 rounded px-2 py-1 focus:outline-none">
        <option>25</option>
      </select>
      <span>entries</span>
    </div>
    <div>Showing 0 to 0 of 0 entries</div>
  </div>

  {/* <!-- Table --> */}
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 text-sm text-left">
      <thead class="bg-gray-50 text-gray-600">
        <tr>
          <th class="px-4 py-2 cursor-pointer">Name</th>
          <th class="px-4 py-2 cursor-pointer">Business Name</th>
          <th class="px-4 py-2 cursor-pointer">Status</th>
          <th class="px-4 py-2 cursor-pointer">Total Open Tasks</th>
          <th class="px-4 py-2 cursor-pointer">Due Date</th>
          <th class="px-4 py-2 cursor-pointer">Budget</th>
          <th class="px-4 py-2 cursor-pointer">Progress</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="7" class="text-center py-6 text-gray-500">No data available in table</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* <!-- Bottom Pagination --> */}
  <div class="flex flex-col md:flex-row md:items-center justify-between mt-4 text-sm text-gray-500">
    <div class="flex items-center space-x-2 mb-2 md:mb-0">
      <label>Show</label>
      <select class="border-gray-300 rounded px-2 py-1 focus:outline-none">
        <option>25</option>
        <option>50</option>
        <option>75</option>
        <option>100</option>
      </select>
      <span>entries</span>
    </div>
    <div>Showing 0 to 0 of 0 entries</div>
    <div class="space-x-4">
      <button class="text-blue-500 hover:underline">Previous</button>
      <button class="text-blue-500 hover:underline">Next</button>
    </div>
  </div>
</div>

  
  
  
  </>

    


  )
}

export default Dashboard


