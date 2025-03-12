import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import logo from "./img/deliveroo-logo.png";
import Basket from "./Components/Basket";
import Categories from "./Components/Categories";
const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--d7bkrd25789m.code.run"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  // console.log(data);
  const category = data.categories;
  return isLoading ? (
    <p>chargement</p>
  ) : (
    <>
      <header>
        <div>
          <img src={logo} alt="logoNotFound" />
        </div>
      </header>
      <div className="high">
        <div className="low">
          <section className="header2">
            <div>
              <h1>{data.restaurant.name}</h1>
              <p>{data.restaurant.description}</p>
            </div>
            <div>
              <img src={data.restaurant.picture} alt="" />
            </div>
          </section>
        </div>
        <main>
          <section className="full-body">
            <div className="left-body">
              {category.map((categorie, index) => {
                return (
                  <Categories
                    key={index}
                    categorie={categorie}
                    setBasket={setBasket}
                    basket={basket}
                  />
                );
              })}
            </div>
            <div className="right-body">
              <div className="panier">
                <Basket basket={basket} setBasket={setBasket} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
