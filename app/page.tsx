import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaLock,
  FaMessage,
  FaRecycle,
  FaShield,
  FaTag,
  FaTruck,
} from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import samsung from "@/public/Images/samsung-logo.png";
import dell from "@/public/Images/dell-logo.png";
import hp from "@/public/Images/hp-logo.png";
import lenovo from "@/public/Images/lenovo-logo.png";
import apple from "@/public/Images/apple-logo.jpg";
import asus from "@/public/Images/asus-logo.png";
import ms from "@/public/Images/ms-logo.jpg";
import toshiba from "@/public/Images/toshiba-logo.png";
import sony from "@/public/Images/vaio-logo.jpg";
import compaq from "@/public/Images/compaq-logo.png";
import getProducts from "@/lib/getProducts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import laptops from "@/public/Images/laptops_01.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ClientCarousel from "@/components/ClientCarousel";

const brandLogos = [
  {
    image: samsung,
    alt: "samsung",
  },
  {
    image: dell,
    alt: "dell",
  },
  {
    image: hp,
    alt: "hp",
  },
  {
    image: lenovo,
    alt: "lenovo",
  },
  {
    image: apple,
    alt: "apple",
  },
  {
    image: asus,
    alt: "asus",
  },
  {
    image: ms,
    alt: "ms",
  },
  {
    image: toshiba,
    alt: "toshiba",
  },
  {
    image: sony,
    alt: "sony",
  },
  {
    image: compaq,
    alt: "compaq",
  },
];

const whyChooseUs = [
  {
    icon: <FaShield />,
    title: "Unmatched Quality",
    description:
      "We offer top-of-the-line electronics from trusted brands, ensuring you receive products that are reliable and built to last.",
  },
  {
    icon: <FaTag />,
    title: "Best Prices",
    description:
      "Enjoy competitive pricing and exclusive discounts on all our products. Get the best value for your money with TechDynasty.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Shipping",
    description:
      "Experience quick and reliable delivery. We ensure your orders reach you in perfect condition and in the shortest time possible.",
  },
  {
    icon: <FaMessage />,
    title: "Exceptional Support",
    description:
      "Our dedicated support team is here to assist you 24/7. From pre-purchase inquiries to after-sales service, we’ve got you covered.",
  },
  {
    icon: <FaRecycle />,
    title: "Easy Returns",
    description:
      "Shop with confidence with our hassle-free return policy. If you're not satisfied, returning your purchase is quick and straightforward.",
  },
  {
    icon: <FaLock />,
    title: "Secure Shopping",
    description:
      "Your privacy and security are our top priorities. Shop safely with our advanced security measures and encrypted transactions.",
  },
];

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="relative">
      {/* Introductory Banner */}
      <div className="relative grid grid-cols-1 md:grid-cols-7 gap-2 items-center z-10 border-x-2 border-b-2 p-3 border-[#D9D9D9]/20 shadow-lg min-h-screen bg-[#D9D9D9] bg-opacity-[13.5%] filter ">
        <div className="absolute w-40 md:w-72 h-40 md:h-72 animate-blob rounded-full blur-xl opacity-50 filter mix-blend-multiply right-4 md:right-24 -z-50 bg-rose-600 animation-delay-2000"></div>
        <div className="absolute w-40 md:w-72 h-40 md:h-72 animate-blob rounded-full blur-xl opacity-50 filter mix-blend-multiply right-16 md:right-72 -z-50 bg-purple-600"></div>
        <div className="absolute w-40 md:w-72 h-40 md:h-72 animate-blob animation-delay-4000 rounded-full blur-xl opacity-50 filter mix-blend-multiply right-10 md:right-48 bottom-24 -z-50 bg-blue-600"></div>
        <div className="md:col-span-4">
          <h1 className="md:w-5/6 leading-tight lg:text-7xl md:text-5xl text-3xl font-bold md:font-semibold lg:font-extrabold md:mb-5 bg-gradient-to-br from-[#1140E6] via-[#0B86E4] to-[#00FFE0] text-transparent bg-clip-text">
            Step into TechDynasty
          </h1>
          <p className="md:w-5/6 md:text-xl text-lg mb-2 md:mb-6 text-slate-200">
            Explore the future of electronics with TechDynasty. Discover the
            latest laptops, smartphones, and cutting-edge gadgets that redefine
            innovation and style.
          </p>
          <Button>
            <Link href="/products">Buy Now</Link>
          </Button>
        </div>
        <div className="md:col-span-3">
          <ClientCarousel />
        </div>
      </div>
      <div className="h-12 w-full bg-gradient-to-r from-[#1140E6] via-[#147FD4] to-[#1F3BCE] mt-8 blur-3xl"></div>
      {/* Products showcase */}
      <div className="mt-5 md:mt-8">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-8 bg-gradient-to-br from-[#1140E6] via-[#0B86E4] to-[#00FFE0] text-transparent bg-clip-text">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-12 w-4/5 mx-auto">
          {products.slice(0, 9).map((product: any) => (
            <Card
              key={product._id}
              className="grid grid-rows-7 bg-[#443B5D] border-2 border-transparent text-white relative group"
            >
              <div className="absolute rounded-sm bg-gradient-to-tr from-blue-600 via-rose-600 to-yellow-600 filter blur -z-50 -inset-1 opacity-70 group-hover:opacity-100 transition duration-1200 group-hover:duration-1000 animate-tilt"></div>
              <CardHeader className="row-span-4">
                <Image
                  src={product?.imageUrl}
                  alt={product?.productName}
                  height={250}
                  width={400}
                />
              </CardHeader>
              <CardContent className="row-span-2">
                <CardTitle>{product.productName}</CardTitle>
                <CardDescription>{product.shortDescription}</CardDescription>
                <CardDescription>Price: ${product.price}</CardDescription>
              </CardContent>
              <CardFooter className="row-span-1">
                <Button>
                  <Link href={`/products/${product._id}`}>Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center mt-4">
          <Button>
            <Link href="/products">Show more</Link>
          </Button>
        </div>
      </div>
      {/* Brand Marquee */}
      <div className="my-3 md:my-10">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-8 text-white/90">
          Available Brands
        </h1>
        <div className="relative">
          <div className="bg-[#D9D9D9]/30 filter blur-3xl absolute inset-0"></div>
          <Marquee gradientWidth={100}>
            {brandLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo.image}
                alt={logo.alt}
                height={100}
                width={200}
              ></Image>
            ))}
          </Marquee>
        </div>
      </div>
      {/* Why Choose us */}
      <div className="container py-7 md:py-12 lg:py-16">
        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-8 text-white">
          Why choose us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="px-10 py-8 rounded-xl bg-[#D9D9D9] bg-opacity-[13.5%] hover:shadow-xl transition duration-500 border border-white/10"
            >
              <span className="h-16 w-16 text-white bg-white/10 rounded-full mb-4 inline-flex items-center justify-center">
                {item.icon}
              </span>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#00FFE0]">
                {item.title}
              </h3>
              <p className="opacity-80 text-base md:text-lg text-white/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#1140E6] w-full h-4 blur-3xl"></div>
    </div>
  );
}
