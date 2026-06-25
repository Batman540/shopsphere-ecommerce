import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AIRecommendations from "@/components/home/AIRecommendations";
import WhyShopSphere from "@/components/home/WhyShopSphere";
import MouseGlow from "@/components/home/MouseGlow";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />

      <Reveal>
  <Categories />
</Reveal>

<Reveal>
  <FeaturedProducts />
</Reveal>

<Reveal>
  <AIRecommendations />
</Reveal>

<Reveal>
  <WhyShopSphere />
</Reveal>
      <MouseGlow />
    </main>
  );
}