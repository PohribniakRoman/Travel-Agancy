export default function GalleryItem({header,link}) {
    return <div className="jorney__gallery--card">
        <div style={{backgroundImage:`url(${link})`}}></div>
        <h3><i><i className="fas fa-map-marker-alt"></i></i><span>{header}</span></h3>
    </div>
}