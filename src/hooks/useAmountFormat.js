import React from "react";

export const useAmountFormat = amount => Number(amount).toFixed(2);

export const useBalFormat = amount => {
  let bal = Number(amount)
    .toFixed(2)
    .split(".");
  return (
    <>
      {bal[0]}.<span>{bal[1]}</span>
    </>
  );
};
