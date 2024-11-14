"use client";
import { useEffect, useState } from "react";
import { QuizCard } from "./QuizCard";
import axiosInstance from "@/utils/axiosInstance";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { readCookie } from "@/utils/readCookie";

export function QuizWrapper() {
  const [allQuiz, setAllQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const ans = async () => {
      try {
        setLoading(true);
        const payload = await readCookie();
        setUser(payload);
        const res = await axiosInstance.get("/quiz/get-all-quiz");
        console.log(res.data);
        setAllQuiz(res.data.data);
        setLoading(false);
      } catch (e) {
        setAllQuiz(false);
        setAllQuiz([]);
        console.log("Error ", e);
      }
    };
    ans();
  }, []);
  return (
    <div className="flex flex-col px-4">
      <p className="self-center text-4xl font-semibold mt-4">All Quizzes</p>
      <p className="self-center w-[50px] bg-[#00b96b] h-[4px]"></p>
      {loading ? (
        <div className="flex flex-row justify-center items-center h-[400px]">
          <Spin size="large" indicator={<LoadingOutlined spin />} />
        </div>
      ) : (
        <div className="grid grid-cols-4 pt-4 pb-4 overflow-y-auto h-[500px]">
          {allQuiz?.map((val, idx) => {
            console.log(
              val?.responses?.some(
                (item) => item.userId === user?.id && item.quizId === val?.id
              )
            );
            return (
              <>
                <QuizCard
                  user={user}
                  responses={val?.responses?.some(
                    (item) =>
                      item.userId === user?.id && item.quizId === val?.id
                  )}
                  key={idx}
                  quizId={val?.id}
                  quizName={val?.quizName}
                  noOfQuestion={val?.questions?.length}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}
