

















import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Pawan Kumar
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                Follow me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}