interface MovieOverviewProps {
  overview?: string;
}

export function MovieOverview({ overview }: MovieOverviewProps) {
  return (
    <div className="bg-[#3a265e]/80 rounded-xl p-5 text-white">
      <div className="font-bold mb-2 text-lg">Plot</div>
      <div>{overview}</div>
    </div>
  );
} 