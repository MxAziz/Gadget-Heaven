import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-96  flex flex-col space-y-4 justify-center items-center">
      <div className="flex items-center gap-4">
        <small className="text-7xl font-bold text-[#9538E2]">404</small>
        <div className="">
          <h1 className="text-4xl font-bold text-fuchsia-600">
            Oops! You're lost.
          </h1>
          <h1 className="text-2xl font-bold text-gray-700">
            The page you are looking for was not found
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
