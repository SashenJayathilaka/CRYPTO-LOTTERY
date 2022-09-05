import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex items-center space-x-2 mb-10">
        <img
          className="rounded-full h-20 w-20"
          src="https://c.tenor.com/zyUn_DgNXyUAAAAd/eth-etherum.gif"
          alt=""
        />
        <h1 className="text-lg text-white font-bold">Loading...</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
};
export default Loading;
