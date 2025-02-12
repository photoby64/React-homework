import Cart from '@/pages/cart';
import TicTacToe from '@/pages/tic-tac-toe';
import SignInForm from '@/pages/sign-in';
import NotFound from '@/pages/not-found';
import SideEffectDemo from '@/pages/side-effect';
import SearchListPage from '@/pages/search-list';

// --------------------------------------------------------------------------
// 내비게이션 리스트 데이터

export const navList = [
  { path: 'search-list', text: '검색 리스트', element: <SearchListPage /> },
  { path: 'side-effect', text: '이펙트 처리', element: <SideEffectDemo /> },
  { path: 'tic-tac-toe', text: '틱택토', element: <TicTacToe /> },
  { path: 'cart', text: '카트', element: <Cart /> },
  { path: 'signin', text: '로그인', element: <SignInForm /> },

];

// --------------------------------------------------------------------------
// 라우터 컴포넌트

function Router({ route }: { route: string }) {
  return navList.find(({ path }) => path === route)?.element ?? <NotFound />;
}

export default Router;
