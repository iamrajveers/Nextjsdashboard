
"use client"

import React from 'react'

const Location = () => {
  return (
    
         <>

                  
               
<div class="max-w-7xl mx-auto p-6">
  <div class="border rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-6">Location</h2>
    <form class="space-y-4">
      
      {/* <  Row 1 > */}
      
      <div class="grid grid-cols-4 gap-4">
        <input type="text" placeholder="Full name" class="border rounded px-4 py-2 w-full" />
        <input type="text" placeholder="House no/ suit no" class="border rounded px-4 py-2 w-full" />
        <input type="text" placeholder="Street" class="border rounded px-4 py-2 w-full" />
        <input type="text" placeholder="City" class="border rounded px-4 py-2 w-full" />
      </div>

      {/* < Row 2 (file input included here) > */}

      <div class="grid grid-cols-4 gap-4">
        <input type="text" placeholder="State" class="border rounded px-4 py-2 w-full" />
        <input type="text" placeholder="Zip" class="border rounded px-4 py-2 w-full" />
        <input type="text" placeholder="Country" class="border rounded px-4 py-2 w-full" />
        <input type="file" class="border rounded px-4 py-2 w-full file:mr-2 file:py-1 file:px-3 file:border-0 file:bg-gray-100" />
      </div>

      {/*  Row 3: Submit Button  */}
      <div>
        <button type="submit" class="bg-black text-white rounded px-8 py-3 w-full sm:w-40">
          Submit
        </button>
      </div>

    </form>
  </div>
</div>




         </>


  )
}

export default Location



// <div class="max-w-7xl mx-auto p-6">
//   <div class="border rounded-lg p-6">
//     <h2 class="text-xl font-semibold mb-6">Location</h2>
//     <form class="grid grid-cols-4 gap-4 items-start">
    
//     {/* row 1 */}
//       <input type="text" placeholder="Full name" class="col-span-1 border rounded px-4 py-2 w-full" />
//       <input type="text" placeholder="House no/ suit no" class="col-span-1 border rounded px-4 py-2 w-full" />
//       <input type="text" placeholder="Street" class="col-span-1 border rounded px-4 py-2 w-full" />
//       <input type="text" placeholder="City" class="col-span-1 border rounded px-4 py-2 w-full" />

//       {/* row2 */}
      
//       <input type="text" placeholder="State" class="col-span-1 border rounded px-4 py-2 w-full" />
//       <input type="text" placeholder="Zip" class="col-span-1 border rounded px-4 py-2 w-full" />
//       <input type="text" placeholder="Country" class="col-span-1 border rounded px-4 py-2 w-full" />
//       <input type="file" class="col-span-1 border rounded px-4 py-2 w-full file:mr-2 file:py-1 file:px-3 file:border-0 file:bg-gray-100" />


//       {/* Submit button aligned to right and spans 2 rows  */}

//       <div class="row-span-2 col-start-5 flex items-center justify-center">
//         <button type="submit" class="bg-black text-white rounded px-6 py-3 w-full h-full font-medium">
//           Submit
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
