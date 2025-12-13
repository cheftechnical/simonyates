import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Custom loading progress bar - replaced Material-UI LinearProgress
function LoadingProgress() {
  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      <div className="h-1 bg-gray-200">
        <div className="h-full bg-gray-900 animate-[loading_1.5s_ease-in-out_infinite]" />
      </div>
      <style>{`
        @keyframes loading {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 75%;
            margin-left: 0%;
          }
          100% {
            width: 100%;
            margin-left: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export function Root() {
  return (
    <Suspense fallback={<LoadingProgress />}>
      <Outlet />
      <SpeedInsights />
      <Analytics />
    </Suspense>
  );
}

export default Root;
