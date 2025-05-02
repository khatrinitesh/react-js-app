import React from "react";
import { useAvatarStore } from "../store/useAvatarStore";
import { avatarUrls } from './../constants/constants';
import { motion } from 'framer-motion';

const AvatarImgComp = () => {
  return (
    <>
     <AvatarPreview/>
     <AvatarGallery/>
    </>
  )
};

export default AvatarImgComp;

const AvatarPreview = () => {
    const {selectedAvatar} = useAvatarStore();

    return selectedAvatar ? (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <h3>Selected Avatar <br/>{selectedAvatar.label}</h3>
        <img
          src={selectedAvatar.imgurl}
          alt="Selected Avatar"
          style={{ width: 100, height: 100, borderRadius: '50%' }}
        />
      </div>
    )
    :
    null;
}

const AvatarGallery = () => {
  const { selectedAvatar, setSelectedAvatar } = useAvatarStore();
  return (
    <>
      <div className="avatar-gallery">
      {avatarUrls.map((url, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <h4>{url.label}</h4>
          <motion.img
            src={url.imgurl}
            alt={`Avatar ${index}`}
            className={`avatar ${
              selectedAvatar?.imgurl === url.imgurl ? "selected" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedAvatar(url)}
          />
        </div>
      ))}
    </div>
    </>
  );
};
