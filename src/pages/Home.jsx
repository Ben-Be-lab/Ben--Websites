import React from 'react'

const Home = () => {
  return (
   <div
className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80')" }}
>
<div className="absolute inset-0 bg-black bg-opacity-50"></div>


<div className="relative z-10 text-center px-4">
<h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
<p className="text-xl max-w-2xl mx-auto text-gray-200">
Hello
</p>
</div>
</div>
  )
}

export default Home

