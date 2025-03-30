export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="mt-3 h-[40vh]  px-5 pt-4 flex flex-col gap-3 w-full">
      <div className="bg-black/5 flex-1 rounded-2xl w-full h-full animate-pulse"></div>
      <div className="bg-black/10 flex-1 rounded-2xl w-full h-full animate-pulse"></div>
      <div className="bg-black/10 flex-1 rounded-2xl w-full h-full animate-pulse"></div>
    </div>
  );
}
