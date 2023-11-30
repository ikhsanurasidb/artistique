import ArtistsCarousel from "../../ui/artists-carousel"

export default function Main({  }) {
    return (
      <div className="mt-[10vh] bg-neutral">
        <h1 className="text-4xl text-center text-base-200 pt-8">
          Our Artists
        </h1>
        <div className="">
          <ArtistsCarousel isColorBgLight={true}/>
          <ArtistsCarousel isColorBgLight={true}/>
          <ArtistsCarousel isColorBgLight={true}/>
          <ArtistsCarousel isColorBgLight={true}/>
          <ArtistsCarousel isColorBgLight={true}/> 
          <ArtistsCarousel isColorBgLight={true}/>
          <ArtistsCarousel isColorBgLight={true}/>
          <ArtistsCarousel isColorBgLight={true}/>
        </div>
      </div>
    );
  }