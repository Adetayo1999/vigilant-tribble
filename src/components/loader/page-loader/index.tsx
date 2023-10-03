import { Loader } from "..";

export const PageLoader = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-y-6">
        <Loader />
        <p className="text-gray-700 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};
