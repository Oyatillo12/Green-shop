import SwiperCustom from "@/components/swiper/SwiperCustom";
import Category from "@/service/category/Category";
import Products from "@/service/products/Products";

export default function Home() {
  return (
    <div className=" max-w-[1200px] w-full mx-auto mt-4">
      <SwiperCustom />
      <div className="flex justify-between mt-[35px] space-x-10 pb-10">
        <Category />
        <Products/>
      </div>
    </div>
  );
}
