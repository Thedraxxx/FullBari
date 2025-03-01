import Link from "next/link"


export default function FooterTop(){
    return (
        <>
            <div className="flex px-80 py-6 w-full justify-between text-black bg-white text-sm">
                <div className="space-y-1">
                    <h1 className="text-lg">FullBari</h1>
                    <div>Birtamod-5,Jhapa</div>
                    <div>call us:989898989 </div>
                    <div>Email: roshc10grg@gmail.com</div>
                </div>
                <div className="space-y-1">
                    <h1 className="text-lg">Information</h1>
                    <div><Link href="/homepage/about">About us</Link></div>
                    <div><Link href="/footer-pages/privacy-policy">Privacy Policy</Link></div>
                    <div><Link href="/footer-pages/terms">Terms and Conditions</Link></div>
                </div>
                <div className="space-y-1">
                    <h1 className="text-lg">Accounts</h1>
                    <div>My account</div>
                    <div>My order</div>
                    <div>whishlist</div>
                    <div>shippings</div>
                </div>
                <div className="space-y-1">
                    <div className="text-lg">
                        Category
                    </div>
                    <div><Link href="/homepage/products">Product</Link></div>
                </div>
            </div>
        </>
    )
}