import Header from '../components/Header'
import Link from 'next/link'

const posts = [
  { id: '2021', title: 'Making the Web. Faster.', views: 67644 },
  { id: '2020', title: 'Next for Vercel', views: 37881 },
  { id: 'books-people-reread', title: 'Books people re-read', views: 29185 },
  // Add more posts here
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Title</th>
              <th className="text-right py-2">Views</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-gray-700">
                <td className="py-2 text-gray-400">{post.id}</td>
                <td className="py-2">
                  <Link href={`/${post.id}`} className="hover:text-gray-300">
                    {post.title}
                  </Link>
                </td>
                <td className="py-2 text-right text-gray-400">{post.views.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}