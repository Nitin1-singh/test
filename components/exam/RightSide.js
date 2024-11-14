"use client";
import { ButtonSolid } from "../Button";

export function RightSide({
  currentQuestionNo,
  setCurrentQuestionNo,
  userResponse,
  data,
  setData,
  setVal,
  handleSubmitExam,
}) {
  const InfoCard = ({ name, className = "" }) => {
    return (
      <div className="w-fit flex flex-row items-center gap-3">
        <div
          className={`border w-fit rounded-[3px] border-slate-300 py-2 px-1 text-center ${className}`}
        >
          <p className="mx-2">9</p>
        </div>
        <p>{name}</p>
      </div>
    );
  };
  return (
    <div className="w-[30%] border-r border-t border-b border-slate-300">
      <div className="grid h-[40%] px-4 grid-cols-2 gap-2 items-center justify-center">
        <InfoCard name={"Not Visited"} />
        <InfoCard
          className="bg-purple-400 text-white"
          name={"Marked For Review"}
        />
        <InfoCard className="bg-green-400 text-white" name={"Answered"} />
        <InfoCard className="bg-red-400 text-white" name={"Not Answered"} />
        <InfoCard
          className="bg-orange-400 text-white"
          name={"Answered But Mark For Review"}
        />
      </div>
      <div className="h-[50%] overflow-y-auto px-4">
        <div className="grid grid-cols-4 gap-4 mt-4">
          {data?.map((val, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setData((prev) => {
                    const ans = prev?.map((user, index2) =>
                      index2 === index &&
                      user?.attemp !== "revisit" &&
                      user?.attemp !== "revisit_ans" &&
                      user?.attemp !== "ans"
                        ? { ...user, attemp: "not_ans" }
                        : user
                    );
                    // console.log(ans);
                    return [...ans];
                  });
                  console.log("right = ", userResponse[index], userResponse);
                  setCurrentQuestionNo(index);
                  setVal(userResponse[index]?.val);
                }}
                className={`hover:cursor-pointer shadow-md border rounded-[3px] py-2 px-1 text-center 
                  ${val?.attemp === "not_ans" ? "bg-red-400 text-white" : ""}
                  ${val?.attemp === "ans" ? "bg-green-400 text-white" : ""}
                 ${val?.attemp === "revisit" ? "bg-purple-400 text-white" : ""}
                 ${
                   val?.attemp === "revisit_ans"
                     ? "bg-orange-400 text-white"
                     : ""
                 }
                 ${
                   val?.attemp === null ||
                   val?.attemp === undefined ||
                   val?.attemp === "not_vis"
                     ? "bg-none"
                     : ""
                 }
                   ${
                     currentQuestionNo == index
                       ? "border-2 border-black"
                       : "border-slate-300"
                   }
                `}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <ButtonSolid
          onClick={handleSubmitExam}
          className="rounded-[3px]"
          name={"Submit"}
        />
      </div>
    </div>
  );
}
