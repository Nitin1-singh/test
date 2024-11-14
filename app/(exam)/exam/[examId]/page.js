"use client";
import { MainSide } from "@/components/exam/MainSide";
import { ResultModal } from "@/components/exam/ResultModal";
import { RightSide } from "@/components/exam/RightSide";
import axiosInstance from "@/utils/axiosInstance";
import { readCookie } from "@/utils/readCookie";
import { LoadingOutlined } from "@ant-design/icons";
import { message, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ExamPage({ params }) {
  const { examId } = params;
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [score, setScore] = useState(0.0);
  const [passing_score, setPassingScore] = useState(0.0);
  const [quizName, setQuizName] = useState("");

  const [visible, setVisible] = useState(false);
  const [userResponse, setUserResponse] = useState({});
  const [val, setVal] = useState(null);
  const router = useRouter();
  // index type
  useEffect(() => {
    try {
      setLoading(true);
      const ans = async () => {
        const userData = await readCookie();
        console.log(userData);
        setUserData(userData);
        const res = await axiosInstance.get(`quiz/get-quiz/${examId}`);
        console.log(res.data?.questions);
        setData((prev) =>
          res.data?.questions?.map((val, index) =>
            index === 0
              ? { ...val, attemp: "not_ans" }
              : { ...val, attemp: "not_vis" }
          )
        );
        setPassingScore(res?.data?.passing_score);
        setQuizName(res?.data?.quizName);
        setLoading(false);
      };
      ans();
    } catch (e) {
      setLoading(false);
      console.log("Error ", e);
      message.destroy();
      message.error("Internal Server Error");
    }
  }, []);
  const handleSubmitExam = async () => {
    try {
      setLoading(true);
      const ans = {};
      let my_score = 0.0;
      data?.map((ques, index) => {
        if (
          userResponse[index]?.val != undefined ||
          userResponse[index]?.val != null
        ) {
          return (ans[index] = userResponse[index]);
        } else {
          ans[index] = null;
        }
      });
      console.log("ans = ", ans, data[0]?.correct_option);
      Object.entries(ans).forEach(([key, value]) => {
        console.log(`Key: ${key}, Value: ${value?.val}`);
        if (data[key]?.correct_option === value?.val) {
          my_score += 10.0;
          console.log(my_score);
        }
      });
      console.log(my_score);
      await axiosInstance.post(`/quiz/submit-quiz/${examId}`, {
        userId: userData?.id,
        response: ans,
        my_score: my_score,
      });
      setScore(my_score);
      setVisible(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
      message.destroy();
      message.error("Internal Server Error");
    }
  };
  return (
    <Spin
      className="!max-h-screen !h-screen"
      indicator={<LoadingOutlined spin />}
      size="large"
      spinning={loading}
    >
      <div className="flex flex-col h-screen">
        {/* <div className="h-[100%]"> */}
        <p className="text-center text-3xl my-4">{quizName}</p>
        <main className="flex flex-row px-4 h-full py-4">
          <MainSide
            data={data}
            setUserResponse={setUserResponse}
            userResponse={userResponse}
            setData={setData}
            setVal={setVal}
            val={val}
            setCurrentQuestionNo={setCurrentQuestionNo}
            questionDetail={data[currentQuestionNo]?.question_name}
            questionNo={currentQuestionNo + 1}
            options={data[currentQuestionNo]?.options}
            type={data[currentQuestionNo]?.type}
            currentQuestionNo={currentQuestionNo}
          />
          <RightSide
            setVal={setVal}
            userResponse={userResponse}
            setData={setData}
            currentQuestionNo={currentQuestionNo}
            data={data}
            setCurrentQuestionNo={setCurrentQuestionNo}
            handleSubmitExam={handleSubmitExam}
          />
        </main>
        {/* </div> */}
        <ResultModal
          my_score={score}
          userId={userData?.id}
          passing_score={passing_score}
          visible={visible}
        />
      </div>
    </Spin>
  );
}
