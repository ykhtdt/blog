import Link from "next/link"

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch("https://dummyjson.com/posts?limit=10")
  const data = await response.json()

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        All Posts
      </h1>
      <ul>
        {
          data.posts.map((post) => (
            <li key={post.id} className="mb-3">
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default Page