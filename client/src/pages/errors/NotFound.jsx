import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="absolute top-0 inset-x-0 w-full max-w-6xl mx-auto text-center grid place-content-center gap-2 min-h-screen font-bold"
    >
      <h1 className="text-red-700 text-4xl">Oops!</h1>
      <p className="text-red-400 text-lg">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
