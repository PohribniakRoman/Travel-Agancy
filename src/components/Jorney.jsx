import GalleryItem from "./GalleryItem";
import img1 from "../images/gallery1.jpg";
import img2 from "../images/gallery2.jpg";
import img3 from "../images/gallery3.jpg";
import img4 from "../images/gallery4.jpg";
import img5 from "../images/gallery5.jpg";
import img6 from "../images/gallery6.jpg";

export default function Jorney() {
  const images =[{header:"Santorini, Greece",image:img1},{header:"Vernazza, Italy",image:img2},{header:"San Francisco",image:img3},{header:"Navagio, Greece",image:img4},{header:"Ao Nang, Thailand",image:img5},{header:"Phi Phi Islands, Thailand",image:img6}];
  return (
    <section className="jorney">
      <div className="container">
      <h1 className="jorney__header">Start Your Jorney</h1>
      <p className="jorney__description">
        The most searched countries in March
      </p>
      <section className="jorney__gallery">
        {images.map(img=>{
          return <GalleryItem key={img.image} header={img.header} link={img.image} />
        })
          
        }
      </section>
      </div>
    </section>
  );
}
