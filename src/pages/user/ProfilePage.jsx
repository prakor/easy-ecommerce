import React, { useState, useEffect } from 'react'

const ProfilePage = () => {
  const [profileImageUrl, setProfileImageUrl] = useState('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [profileData, setProfileData] = useState({})

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target.result
        setProfileImageUrl(imageUrl)
        setProfileData({
          ...profileData,
          imageUrl: imageUrl
        }) 
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    })
  }
  const updateProfile = () => {
    localStorage.setItem('profile-data', JSON.stringify(profileData))
    alert('Profile updated successfully')
  }

  useEffect(() => {
    let profiledata = localStorage.getItem('profile-data')
    if (profiledata) {
      profiledata = JSON.parse(profiledata)
      setProfileImageUrl(profiledata.imageUrl)
      setEmail(profiledata.email)
      setName(profiledata.name)
    }
  }, []) 
  return (
    <>
      <div className="max-w-2xl mx-auto border border-slate-200 shadow-xl p-8 my-4">
        <div className="font-bold text-2xl">Your Profile</div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={profileImageUrl} />
              </div>
            </div>
            <input type="file" onChange={(e) => handleFileUpload(e)}/>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="text" value={email} name='email' onChange={handleChange} placeholder="Type here" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input type="text" value={name} name='name' onChange={handleChange} placeholder="Type here" className="input input-bordered w-full" />
          </label>
          <button onClick={updateProfile} className='btn btn-neutral w-full mt-4'>Update Profile</button>
        </div>
      </div>
    </>
  )
}

export default ProfilePage