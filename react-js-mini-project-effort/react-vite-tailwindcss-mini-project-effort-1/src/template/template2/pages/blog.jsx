import React,{useEffect} from 'react';
import BlogSection from '../components/blog';

export default function Blog() {
  useEffect(() => {
    document.body.className = 'sub_page'
  })
  return (
    <>
      <BlogSection/>
    </>
  )
}
