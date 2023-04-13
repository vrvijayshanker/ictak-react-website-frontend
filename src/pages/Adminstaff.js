import React from 'react'

const Adminstaff = () => {
  return (
    <div>
      <div className='container d-flex flex-column mt-4 mb-4 text-center'>
        <div className='row'>
        <div className='col-2'>
            <span className=' d-flex justify-content-end'>
              <button className='btn btn-success w-100'>Add Staff</button>
            </span>
          </div>

          <div className='col-6'>
            <h5>Staff List & Details</h5>
          </div>          
        </div>
        
      </div>

      <table class="table mt-3">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Designation</th>
          <th scope="col">Department</th>
          <th scope="col">Joined on</th>
          <th scope="col">Operations</th>
        </tr>
        </thead>

        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default Adminstaff
