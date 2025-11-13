export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Artifact Cipher</h1>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/vote" className="hover:text-gray-300">Vote</a></li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  )
}
