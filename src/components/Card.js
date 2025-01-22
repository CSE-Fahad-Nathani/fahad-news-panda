import React from 'react'
import './Card.css';
import pandaImage from '../images/panda.jpeg';



export default function Card({key, title, description, url, imageUrl}) {
  return (
    <div className='cardBody ' key={key}>
        <div className="card margin20" style={{width: '18rem', height: '29rem'}}>
            <img src={imageUrl} className="card-img-top cardIMG" alt={pandaImage}/>
            <div className="card-body">
                <h5 className="card-title">
                    {title.length > 50 ? `${title.slice(0, 50)}...` : title}
                </h5>
                <p className="card-text" style={{fontSize: '14px', textAlign: 'justify'}}>
                    {description.length > 150 ? `${description.slice(0, 150)}...` : description}
                </p>
                <a href={url} className="btn btn-outline-primary" 
                style={{
                    padding: '5px 25px', 
                    fontWeight: 700,
                    position: 'absolute',
                    left: '15px', 
                    bottom: '15px'
                }}
                >More...</a>
            </div>
        </div>
    </div>
  )
}
