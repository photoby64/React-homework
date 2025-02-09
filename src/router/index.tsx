import Cart from '@/pages/cart';
import TicTacToe from '@/pages/tic-tac-toe';
import NotFound from '@/pages/not-found';

// --------------------------------------------------------------------------
// 내비게이션 리스트 데이터

export const navList = [
  { path: 'tic-tac-toe', text: '틱택토', element: <TicTacToe /> },
  { path: 'cart', text: '카트', element: <Cart /> },
];

// --------------------------------------------------------------------------
// 라우터 컴포넌트

function Router({ route }: { route: string }) {
  return navList.find(({ path }) => path === route)?.element ?? <NotFound />;
}

export default Router;
