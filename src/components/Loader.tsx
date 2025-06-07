export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black-gradient p-8">
      <div className="w-24 h-24 border-4 border-t-white border-gray-700 rounded-full animate-spin mx-auto"></div>
      <div className="text-white font-semibold text-4xl opacity-90 animate-fadeIn mt-6">
        Almost There...
      </div>
      <div className="text-[#9e9e9e] text-sm opacity-80 animate-fadeIn mt-2 text-center">
        <p>We're getting everything ready for you...</p>
        <p>Sit tight for just a moment.</p>
      </div>
    </div>
  );
}
