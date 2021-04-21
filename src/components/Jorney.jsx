import GalleryItem from "./GalleryItem";

export default function Jorney() {
  const images =[{header:"Santorini, Greece",image:"//images01.nicepage.io/28/58/2858f3748a025304669419b5dbd89dd3.jpeg"},{header:"Vernazza, Italy",image:"//images01.nicepage.io/9e/af/9eaf6a4d06c28cd9596d0b792f4780b5.jpeg"},{header:"San Francisco",image:"//images01.nicepage.io/2f/c9/2fc963db2b8f554519a2b21cc60d75a3.jpeg"},{header:"Navagio, Greece",image:"//images01.nicepage.io/ef/2a/ef2a13068362a84ceee3efa5eaab583b.jpeg"},{header:"Ao Nang, Thailand",image:"//images01.nicepage.io/29/8d/298d0a5cd8893ec3a947289a7347c9f0.jpeg"},{header:"Phi Phi Islands, Thailand",image:"//images01.nicepage.io/6e/8c/6e8c81f6a006352a225d163d742b148c.jpeg"}];
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
