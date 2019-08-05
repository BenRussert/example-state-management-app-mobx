import React from "react";
import ReactDOM from "react-dom";
import { observable, computed, autorun, when, action } from "mobx";
import { observer } from "mobx-react";
import "./styles.css";

class OrderLine {
  @observable price = 4.0;
  @observable amount = 1;

  @computed get total() {
    return this.price * this.amount;
  }

  @action setPrice({ target }) {
    // takes an event object
    const newAmount = Number(target.value);
    console.log(newAmount, typeof newAmount);
    if (typeof newAmount === "number") {
      this.price = newAmount;
    }
  }
}

const myStore = new OrderLine();

const ObserverApp = observer(function App({ store }) {
  return (
    <div className="App">
      <button onClick={() => (store.amount += 1)}>Increment count</button>
      <h1>Total Count</h1>
      <span role="img" aria-label="One box item for each count">
        {"📦".repeat(store.amount)}
      </span>
      <h2>{store.amount} </h2>
      <h1>Total Price:</h1>
      <label>
        <input
          defaultValue={myStore.price}
          // why would it not work just like this? binding `this`.
          // onChange={myStore.setPrice}
          onChange={e => myStore.setPrice(e)}
        />
      </label>
      <h2>${store.price.toFixed(2)}</h2>
      <h1>Total Cost:</h1>
      <h2>${store.total.toFixed(2)}</h2>
    </div>
  );
});

window.myStore = myStore;

function doThisWheneverAmountChanges() {
  console.log("Amount is now: ", myStore.amount);
}

function doThisWheneverPriceChanges() {
  console.log("Price is now: ", myStore.price);
}

// call amountDisposer() when you want to stop
const amountDisposer = autorun(doThisWheneverAmountChanges);
const priceDisposer = autorun(doThisWheneverPriceChanges);

const disposeWhen = when(
  () => myStore.amount >= 5,
  () => {
    alert("Congratulations on 5 clicks!");
    // uncomment to stop logging after 5
    // amountDisposer();
    // this disposes the when, which probably isnt important...
    disposeWhen();
  }
);

const rootElement = document.getElementById("root");
ReactDOM.render(<ObserverApp store={myStore} />, rootElement);
