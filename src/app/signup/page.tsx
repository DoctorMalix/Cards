import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
 <div>
    <div className="flexmain  ">   
        <h1> Fill the Form and Signup of FREE</h1>
    </div>


    <div className="main">
<form className="grid grid-cols-[auto,1fr] items-center gap-y-6 gap-x-12">
  <label> Full Name </label>
  <input type="text" name="name" placeholder="Full Name" />
  <label> Email Address </label>
  <input type="email" name="email" placeholder="Email Address" />
  <button type="submit" className="col-start-2">Signup</button>
</form>
</div>

</div>






  )
}