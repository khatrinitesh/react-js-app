import React from 'react';

const CustomApp = () => {

    const [isLogo1, setIsLogo1] = React.useState(true);

    const handleToggleLogo = () => {
        setIsLogo1(prevState => !prevState)
    }
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Conditional rendering for displaying different images */}
        {isLogo1 ? (<><img src="https://t4.ftcdn.net/jpg/05/64/99/95/360_F_564999540_XdTvqLGDpneB3v4ifz0SZgzxMOFmfoVo.jpg" alt="Logo 1" className="h-32 w-32 mx-auto mb-4" /></>) : (<><img src='https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg' alt="Logo 1" className="h-32 w-32 mx-auto mb-4" /></>)}
        </div>
        <button
          onClick={handleToggleLogo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Toggle Logo
        </button>
        </div>
    </div>
  )
}

export default CustomApp
