import { FaStar } from "react-icons/fa";
const Meals = ({ meal, setBasket, basket }) => {
  const description = meal.description;
  const lengthStr = description.length;
  const resumeLength = lengthStr / 4;
  const resume = description.slice(0, resumeLength);
  let similar = 0;

  return (
    <div
      className="meal-box"
      onClick={() => {
        // console.log(meal);
        basket.map((basketE, index) => {
          if (basketE.id === meal.id) {
            // console.log("Add 1");
            const copy = [...basket];
            copy[index].quantity++;
            setBasket(copy);
            similar++;
          } else if (basketE.id !== meal.id && similar === 0) {
            console.log("Add new");
            const neoBasket = [...basket];
            neoBasket.push({
              ...meal,
              quantity: 1,
            });
            setBasket(neoBasket);
          }
        });
        if (basket.length === 0) {
          const neoBasket = [...basket];
          neoBasket.push({
            ...meal,
            quantity: 1,
          });
          setBasket(neoBasket);
          console.log(0);
        }
      }}
    >
      <div>
        <h3>{meal.title}</h3>
        <div>
          {meal.description ? (
            lengthStr > 150 ? (
              <p>{resume}...</p>
            ) : (
              <p>{description}</p>
            )
          ) : (
            <></>
          )}
        </div>
        <div>
          <div className="price">{meal.price} €</div>
          {meal.popular ? (
            <p>
              <FaStar />
              populaire
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      {meal.picture ? (
        <div>
          <img src={meal.picture} alt="Meal picture not found" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Meals;
