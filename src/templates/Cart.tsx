import { IconCart } from '@/components/icon-svg';
import Footer from '@/components/molecules/CartFooter';
import Header from '@/components/molecules/CartHeader';

function Cart() {
  return (
    <div>
      <IconCart size={24} />
      <Header />
      <div>카트~!</div>
      <Footer price={10000} />
    </div>
  );
}

export default Cart;

// interface CartProps {
//   items: { id: number; name: string; price: number; quantity: number }[];
// }

// function Cart({ items }: CartProps) {
//   return (
//     <div className={styles.container}>
//       <CartHeader />
//       <CartList items={items} />
//       <CartSummary items={items} />
//       <CartFooter />
//     </div>
//   );
// }

// export default Cart;
