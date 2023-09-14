import React from 'react'
import BlogFirst from '../../components/bg-pages/Blog/BlogFirst/BlogFirst'
import NewsBlock from '../../components/bg-pages/Blog/News/NewsBlock'
import AllNews from '../../components/bg-pages/Blog/AllNews/AllNews'
import Subsribe from '../../components/Subsribe/Subsribe'
import Footer from '../../components/Base/Footer/Footer'

function Blog() {
  return (
    <div>
      <BlogFirst/>
      <NewsBlock/>
      <AllNews/>
      <Subsribe/>
      <Footer/>
    </div>
  )
}

export default Blog
