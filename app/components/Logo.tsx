export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-end gap-0.5">
        <div className="w-1 h-3 bg-red-500 rounded-sm"></div>
        <div className="w-1 h-5 bg-red-400 rounded-sm"></div>
        <div className="w-1 h-4 bg-orange-400 rounded-sm"></div>
        <div className="w-1 h-6 bg-red-500 rounded-sm"></div>
      </div>
      <span className="text-blue-700 font-bold text-2xl uppercase tracking-wide">
        Sportsee
      </span>
    </div>
  )
}
