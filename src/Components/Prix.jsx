const Prix = ({ total }) => {
  let totalFlat = Math.floor(total * 100);
  let allCost = totalFlat / 100 + 2.5;
  return (
    <>
      <div>
        <div>
          <p>Sous-total</p>
          <p>{totalFlat / 100} €</p>
        </div>
        <div>
          <p>Frais de livraison</p>
          <p>2,50 €</p>
        </div>
      </div>
      <div>
        <p>Total</p>
        <p>{allCost} €</p>
      </div>
    </>
  );
};
export default Prix;
