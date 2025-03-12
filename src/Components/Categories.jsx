import Meals from "./Meals";
const Categories = ({ categorie, setBasket, basket }) => {
  const meals = categorie.meals;
  return meals.length > 0 ? (
    <div className="caté">
      <h2>{categorie.name}</h2>
      <div>
        {meals.map((meal) => {
          return (
            <Meals
              key={meal.id}
              meal={meal}
              setBasket={setBasket}
              basket={basket}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Categories;
