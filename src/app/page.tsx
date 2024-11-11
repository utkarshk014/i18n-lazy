"use client";
import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLazyI18n } from "i18n-lazy";

export default function Home() {
  const { translate } = useLazyI18n();
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-20 pb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            {translate("Effortless Internationalization")}
            <br />
            <span className="text-primary">
              {translate("for Modern Web Apps")}
            </span>
          </h1>
          <p className="text-md text-muted-foreground mb-8">
            {translate("Translate your content instantly with zero effort.")}
          </p>
          <Button size="lg" asChild>
            <a href="/docs" className="inline-flex items-center">
              {translate("Read the Docs")}
              <Book className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
        <h1>
          {translate("it is  a youtube video, please watch and have fun")}
        </h1>
        <div className="max-w-6xl mx-auto mb-20">
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/Dw7Eo8giBWg?si=NsyYpFRLWP7pXkjN&rel=0&modestbranding=1&controls=1&showinfo=0&fs=1&playsinline=1&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
