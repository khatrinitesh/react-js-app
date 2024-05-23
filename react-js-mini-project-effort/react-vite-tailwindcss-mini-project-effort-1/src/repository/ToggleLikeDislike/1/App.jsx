import React,{useState} from 'react'

const ToggleLikeDislikeApp = () => {
  return (
    <>
        <LikeDislikeToggle/> 
    </>
  )
}

export default ToggleLikeDislikeApp

const LikeDislikeToggle = () => {
    const [liked, setLiked] = useState(false);
  
    const handleToggle = () => {
      setLiked(!liked);
    };
  
    return (
      <div>
        <p>{liked ? 'You liked this!' : 'You disliked this!'}</p>
        <button onClick={handleToggle}>
          {liked ? 'Dislike' : 'Like'}
        </button>
      </div>
    );
  };
