import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const IconBtnApp = () => {
  return (
    <>
      <OptionToolbar/>
    </>
  )
}

export default IconBtnApp

const OptionToolbar = () => {
    const handleLike = () => {
        console.log('Liked!');
      };
    
      const handleComment = () => {
        console.log('Commented!');
      };
    
      const handleShare = () => {
        console.log('Shared!');
      };

      return(
        <>
        <IconButton icon={faHeart} onClick={handleLike}/>
        <IconButton icon={faComment} onClick={handleComment}/>
        <IconButton icon={faShare} onClick={handleShare}/>
        </>
      )
}

const IconButton = ({ icon, onClick }) => {
    return (
      <button className="icon-button" onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  };
