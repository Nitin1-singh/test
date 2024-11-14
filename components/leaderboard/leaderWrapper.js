"use client";

import axiosInstance from "@/utils/axiosInstance";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useEffect, useState } from "react";

export function LeaderBoardWrapper() {
  const [data, setData] = useState([1, 2]);
  useEffect(() => {
    const ans = async () => {
      const res = await axiosInstance("/quiz/get-leaderboard");
      setData(res?.data);
    };
    ans();
  }, []);
  return (
    <>
      <p className="text-3xl text-center my-5">Leaderboard</p>
      <div className="flex flex-col gap-5">
        {data?.map((val) => (
          <LeaderItem score={val?.totalMaxScore} name={val?.name} />
        ))}
      </div>
    </>
  );
}

export function LeaderItem({ name, score }) {
  return (
    <div className="flex flex-row justify-between items-center border border-slate-400 p-10">
      <div className="flex flex-row items-center">
        <Avatar className="" size={100} icon={<UserOutlined />} />
        <p className="ms-4 text-3xl">{name}</p>
      </div>
      <div>
        <p className="text-3xl">{score}</p>
      </div>
    </div>
  );
}
