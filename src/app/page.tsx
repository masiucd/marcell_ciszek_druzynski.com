// import {Inter} from "@next/font/google"
import {compareDesc, format, parseISO} from "date-fns"
import {allPosts} from "contentlayer/generated"

async function getPosts() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return posts
}

export default async function Home() {
  const posts = await getPosts()
  console.log("posts", posts)
  return (
    <div>
      <h1>asd</h1>
    </div>
  )
}
