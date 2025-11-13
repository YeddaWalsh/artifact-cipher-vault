export default function VotePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">Vote for Artifacts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Artifact #1</h3>
            <p className="text-gray-600 mb-4">Encrypted voting system demonstration</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Vote +
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 ml-2">
              Vote -
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
