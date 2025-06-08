interface DirectorAndCastProps {
  directors: string;
  cast: string;
}

export function DirectorAndCast({ directors, cast }: DirectorAndCastProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 bg-[#3a265e]/80 rounded-xl p-5 text-white">
        <div className="font-bold mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Director
        </div>
        <div>{directors}</div>
      </div>
      <div className="flex-1 bg-[#3a265e]/80 rounded-xl p-5 text-white">
        <div className="font-bold mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
          Cast
        </div>
        <div>{cast}</div>
      </div>
    </div>
  );
} 