
import ImageGallery from "./ImageGallery"
// import { VideoGallery } from "./VideoGallery"
import FullWidthImageSection from "./FullWidthSection"
// import WorkSlider from "../Work/WorkSlider"

export default function Gallery() {
  return (
    <div className="h-full bg-gradient-to-b from-purple-10 to-black">
      <FullWidthImageSection />
      <ImageGallery />
      {/* <WorkSlider></WorkSlider> */}
      {/* <VideoGallery /> */}
     
    </div>
  )
}
