"use client"
import AboutSection from "@/components/aboutsec";
import { useRouter } from "next/navigation"; 
import ProductPage from "./homepage/products/page";

import FooterTop from "@/components/footer-top";
export default function Homepage() {
   const router = useRouter();
   const movetoProductpage = () =>{
    router.push('/homepage/products');
   }
  return (
  <div className="w-screen h-auto flex flex-col items-center">
    {/* hero secotion */}
    <div className="h-[calc(100vh-8rem)] w-screen relative flex bg-white justify-center pt-6">
      <div className="text-black w-full h-full p-20 bg-white space-y-5 pb-11 pr-9">
        <h1 className="text-8xl text-emerald-900">Full Bari</h1>
        <h2 className="text-5xl w-2/4 uppercase font-light text-deep-green">
          {`Bringing Nature Closer to You!`}
        </h2>
        <p className="text-lg w-2/4 text-deep-green">
          FullBari brings nature into your home with beautifully curated indoor
          plants, adding freshness, elegance, and tranquility to your space.
        </p>
        <button id="btn" className="border p-2 bg-deep-green rounded-md text-white font-semibold" onClick={movetoProductpage}>shop now</button>
      </div>

      {/* Image positioned at the bottom left */}
      <div className="absolute bottom-24 right-20">
        <img src="/plant1.png" alt="Plant" className="h-3/4 w-auto" />
      </div>
    </div>
    {/* about section */}
    <AboutSection></AboutSection>
    <ProductPage></ProductPage>
    <FooterTop></FooterTop>
    </div>
  );
}
