'use client'

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

import { projectData } from "../data/data";
import Markdown from "react-markdown";

export function CaruselSection(){
    return(
        <Carousel
            className="w-full pb-5"
            plugins={[
                Autoplay({
                  delay: 6000,
                }),
            ]}
        >
          <CarouselContent>
            {projectData.map((project, index) => (
              <CarouselItem key={index} className="flex justify-start items-start">
                <Card className="w-[70%]">
                  <CardContent className="text-left p-5">
                    <p className="text-lg font-semibold">{project.name}</p>
                    <p className="text-sm text-neutral-700">{project.description}</p>

                    <div className="gap-1 mt-3 flex flex-wrap">
                      {project.techStack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                    
                  <CardDescription className="text-left px-5 pb-3">
                    <div className="gap-1 mt-1 flex flex-wrap">
                      {project.mateNinfo.map((info) => (
                        <Badge variant="secondary" key={info}>{info}</Badge>
                      ))}
                    </div>
                    
                    <div className="mt-5 prose prose-neutral text-sm max-w-none">
                      <Markdown>{project.content}</Markdown>
                    </div>
                  </CardDescription>


                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    )
}