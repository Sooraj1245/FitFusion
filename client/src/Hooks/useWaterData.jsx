import React, { useEffect, useState } from "react";
import { getWaterData } from "../mockServices/mockservices";
const useWaterData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getWaterData().then((waterData) => setData(waterData));
  });
  return data;
};

export default useWaterData;
