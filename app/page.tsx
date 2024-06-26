import Image from "next/image";
import laptop from "@/public/Images/dmitry-chernyshov-mP7aPSUm7aE-unsplash-removebg-preview.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaLock, FaMessage, FaRecycle, FaShield, FaTag, FaTruck, FaUpload } from "react-icons/fa6";
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

export default function Home() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute grid grid-cols-7 z-0">
        {/* <div className="w-48 h-48 border rounded-full bg-indigo-900 blur-3xl"></div> */}
      </div>
      {/* Introductory Banner */}
      <div className="relative grid grid-cols-1 md:grid-cols-7 gap-2 items-center z-10 border-x-2 border-b-2 p-3 shadow-lg min-h-screen">
        <div className="md:col-span-4">
          <h1 className="md:w-5/6 leading-tight lg:text-7xl md:text-5xl text-3xl font-bold md:font-semibold lg:font-extrabold md:mb-5">
            Step into TechDynasty
          </h1>
          <p className="md:w-5/6 md:text-xl text-lg mb-2 md:mb-6">
            Explore the future of electronics with TechDynasty. Discover the
            latest laptops, smartphones, and cutting-edge gadgets that redefine
            innovation and style.
          </p>
          <Button>
            <Link href="/products">Buy Now</Link>
          </Button>
        </div>
        <div className="md:col-span-3">
          <Image src={laptop} alt="tech dynasty laptop"></Image>
        </div>
      </div>
      {/* Brand Marquee */}
      <div className="py-7 md:py-10 lg:py-16">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-16">
          Available Brands
        </h1>
        <Marquee pauseOnHover={true} gradient={true} gradientWidth={100}>
          {brandLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.image}
              alt={logo.alt}
              height={100}
              className="mx-1"
            ></Image>
          ))}
        </Marquee>
      </div>
      {/* Why Choose us */}
      <div className="container py-7 md:py-10 lg:py-16">
        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-16 text-body-color">
          Why choose us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="px-10 py-8 rounded-xl bg-white hover:shadow-lg transition duration-500 border">
              <span className="h-16 w-16 bg-primary/10 rounded-full mb-4 inline-flex items-center justify-center">
                {item.icon}
              </span>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="opacity-80 text-base md:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
