import React from 'react'

const formData = [
  {
    name: 'Name',
    field: 'name'
  },
  {
    name: 'Image',
    field: 'image'
  },
  {
    name: 'Price',
    field: 'price'
  },
  {
    name: 'Quantity',
    field: 'quantity'
  },
  {
    name: 'About',
    field: 'about'
  },
]
const UpdatePage = () => {
  return (
    <div>
      <div className="shadow-xl p-8 mt-4">
        <div className="text-2xl font-bold">ADD</div>
        <div className="divider"></div>
        <div className="grid grid-cols-2 gap-2">
          {formData.map((form, index) => (
            <label key={index} className="form-control w-full">
              <div className="label">
                <span className="label-text">{form.name}</span>
              </div>
              <input type="text" name={form.field} placeholder="Type here" className="input input-bordered w-full" />
            </label>
          ))}
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-2 gap-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Status</span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>choose one</option>
              <option value='open'>Open</option>
              <option value='close'>Close</option>
            </select>
          </label>
        </div>
        <div className='flex justify-end mt-4'>
          <button className='btn btn-ghost'>Back</button>
          <button className='btn btn-neutral'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default UpdatePage