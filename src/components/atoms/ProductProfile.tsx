import { tm } from "@/utils/tw-merge";

interface ProductProfileProps {
  title: string;
  price: number;
  image: string;
}

function ProductProfile({ title, price, image }: ProductProfileProps) {
  return (
    <div className="inline-flex items-center">
      <img src={image} alt={title} className={tm('rounded-full w-24')} />
      <div className={tm('flex flex-col m-4 truncate')}>
        <h2 className={tm('')}>{title}</h2>
        <p className={tm('font-bold')}>{price} 원 </p>
      </div>
    </div>
  );
}

export default ProductProfile;
