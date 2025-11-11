export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Artifact Cipher
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A secure encrypted voting system for artifact transfer approvals using
          Fully Homomorphic Encryption (FHE) via the FHEVM protocol by Zama.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/vote"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Voting
          </a>
          <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
