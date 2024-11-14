"use client";
import { Modal, Radio, Space } from "antd";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiViewList } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
export function ResponseDiv({ quizName, questions, userResponse, score }) {
  return (
    <div className="flex flex-row justify-between border border-slate-300 py-10 px-10">
      <div className="flex flex-row items-center">
        <CiViewList size={50} />
        <p className="ms-4 text-3xl">{quizName}</p>
      </div>
      <div className="flex flex-row items-center">
        <ResponseModal
          userResponse={userResponse}
          quizName={quizName}
          questions={questions}
          score={score}
        />
      </div>
    </div>
  );
}

export function ResponseModal({ questions, score = 0, userResponse }) {
  console.log(userResponse);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        rootClassName="modal-custom"
        onCancel={handleClose}
        onOk={handleClose}
        footer={[]}
        open={open}
      >
        <div className="border-b border-slate-400 pb-1">
          <p className="text-3xl">Your Score {score}</p>
        </div>
        <div className="overflow-y-auto my-5 h-[500px]">
          {questions?.map((val, index) => (
            <Questions
              key={index}
              explanation={val?.explanation}
              questionNo={index + 1}
              userResponse={userResponse[index]}
              correct_option={val?.correct_option}
              options={val?.options}
            />
          ))}
        </div>
      </Modal>
      <p className="underline hover:cursor-pointer" onClick={handleOpen}>
        View Response
      </p>
    </>
  );
}

export function Questions({
  options,
  questionNo,
  questionDetail,
  explanation,
  correct_option,
  userResponse,
}) {
  console.log(userResponse);
  return (
    <>
      <div className="my-5 border border-gray-300">
        <div className="border-b flex items-center gap-3 border-gray-300">
          <p className="font-semibold my-4 ps-4">Question No.{questionNo}</p>
          {correct_option === userResponse?.val && (
            <p className="font-semibold text-green-600">Correct Answer</p>
          )}
          {userResponse?.val === null || userResponse?.val === undefined ? (
            <p className="font-semibold text-purple-600">Unattempted Answer</p>
          ) : (
            userResponse?.val != correct_option && (
              <p className="font-semibold text-red-600">Wrong Answer</p>
            )
          )}
        </div>
        <div className="px-4 h-[70%] overflow-y-auto">
          <div className="mt-4">
            <p>{questionDetail}</p>
          </div>
          <div className="flex flex-col gap-4 my-4">
            <Radio.Group value={correct_option}>
              <Space direction="vertical">
                {options?.map((val, index) => (
                  <div key={index} className="flex flex-row items-center">
                    <Radio value={index}>{val}</Radio>
                    {index === userResponse?.val ? (
                      <SiTicktick size={20} color="green" />
                    ) : null}
                  </div>
                ))}
              </Space>
            </Radio.Group>
          </div>
        </div>
      </div>
      {userResponse?.val !== null && userResponse?.val !== undefined ? (
        <p>Your Answer = {userResponse?.val + 1}</p>
      ) : null}
      <p>Correct Options = {correct_option + 1}</p>
      <p>Explanation for question {questionNo}</p>
      {explanation}
    </>
  );
}
