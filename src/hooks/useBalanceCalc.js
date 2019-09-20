import { useState, useEffect } from "react";
import { useAmountFormat } from "./useAmountFormat";

export const useBalanceCalc = (balance, action = "credit") => {
  const [amount, setAmount] = useState(0);
  const [newBalance, setNewBalance] = useState(0);

  useEffect(
    () =>
      action === "debit"
        ? setNewBalance(useAmountFormat(Number(balance) - Number(amount)))
        : setNewBalance(useAmountFormat(Number(balance) + Number(amount))),
    [amount, balance]
  );

  return [newBalance, setAmount];
};
