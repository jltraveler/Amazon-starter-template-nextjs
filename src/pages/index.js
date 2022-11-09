import Head from "next/Head";
import Header from '../components/Header';
import Banner from "../components/Banner";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
    return ( 
        <div className="bg-gray-100 " >
        <Head >
        <title> My Clone</title> 
        </Head>
        <Header/> 
        <main className="max-w-screen-2xl mx-auto">
            {/* BANNER  */}
<Banner />

            {/* PRODUCT FEED  */}
            <ProductFeed products={products}/> 
            <p></p>
        </main>
        </div>
    );
}
export async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());
    return {props: {
        products
        }
    }
};

// https://fakestoreapi.com/products