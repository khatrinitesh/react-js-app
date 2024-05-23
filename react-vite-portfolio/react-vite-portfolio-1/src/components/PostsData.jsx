import React from 'react'
import { postData } from '../constants/constants'

const PostsData = () => {
  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
      {postData.map((post, index) => (
        <a href={post.link} className="shadow" key={index}>
          <div
            style={{ backgroundImage: `url(${post.imageUrl})` }}
            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
          >
            <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50" />
            <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
              Read More
            </span>
          </div>
          <div className="bg-white py-6 px-5 xl:py-8">
            <span className="block font-body text-lg font-semibold text-black">{post.title}</span>
            <span className="block pt-2 font-body text-grey-20">{post.content}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default PostsData