import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 min-h-screen">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}
