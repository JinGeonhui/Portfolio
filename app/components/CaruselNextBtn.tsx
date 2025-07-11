"use client";

import * as React from "react";
import { useCarousel } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

// Autoplay 함수의 반환 타입을 사용
interface CarouselNextLoopProps extends React.ComponentProps<typeof Button> {
    autoplayRef: React.MutableRefObject<ReturnType<typeof Autoplay> | null>
}

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextLoopProps>(
  ({ 
    className, 
    variant = "outline", 
    size = "icon", 
    autoplayRef, 
    ...props 
  }, ref) => {
    const { orientation, api: carouselApi } = useCarousel();

    const handleNext = React.useCallback(() => {
    if (!carouselApi) return;

    // autoplay reset으로 깔끔하게 재설정
    autoplayRef.current?.reset();

    const selectedIndex = carouselApi.selectedScrollSnap();
    const totalSlides = carouselApi.scrollSnapList().length;

    if (selectedIndex === totalSlides - 1) {
        carouselApi.scrollTo(0);
    } 
    
    else {
        carouselApi.scrollNext();
    }

    // reset()으로 내부 타이머 재설정
    }, [carouselApi, autoplayRef]);

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        onClick={handleNext}
        disabled={!carouselApi}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);

CarouselNext.displayName = "CarouselNextBtn";

export { CarouselNext };