import { tm } from "@/utils/tw-merge";

function Header() {
  return (
    <header className={tm('border-b border-gray-700 p-4')}>
      <h1 className={tm('text-gray-700 font-bold text-4xl')}>장바구니</h1>
    </header>
  );
}

export default Header;