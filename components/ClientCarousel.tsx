"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import laptops from "@/public/Images/laptops_01.png";
import laptops_02 from "@/public/Images/-laptops-under-30k-640-1633089483.jpg";
import laptop_3 from "@/public/Images/Lenovo-brands-laptop-list.png";

export default function ClientCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <Image src={laptops} alt="tech dynasty laptop" />
        </CarouselItem>
        <CarouselItem>
          <Image src={laptops_02} alt="tech dynasty laptop" />
        </CarouselItem>
        <CarouselItem>
          <Image src={laptop_3} alt="tech dynasty laptop" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
