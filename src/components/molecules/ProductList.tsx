import { useState } from 'react';
import CounterButton from '@/components/atoms/CounterButton';
import CartFooter from '@/components/atoms/CartFooter';
import data from '@/pages/cart/data.json';
import ProductProfile from '@/components/atoms/ProductProfile';

function ProductList() {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (price: number) => {
    setTotalPrice((prev) => prev + price);
  };

  return (
    <>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index} className="flex justify-between items-center m-5">
              <ProductProfile
                title={item.title}
                price={item.price}
                image={item.image}
              ></ProductProfile>
              <CounterButton
                price={item.price}
                max={item.count}
                changeCount={handleClick}
              ></CounterButton>
            </li>
          );
        })}
      </ul>
      <CartFooter price={totalPrice}></CartFooter>
    </>
  );
}

export default ProductList;