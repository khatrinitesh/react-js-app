import React from "react";
import PostsData from "./PostsData";

const Posts = () => {
  return (
    <div className="bg-grey-50" id="blog">
      <div className="container py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          I also like to write
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Check out my latest posts!
        </h4>
        <PostsData/>
      </div>
    </div>
  );
};

export default Posts;
