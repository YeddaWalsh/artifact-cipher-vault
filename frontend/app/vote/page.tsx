import VoteResults from '../../components/VoteResults';

export default function VotePage() {
  // Mock data for demonstration
  const mockResults = { yes: 15, no: 8 };

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Vote for Artifacts</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Active Votes</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Artifact #1</h3>
              <p className="text-gray-600 mb-4">Encrypted voting system demonstration</p>
              <div className="flex gap-3">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Approve
                </button>
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Reject
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Current Results</h2>
            <VoteResults artifactId={1} votes={mockResults} />
          </div>
        </div>
      </div>
    </main>
  )
}
