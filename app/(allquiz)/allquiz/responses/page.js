import { ResponseWrapper } from "@/components/response/ResponsiveWrapper";
import { Suspense } from "react";

export default function QuizResponse() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResponseWrapper />
    </Suspense>
  );
}
