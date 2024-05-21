// GalleryItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ gallery }) => (
 <div key={gallery.id} className="gallery">
    <h3>{gallery.name}</h3>
    <div className="gallery-image">
      <Link to={`/gallery/${gallery._id}`}>
        <img src={gallery.image.url} alt={gallery.name} loading="lazy"/>
      </Link>
    </div>
    <div className="gallery-details">
      <span>{gallery.content}</span>
      <button>Love</button>
      <button>Like</button>
      <button>Share</button>
    </div>
 </div>
);

export default GalleryItem;
