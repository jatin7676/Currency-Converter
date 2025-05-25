import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates);
        }
      })
      .catch((err) => {
        console.error("Currency API fetch failed", err);
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
