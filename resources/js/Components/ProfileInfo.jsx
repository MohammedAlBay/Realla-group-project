import { React, useState }  from 'react';
import 'boxicons/css/boxicons.min.css';
import { Link } from '@inertiajs/react';

const ProfileInfo = ({ user }) => {
  const [avatar, setAvatar] = useState(user.avatar || "../images/profile/avatar2.png");
  const [coverPicture, setCoverPicture] = useState(user.coverPicture || "../images/profile/profile-cover-image2.png");
  const [joinedAgo, setJoinedAgo] = useState('');

  useEffect(() => {
    // Calculate the duration since the user joined
    const joinedDate = new Date(user.created_at);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - joinedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setJoinedAgo(`${diffDays} days ago`);
  }, [user.created_at]);

  function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "grid") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "grid";
    }
  }

  function handleAvatarChange(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      setAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleCoverPictureChange(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      setCoverPicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="profile-info-container">
      <div className="profile-section">
        <div className="cover-picture-container">
          <div className="cover-outer">
            <img src={coverPicture} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Cover image of the profile"/>
            <div className="cover-inner">
              <input id="coverPictureInput" type="file" name="coverPicture" accept="image/*" onChange={handleCoverPictureChange}/>
              <label><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2c2c2" strokeWidth="2"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg></label>
            </div>
          </div>
        </div>
        <div className="avatar-container">
          <div className="avatar-outer">
            <img src={avatar} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: "100%" }} alt="avatar of the user" />
            <div className="avatar-inner">
              <input className="avatarInput" type="file" name="avatar"  accept="image/*" onChange={handleAvatarChange}/>
              <label><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg></label>
            </div>
          </div>
        </div>
        <div className="user-info">
          <div className="user-details">
            <h3 className="user-name">{user.name}</h3>
            <p className="timestamp">Joined {joinedAgo}</p>
          </div>
          <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>&#8226;&#8226;&#8226;</button>
            <div className="dropdown-content" id="myDropdown">
              <Link href="/profile-tenant/edit" className="profile-dropdown-links"><i className="bx bxs-edit-alt" style={{color:'#fdb514'}}></i>Edit Profile</Link>
              <Link href="/documents" className="profile-dropdown-links"><i className="bx bxs-file" style={{color:'#fdb514'}}></i>Documents</Link>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-address">
              <p><i className='bx bxs-map' style={{color:'#fdb514'}}></i>{user.address}</p>
              <small className="data-description">Address</small>
            </div>
            <div className="contact-mail">
              <p><i className='bx bxs-envelope' style={{color:'#fdb514'}}></i>{user.email}</p>
              <small className="data-description">Email</small>
            </div>
            <div className="contact-number">
              <p><i className='bx bxs-phone' style={{color:'#fdb514'}}></i>{user.phone}</p>
              <small className="data-description">Phone</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;