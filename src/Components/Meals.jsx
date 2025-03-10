import { FaStar } from "react-icons/fa";
const Meals = ({ meal }) => {
  const description = meal.description;
  const lengthStr = description.length;
  const resumeLength = lengthStr / 4;
  const resume = description.slice(0, resumeLength);
  return (
    <div className="meal-box">
      <div>
        <h3>{meal.title}</h3>
        <div>
          {meal.description ? (
            lengthStr > 150 ? (
              <p>{resume}</p>
            ) : (
              <p>{description}</p>
            )
          ) : (
            <></>
          )}
        </div>
        <div>
          <div className="price">{meal.price}€</div>
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
