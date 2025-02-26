import { useRouter } from "next/navigation"
export default function AboutSection(){
    const router = useRouter();
   const movetoAboutPage = ()=>{
        router.push('/homepage/about')
   }
    return <>
        <div className="flex w-full ">
               <img src="/aboutimage.jpg" alt="image xa" className="w-2/4"/>
               <div className="about-prop w-2/4 p-8 space-y-4 bg-white text-deep-green flex flex-col justify-center pr-10">
                        <h1 className="text-4xl">Welcome to FullBari</h1>
                        <p className="font-light text-lg">Full Bari is more than just an e-commerce store—it's a family-driven passion for bringing the beauty of nature into every home. Started as a small initiative with my Amma, our business is rooted in love for plants and the joy they bring to indoor spaces. We carefully curate a selection of vibrant, easy-to-care-for indoor plants that add freshness, elegance, and tranquility to any environment. Whether you're looking to purify the air, decorate your space, or embrace a greener lifestyle, Full Bari is here to help you find the perfect plant for your home.</p>
                        <button id="btn" onClick={movetoAboutPage} className="w-fit p-2 border rounded-md font-semibold text-white bg-deep-green">More About us</button>
               </div> 
        </div>
    </>
}