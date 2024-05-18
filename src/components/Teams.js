import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import styles from "../styles/aboutus.module.css"

const imgs = [
  { image: "/Team-1.svg", describle: "Mr Niche" },
  { image: "/Team-1.svg", describle: "Mr Niche" },
  { image: "/Team-1.svg", describle: "Mr Niche" },
  { image: "/Team-1.svg", describle: "Mr Niche" },
  { image: "/Team-1.svg", describle: "Mr Niche" },
];


export const Teams = () => {
  return (
    <div className="flex justify-center items-center mt-5 mb-14">
      <div className="w-[95%] lg:w-[80%] ">
        <div className={`${styles.textComponent} pb-2`} >
          <p className={styles.textColor}>Our Team</p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl p-4 mx-auto"
        >
          <CarouselContent>
            {imgs.map((img, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="relative group">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image src={img.image} width={0} height={0} sizes="100vw" className="w-full" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-white text-xl">{img.describle}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious style={{ background: "linear-gradient(96.63deg, #D79AF5 3.04%, #9393F5 99.24%)" }} />
            <CarouselNext style={{ background: "linear-gradient(96.63deg, #D79AF5 3.04%, #9393F5 99.24%)" }} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Teams;
