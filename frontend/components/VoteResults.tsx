interface VoteResultsProps {
  artifactId: number;
  votes: {
    yes: number;
    no: number;
  };
}

export default function VoteResults({ artifactId, votes }: VoteResultsProps) {
  const totalVotes = votes.yes + votes.no;
  const yesPercentage = totalVotes > 0 ? (votes.yes / totalVotes) * 100 : 0;
  const noPercentage = totalVotes > 0 ? (votes.no / totalVotes) * 100 : 0;

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Voting Results - Artifact #{artifactId}</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-green-600 font-medium">Approve</span>
          <span className="text-sm text-gray-600">{votes.yes} votes ({yesPercentage.toFixed(1)}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-600 h-3 rounded-full"
            style={{ width: `${yesPercentage}%` }}
          ></div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-red-600 font-medium">Reject</span>
          <span className="text-sm text-gray-600">{votes.no} votes ({noPercentage.toFixed(1)}%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-red-600 h-3 rounded-full"
            style={{ width: `${noPercentage}%` }}
          ></div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-4">
          Total votes: {totalVotes}
        </div>
      </div>
    </div>
  );
}
