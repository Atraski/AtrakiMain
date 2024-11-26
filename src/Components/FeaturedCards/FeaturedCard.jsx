function FeaturedCard() {
  return (
    <div className="w-full min-h-screen py-20 rounded-b-3xl"> {/* Updated radius class */}
   
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="card w-1/2 h-[70vh] bg-pink-200 rounded-xl">
          At Atraski, we believe in the power of authentic connections and the ability of compelling storytelling to elevate brands. Our team of seasoned professionals brings a wealth of experience and a fresh perspective to every project. Whether youre a startup looking to establish your online presence or an established brand seeking a marketing revamp, Atraski is here to tailor solutions that resonate with your audience and drive measurable results. Our commitment to excellence, creativity, and strategic thinking sets us apart, making Atraski the go-to choice for businesses seeking to make a lasting impact in the market
          </div>
          <div className="card w-1/2 h-[70vh] bg-pink-200 rounded-xl"></div>
        </div>
      
      </div>
    </div>
  );
}

export default FeaturedCard;
