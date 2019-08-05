import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App({ store }) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(4.0);

  // Note: if you have an expensive calculation here and want it optimized like  mobx `computed`,
  // you can use the React useMemo api to only recalculate whenever `count` or `price` changes
  // IMHO: It's better not to add useMemo complexity unless it makes a noticiable difference to the user (rare)
  const cost = (price * count).toFixed(2);

  // Our side effects will go here, but
  // you could extract them to custom hooks easily if you want to reuse or just organize them nicer.

  useEffect(
    function doThisWheneverCountChanges() {
      console.log("Amount is now: ", count);
      if (count == 5) alert("Congratulations on 5 clicks!");
    },
    [count]
  );

  useEffect(
    function doThisWheneverPriceChanges() {
      console.log("Price is now: ", price);
    },
    [price]
  );

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <h1>Total Count</h1>
      <span role="img" aria-label="One box item for each count">
        {"📦".repeat(count)}
      </span>
      <h2>{count} </h2>
      <h1>Total Price:</h1>
      <label>
        <input
          defaultValue={price}
          onChange={({ target }) => setPrice(target.value)}
        />
      </label>
      <h2>${price}</h2>
      <h1>Total Cost:</h1>
      <h2>${cost}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
