import Image from "next/image";
import imgSrc from "../assets/tree-2987962_1280.5ecf9df6.jpg";
import config from "@/config";

export function Hero() {
  return (
    <section className="relative not-prose md:-mt-[76px]">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative mx-auto px-4 max-w-7xl sm:px-6">
        <div className="pointer-events-none md:pt-[76px] pt-0" />
        <div className="md:py-20 py-12">
          <div className="mx-auto max-w-5xl md:pb-16 pb-10 text-center">
            <h1 className="font-bold leading-tighter font-heading tracking-tighter mb-4 md:text-6xl text-5xl">
              Create the future, breathe life into your business, and thrive.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-muted text-xl mb-6">
                <span className="sm:inline hidden">
                  Explore Technology and AI through the Vision of {config.NAME},
                  a Forward-Thinking Software Developer on a Mission for
                  Intelligent Solutions.
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="relative m-auto max-w-5xl">
              <Image
                alt="Understanding the product development cycle."
                decoding="async"
                height={576}
                loading="eager"
                src={imgSrc}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  maxWidth: "1024px",
                  maxHeight: "576px",
                  aspectRatio: "1.7777777777777777",
                  width: "100%",
                }}
                width={1024}
                className="mx-auto w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
