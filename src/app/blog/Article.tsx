import { locale } from "@/lib/date";
import Image from "next/image";

export interface ArticleProps {
  title: string;
  content: string;
  description: string;
  shortUrl: string;
  imageUrl: string;
  category: string;
  keywords: string[];
  createdAt: Date;
}

const showCategory = false;

export function Article({
  title,
  content,
  description,
  shortUrl,
  imageUrl,
  category,
  keywords,
  createdAt,
}: ArticleProps) {
  return (
    <li className="mb-12 md:mb-20">
      <article className="max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 md:grid-cols-2">
        <a className="relative block group" href={"/blog/" + shortUrl}>
          <div className="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 rounded shadow-lg">
            <Image
              src={imageUrl}
              width={500}
              height={300}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                maxWidth: "900px",
                maxHeight: "506.25px",
                aspectRatio: "1.7777777777777777",
                width: "100%",
              }}
              priority
              alt=""
              className="absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400"
              decoding="async"
            />
          </div>
        </a>
        <div className="">
          <header>
            <div className="mb-1">
              <span className="text-sm">
                {showCategory && (
                  <>
                    ·{" "}
                    <a
                      className="capitalize hover:underline"
                      href={`/category/${category}`}
                    >
                      {category}
                    </a>
                  </>
                )}
              </span>
            </div>
            <h2
              style={{ marginTop: "-.8rem" }}
              className="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading"
            >
              <a
                className="hover:text-pink-600 transition ease-in duration-200"
                href={"/blog/" + shortUrl}
              >
                {title}
              </a>
            </h2>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 inline-block -mt-0.5"
              data-icon="tabler:clock"
            >
              <symbol id="ai:tabler:clock">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />
                  <path d="M12 7v5l3 3" />
                </g>
              </symbol>
              <use xlinkHref="#ai:tabler:clock" />
            </svg>
            <time
              dateTime="Fri Aug 11 2023 19:00:00 GMT-0500 (Colombia Standard Time)"
              className="inline-block"
            >
              {locale(createdAt)}
            </time>
          </header>
          <div className="flex-grow text-mute text-xl">
            {description.substring(0, 200) + " ..."}
          </div>
        </div>
      </article>
    </li>
  );
}
