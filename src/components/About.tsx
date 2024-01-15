import Image from "next/image";
import imgSrc from "../assets/photo.f08982e1_1pDSdg.webp";
import config from "@/config";

export function About() {
  return (
    <section className="relative not-prose scroll-mt-[72px] bg-violet-100" id="about">
      <div
        className="absolute inset-0 pointer-events-none -z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-blue-50 " />
      </div>
      <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-7xl">
        <div className="mx-auto max-w-7xl md:px-8 p-4">
          <div className="md:flex md:gap-16">
            <div className="md:basis-1/2 self-center">
              <div className="text-lg mb-12">
                <h3 className="font-bold text-2xl mb-2 sm:text-3xl tracking-tight">
                  About me
                </h3>
                <p className="text-justify">
                  Welcome to my website! I&apos;m Julio Cesar Jr Torres Moreno,
                  an experienced JavaScript Backend Developer with a strong
                  focus on security. Over the years, I&apos;ve refined my skills
                  in JavaScript, NodeJS, AWS, and real-time messaging
                  integration, leading impactful projects that emphasize robust
                  implementation and a full-stack development approach.
                </p>
                <br />
                <p className="text-justify">
                  More recently, I&apos;ve embarked on an exciting journey into
                  the realms of data science, exploring areas like Natural
                  Language Processing (NLP) and the captivating world of
                  Transformers. My commitment now extends to staying on the
                  cutting edge of these fields, adding even more dimensions to
                  my expertise.
                </p>
                <br />
                <p className="text-justify">
                  Whether it&apos;s crafting secure backend solutions or delving
                  into the transformative power of data, I&apos;m always ready
                  for fresh, user-centric challenges. With a solid foundation in
                  JavaScript and a growing passion for data science, I&apos;m
                  here to contribute to innovative projects and embrace the
                  ever-evolving tech landscape.
                </p>
              </div>



              <div className="mx-auto gap-8 grid gap-y-4 md:gap-y-8 lg:grid-cols-3 sm:grid-cols-2">
                
                


              <div>
                  <div className="flex flex-row max-w-none">
                    <div className="flex justify-center">
                      <svg
                        className="flex justify-center items-center bg-green-600  h-7 mr-2 p-1 rounded-full rtl:ml-2 rtl:mr-0 text-gray-50 w-7"
                        data-icon="tabler:brand-linkedin"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                      >
                        <use xlinkHref="#ai:tabler:brand-linkedin" />
                      </svg>
                    </div>
                    <div className="mt-0.5">
                      <div className="rtl:ml-0 ml-2 rtl:mr-2  font-medium leading-6 text-lg">
                        <a
                          href={config.LINKEDIN}
                          className="cursor-pointer"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Linkedin
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


                <div>
                  <div className="flex flex-row max-w-none">
                    <div className="flex justify-center">
                      <svg
                        className="flex justify-center items-center bg-green-600  h-7 mr-2 p-1 rounded-full rtl:ml-2 rtl:mr-0 text-gray-50 w-7"
                        data-icon="tabler:brand-github"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                      >
                        <use xlinkHref="#ai:tabler:brand-github" />
                      </svg>
                    </div>
                    <div className="mt-0.5">
                      <div className="rtl:ml-0 ml-2 rtl:mr-2  font-medium leading-6 text-lg">
                        <a
                          href={config.GITHUB}
                          className="cursor-pointer"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


                <div>
                  <div className="flex flex-row max-w-none">
                    <div className="flex justify-center">
                      <svg
                        className="flex justify-center items-center bg-green-600  h-7 mr-2 p-1 rounded-full rtl:ml-2 rtl:mr-0 text-gray-50 w-7"
                        data-icon="tabler:brand-youtube"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                      >
                        <symbol id="ai:tabler:brand-youtube">
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                          >
                            <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                            <path d="m10 9l5 3l-5 3z" />
                          </g>
                        </symbol>
                        <use xlinkHref="#ai:tabler:brand-youtube" />
                      </svg>
                    </div>
                    <div className="mt-0.5">
                      <div className="rtl:ml-0 ml-2 rtl:mr-2  font-medium leading-6 text-lg">
                        <a
                          href={config.YOUTUBE}
                          className="cursor-pointer"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Youtube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>






                




              </div>
            </div>
            <div className="md:basis-1/2 md:mt-0 mt-10" aria-hidden="true">
              <div className="relative m-auto max-w-4xl">
                <Image
                  alt="Colorful Image"
                  decoding="async"
                  height={500}
                  loading="lazy"
                  src={imgSrc}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                    height: "auto",
                    aspectRatio: 1,
                  }}
                  width={500}
                  className="mx-auto w-full bg-gray-500 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
