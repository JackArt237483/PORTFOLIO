import React from 'react'
import PostFirst from '../../components/bg-pages/SinglePost/PostFirst/PostFirst'
import PostNews from '../../components/bg-pages/SinglePost/PostNews/PostNews'
import SubsribeTwo from "../../components/Subsribe/SubcribeTwo"
import NewsPost from '../../components/bg-pages/SinglePost/NewsPost/NewsPost'
import Footer from "../../components/Base/Footer/Footer"

function SinglePost() {
  return (
    <div>
      <PostFirst/>
      <PostNews/>
      <SubsribeTwo/>
      <NewsPost/>
      <Footer/>
    </div>
  )
}

export default SinglePost
