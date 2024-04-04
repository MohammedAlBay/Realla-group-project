import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import { Link } from '@inertiajs/react';

const ProfileEdit = () => {
  const [name, setName] = useState("Alvert Flore");
  const [address, setAddress] = useState("0000 Gallifry Lane, Galaxy 0000");
  const [email, setEmail] = useState("example@example.com");
  const [phone, setPhone] = useState("0123 456 789");
  const [avatar, setAvatar] = useState(""); // Store avatar data

  const saveChanges = async () => {
    try {
      // Perform API call to update user data
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          address: address,
          email: email,
          phone: phone,
        }),
      });

      if (response.ok) {
        console.log("Changes saved successfully!");
      } else {
        console.error("Failed to save changes");
      }
    } catch (error) {
      console.error("An error occurred while saving changes:", error);
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result); // Store avatar data in state
      };
      reader.readAsDataURL(file);
    }
  };

  // Save avatar data to local storage
  // This code runs when the avatar state changes
  // You can modify this to store data in backend server instead
  useEffect(() => {
    if (avatar) {
      localStorage.setItem('avatar', avatar);
    }
  }, [avatar]);

  return (
    <div className="container">
      <div className="edit-header">
        <Link href="/profile" className="back-link">&#8249; Back to Profile</Link>
        <h2 className="edit-heading">Edit Profile</h2>
      </div>
      <div className="edit-section">
        <div className="edit-avatar">
          {/* Display current avatar */}
          {avatar && <img src={avatar} alt="avatar of the user" />}
          {/* Input for uploading new avatar */}
          <input type="file" onChange={handleAvatarChange} />
        </div>
        <div className="edit-info">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <button className="save-button" onClick={saveChanges}>Save Changes</button>
    </div>
  );
}

export default ProfileEdit;