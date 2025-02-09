import Header from '@/components/atoms/CartHeader';
import ProductList from '@/components/molecules/ProductList';
import { tm } from '@/utils/tw-merge';

function Cart() {
  return (
    <div className={tm('p-10 border-6 rounded-3xl border-gray-700 min-w-110')}>
      <Header></Header>
      <ProductList></ProductList>
    </div>
  );
}

export default Cart;
