import Photo from "@/components/animation/Photo";
import Footer from "@/components/footer/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="">
      <div className="container mx-auto mb-16 ">
        <div className="flex flex-row items-center justify-between pt-8 pb-24 h-full">
          {/* text */}
          <div className="text-left ">
            <h1 className="h1 mb-6 text-accent">
            Green Threads 
            </h1>
            <h3 className="h2 mb-6 ">Weaving a Greener Future</h3>
            <p className="max-w-[600px] mb-9 text-white/80 text-lg">
              Green Threads is a Web3 marketplace addressing climate challenges
              by promoting circular fashion and sustainability. It connects
              eco-conscious buyers with manufacturers to sell surplus clothing
              and materials, reducing waste and advancing environmental
              responsibility through blockchain and carbon footprint tracking.
            </p>
            {/* buttons and socials */}

            <div className="flex flex-row items-center gap-8 ">
              <Button >
                <Link href="/marketplace">Marketplace </Link>
              </Button>
              <Button >
                <Link href="/sell">Sell Goods</Link>
              </Button>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
        <footer>
          <Footer />
        </footer>
    </section>
  );
}
