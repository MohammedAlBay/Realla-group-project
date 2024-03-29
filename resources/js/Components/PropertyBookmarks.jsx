import React from 'react';
import 'boxicons/css/boxicons.min.css';

const PropertyBookmarks = ({ bookmarks, removeBookmark }) => {
  return (
    <div>
      <h2>Bookmarked Properties</h2>
      <ul>
        {bookmarks.map(bookmark => (
          <li key={bookmark.id}>
            <div>
              <img src={bookmark.property.image_path} alt={bookmark.property.location} />
              <h3>{bookmark.property.location}</h3>
              <p>{bookmark.property.for_rent ? 'For Rent' : 'For Sale'}</p>
              <button onClick={() => removeBookmark(bookmark.id)}><i class='bx bx-heart' style={{ color:'#ff0000' }}></i></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyBookmarks;