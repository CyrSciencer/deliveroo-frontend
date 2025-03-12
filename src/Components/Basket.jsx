import { useState, useEffect, use } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import Prix from "./Prix";
const Basket = ({ basket, setBasket }) => {
  let sum = 0;
  for (let i = 0; i < basket.length; i++) {
    sum += basket[i].price * basket[i].quantity;
  }
  const handlePlus = (index) => {
    console.log(basket);
    const neoCart = [...basket];
    neoCart[index].quantity++;
    setBasket(neoCart);
  };
  const handleMinus = (index, meal) => {
    const neoCart = [...basket];
    neoCart[index].quantity--;
    setBasket(neoCart);

    if (meal.quantity === 0) {
      const remCart = [...basket];
      remCart.splice(index, 1);
      setBasket(remCart);
      //   console.log(index);
    }
  };

  return (
    <>
      {basket.length === 0 ? (
        <button disabled>valider mon panier</button>
      ) : (
        <button className="accept">valider mon panier</button>
      )}
      <div className="scroller">
        {basket.length === 0 ? (
          <div>Votre panier est vide</div>
        ) : (
          <>
            {basket.map((meal, index) => {
              const totalMealPrice = Math.floor(
                meal.price * meal.quantity * 100
              );
              return (
                <div key={index} className="not-empty">
                  <div>
                    <div>
                      <button onClick={() => handleMinus(index, meal)}>
                        <FaMinusCircle />
                      </button>
                      <p>{meal.quantity}</p>
                      <button onClick={() => handlePlus(index)}>
                        <FaPlusCircle />
                      </button>
                    </div>
                    <p>{meal.title}</p>
                  </div>
                  <p>{totalMealPrice / 100} €</p>
                </div>
              );
            })}
          </>
        )}
      </div>
      {basket.length !== 0 && (
        <div className="prices">
          <Prix total={sum} />
        </div>
      )}
    </>
  );
};
export default Basket;
