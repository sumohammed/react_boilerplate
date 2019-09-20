import React from "react";

export const useDate = () => {
  const date = date => new Date(date);

  const currentDate = new Date();

  const getTime = data => {
    return date(data).getHours() + ":" + date(data).getMinutes();
  };

  const getDate = data => {
    return date(data).getDate();
  };

  const getWeekDay = (data, day = "short") => {
    return date(data).toLocaleString("default", {
      weekday: "short"
    });
  };

  const getMonth = (data, month = "short") => {
    return date(data).toLocaleString("default", {
      month: "short"
    });
  };

  const getFullYear = (data, month = "short") => {
    return date(data).getFullYear();
  };

  const getDateNMonth = (date, month = "short") => {
    return (
      date.toLocaleString("default", {
        month: month
      }) +
      " " +
      date.getDate()
    );
  };

  return {
    date,
    currentDate,
    getTime,
    getDate,
    getWeekDay,
    getMonth,
    getFullYear,
    getDateNMonth
  };
};
