import React from "react";
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,
} from "@heroicons/react/24/solid";
import {
  useContract,
  useContractCall,
  useContractData,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";
import toast from "react-hot-toast";

type AdminControlsProps = {};

const AdminControls: React.FC<AdminControlsProps> = () => {
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: operatorTotalCommission } = useContractData(
    contract,
    "operatorTotalCommission"
  );

  const { mutateAsync: DrawWinnerTicket } = useContractCall(
    contract,
    "DrawWinnerTicket"
  );
  const { mutateAsync: RefundAll } = useContractCall(contract, "RefundAll");
  const { mutateAsync: restartDraw } = useContractCall(contract, "restartDraw");
  const { mutateAsync: WithdrawCommission } = useContractCall(
    contract,
    "WithdrawCommission"
  );

  const drawWinner = async () => {
    const notification = toast.loading("Picking a Lucky Winner...");

    try {
      const data = await DrawWinnerTicket([{}]);

      toast.success("A winner has been selected!", {
        id: notification,
      });
    } catch (error) {
      toast.error("Whoops! Something went wrong", {
        id: notification,
      });
      console.error("contract call failure", error);
    }
  };

  const onRefundAll = async () => {
    const notification = toast.loading("Refund All...");

    try {
      const data = await DrawWinnerTicket([{}]);

      toast.success("A winner has been selected!", {
        id: notification,
      });
    } catch (error) {
      toast.error("Whoops! Something went wrong", {
        id: notification,
      });
      console.error("contract call failure", error);
    }
  };

  const onWithdrawCommission = async () => {
    const notification = toast.loading("Withdrawing Commission...");

    try {
      const data = await WithdrawCommission([{}]);

      toast.success("Your commission has been withdrawn successfully", {
        id: notification,
      });
      console.info(data);
    } catch (error) {
      toast.error("Whoops! Something went wrong", {
        id: notification,
      });
      console.error("contract call failure", error);
    }
  };

  const onRestartDraw = async () => {
    const notification = toast.loading("Restarting Draw...");

    try {
      const data = await RefundAll([{}]);

      toast.success("Restarting successfully", {
        id: notification,
      });
      console.info(data);
    } catch (error) {
      toast.error("Whoops! Something went wrong", {
        id: notification,
      });
      console.error("contract call failure", error);
    }
  };

  return (
    <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border">
      <h2 className="font-bold">Admin Controls</h2>
      <p className="mb-5">
        Total Commission to be Withdrawn:{" "}
        {operatorTotalCommission &&
          ethers.utils.formatEther(operatorTotalCommission?.toString())}{" "}
        {currency}
      </p>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0">
        <button onClick={drawWinner} className="adminButton">
          <StarIcon className="h-6 mx-auto mb-2" />
          Draw Winner
        </button>
        <button onClick={onWithdrawCommission} className="adminButton">
          <CurrencyDollarIcon className="h-6 mx-auto mb-2" />
          Withdraw Commission
        </button>
        <button onClick={onRestartDraw} className="adminButton">
          <ArrowPathIcon className="h-6 mx-auto mb-2" />
          Restart Draw
        </button>
        <button onClick={onRefundAll} className="adminButton">
          <ArrowPathIcon className="h-6 mx-auto mb-2" />
          Refund All
        </button>
      </div>
    </div>
  );
};
export default AdminControls;
