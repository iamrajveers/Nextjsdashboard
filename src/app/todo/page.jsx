"use client";
import React from 'react'

const todo = () => {
  return (
   
    <>
    
    
    <div class="p-6 bg-white rounded-md shadow border border-gray-100">
  {/* <!-- Heading --> */}
  <h2 class="text-lg font-semibold text-gray-800 mb-4">To Do</h2>

  {/* <!-- Table --> */}
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 text-sm text-left">
      <thead class="text-gray-600 bg-gray-50">
        <tr>
          <th class="px-4 py-2">Task</th>
          <th class="px-4 py-2">Project</th>
          <th class="px-4 py-2">Start Date</th>
          <th class="px-4 py-2">Updated Date</th>
          <th class="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="5" class="text-center py-6 text-gray-500">Record not found</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    
    
    </>

  )}

export default todo