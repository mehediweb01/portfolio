export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 min-h-screen">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
