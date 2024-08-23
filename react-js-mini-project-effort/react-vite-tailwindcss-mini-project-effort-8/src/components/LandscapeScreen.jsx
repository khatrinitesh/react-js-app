import React from 'react';

const LandscapeScreen = () => {
  return (
    <>
     <section className="landscape-screen fixed inset-0 z-[9999] hidden h-full w-full bg-texture-purple bg-cover p-5">
  <figure className=" flex h-full w-full flex-col items-center justify-center">
    <img className="mb-6 w-full max-w-[10rem]" src="https://static-cdn-24.prodn.app/milka-siwm-24/images/milka-logo.png" alt="milka logo"/>
    <figcaption className="font-heading text-3xl text-white">Best view in Portrait Mode</figcaption>
  </figure>
</section>
    </>
  );
}

export default LandscapeScreen;
