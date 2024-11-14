"use client";

import axiosInstance from "@/utils/axiosInstance";
import { readCookie } from "@/utils/readCookie";
import { message } from "antd";
import { useEffect, useState } from "react";
import { ResponseDiv } from "./ResponseDiv";
import { useSearchParams } from "next/navigation";

export function ResponseWrapper({ quizName }) {
  const [user, setUser] = useState(null);
  const [responses, setResponse] = useState([]);
  const userId = useSearchParams().get("userId");
  useEffect(() => {
    try {
      const ans = async () => {
        const payload = await readCookie();
        setUser(payload);
        const res = await axiosInstance.get(`/quiz/get-all-response/${userId}`);
        setResponse(res.data?.data);
      };
      ans();
    } catch (e) {
      console.log(e);
      message.destroy();
      message.error("Internal Server Error");
    }
  }, []);
  return (
    <div className="overflow-y-auto">
      <h1 className="text-center text-3xl my-4">All Response</h1>
      {responses?.map((val, index) => {
        return (
          <ResponseDiv
            key={index}
            userResponse={val?.responses}
            questions={val?.questions}
            quizName={val?.quizName}
            score={val?.score}
          />
        );
      })}
    </div>
  );
}
