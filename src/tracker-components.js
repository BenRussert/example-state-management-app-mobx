import React, { useEffect, useContext } from "react";
import { globalAppContext } from "./global-app-provider";

export function CountTracker() {
  const { count, setCount } = useContext(globalAppContext);
  useEffect(
    function doThisWheneverCountChanges() {
      console.log("Amount is now: ", count);
      if (count === 5) alert("Congratulations on 5 clicks!");
    },
    [count]
  );
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <h1>Total Count</h1>
      <span role="img" aria-label="One box item for each count">
        {"📦".repeat(count)}
      </span>
      <h2>{count} </h2>
    </>
  );
}

export function PriceTracker() {
  const { price, setPrice } = useContext(globalAppContext);
  useEffect(
    function doThisWheneverPriceChanges() {
      console.log("Price is now: ", price);
    },
    [price]
  );
  return (
    <>
      <h1>Price:</h1>
      <label>
        <input
          defaultValue={price}
          onChange={({ target }) => setPrice(target.value)}
        />
      </label>
      <h2>${price}</h2>
    </>
  );
}

export function TotalCostTracker() {
  const { count, price } = useContext(globalAppContext);
  // Note: if you have an expensive calculation here and want it optimized like  mobx `computed`,
  // you can use the React useMemo api to only recalculate whenever `count` or `price` changes
  // IMHO: It's better not to add useMemo complexity unless it makes a noticiable difference to the user (rare)
  const cost = (price * count).toFixed(2);

  return (
    <>
      <h1>Total Cost:</h1>
      <h2>${cost}</h2>
    </>
  );
}
