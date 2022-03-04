import { memo } from "react";

export const SmallCounter = memo(({ value }) => {
  console.log("Me volvi a llamar :(");
  return <small>{value}</small>;
});
