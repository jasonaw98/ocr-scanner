import { CloudSun } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 pl-2 pt-2">
        <CloudSun size={30} strokeWidth={2.5} className="text-yellow-400" />
        <h1 className="text-xl font-bold">Good Morning</h1>
      </div>

      <div className="flex justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="aspect-video">
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>
                        You have 3 unread messages.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
