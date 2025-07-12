import React, { useEffect, useState } from "react";
import { getMacroDetails } from "../mockServices/mockservices";
const useFoodMacros = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getMacroDetails().then((recData) => setData(recData));
  }, []);
  return data;
};

export default useFoodMacros;
