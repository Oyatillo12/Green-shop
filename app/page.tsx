import OurBlog from "@/components/OurBlog/OurBlog";
import Plants from "@/components/Plants/Plants";
import SwiperCustom from "@/components/swiper/SwiperCustom";
import Category from "@/service/category/Category";
import Products from "@/service/products/Products";

export default function Home() {
  return (
    <main className=" max-w-[1200px] w-full mx-auto mt-4">
      <SwiperCustom />
      <section className="mt-[35px] flex justify-between">
        <Category />
        <Products/>
      </section>
      <Plants/>
      <OurBlog/>
    </main>
  );
}
