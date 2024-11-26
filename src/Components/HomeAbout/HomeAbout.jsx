

function HomeAbout() {
  return (
    <div className="w-full min-h-screen bg-amber-300 rounded-t-3xl text-black" >
        <h1 className="text-[4vh] leading-[4.5vh] tracking-tight capitalize font-semibold "> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam, quas! Eum, fuga.</h1>

     <div className=" flex gap-5 border-t-[3px] border-amber-600 w-full h-full">
     <div className="w-1/2  pt-20 mt-10">
         <h1 className="text-6xl">About Us</h1>
         <button className="px-10 py-6 bg-zinc-900 rounded-full text-white flex items-center uppercase gap-6">know more 
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
        </div>

        <div className="w-1/2 bg-amber-700 rounded-3xl">
        </div>
     </div>

      

      
        
    </div>
  )
}

export default HomeAbout
