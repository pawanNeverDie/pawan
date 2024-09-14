import Header from '../../../components/Header'
import { notFound } from 'next/navigation'

const posts = {
  '2021': {
    title: 'Making the Web. Faster.',
    date: 'June 23, 2021',
    content: `
      Following our Series B last December, I'm happy to announce we've raised a
      $102M Series C from existing and new investors.

      Our vision of the Web is a global realtime medium for both creators and
      consumers, where all friction and latency are eliminated.

      We'll use this investment to:

      1. Build the SDK for Web
      2. Lower the barrier of entry
      3. Focus on the end-user

      ## 1. Build the SDK for the Web

      [Tweet content here]
    `
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts]
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-8">Pawan• {post.date} (2y ago)</p>
        <div className="prose prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    </div>
  )
}