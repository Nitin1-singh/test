"use client";
import { Modal } from "antd";
import Link from "next/link";
import { BiSolidHappyAlt } from "react-icons/bi";
import { IoSadOutline } from "react-icons/io5";

export function ResultModal({
  passing_score,
  visible,
  setVisible,
  my_score,
  userId,
}) {
  const open = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };
  return (
    <Modal
      closeIcon={null}
      footer={[]}
      styles={{ content: { borderRadius: 5 } }}
      className="!rounded-none"
      onOk={open}
      open={visible}
    >
      <p className="text-3xl font-semibold text-center">Result</p>
      <div className="flex flex-col items-center justify-evenly h-[400px]">
        {my_score >= passing_score ? (
          <>
            <p className="text-3xl font-semibold text-green-400">
              You Passed {my_score}
            </p>
            <BiSolidHappyAlt size={200} color="green" />
          </>
        ) : (
          <>
            <p className="text-3xl font-semibold text-red-400">
              You Failed {my_score}
            </p>
            <IoSadOutline size={200} color="red" />
          </>
        )}
      </div>
      <div className="flex flex-row justify-evenly">
        <Link className="underline" href={"/allquiz"}>
          Explore
        </Link>
        <Link
          className="underline"
          href={`/allquiz/responses?userId=${userId}`}
        >
          View Response
        </Link>
      </div>
    </Modal>
  );
}
