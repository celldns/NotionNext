import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'
import TagItemMini from './TagItemMini'
import CONFIG_MATERY from '../config_matery'

const BlogPostCard = ({ post, showSummary, siteInfo }) => {
  const showPreview = CONFIG_MATERY.POST_LIST_PREVIEW && post.blockMap
  // matery 主题默认强制显示图片
  if (post && !post.page_cover) {
    post.page_cover = siteInfo?.pageCover
  }
  const showPageCover = CONFIG_MATERY.POST_LIST_COVER && !showPreview && post?.page_cover
  return (
      <div
          data-aos="zoom-in"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
          className="w-full mb-4 h-full overflow-auto drop-shadow-md border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray">

          {/* 固定高度 ，空白用图片拉升填充 */}
          <div key={post.id} className="flex flex-col h-96 justify-between">

              {/* 头部图片 填充卡片 */}
              {showPageCover && (
                  <Link href={`${BLOG.SUB_PATH}/${post.slug}`} passHref legacyBehavior>
                      <div className="flex flex-grow w-full relative duration-200 bg-black rounded-t-md  cursor-pointer transform overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                              src={post?.page_cover}
                              alt={post.title}
                              className="opacity-50 h-full w-full hover:scale-125 rounded-t-md  transform object-cover duration-500"
                          />
                          <span className='absolute bottom-0 left-0 text-white p-6 text-2xl replace' > {post.title}</span>
                      </div>
                  </Link>
              )}


          </div>

      </div>
  )
}

export default BlogPostCard
