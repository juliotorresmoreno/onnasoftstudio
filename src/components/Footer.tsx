import config from "@/config";

export function Footer() {
  return (
    <footer className="relative not-prose border-gray-200 border-t">
      <div
        className="absolute inset-0 pointer-events-none "
        aria-hidden="true"
      />
      <div className="relative mx-auto px-4 max-w-7xl sm:px-6 text-gray-700">
        <div className="md:flex md:justify-between md:flex-row md:items-center md:py-8 py-6">
          <ul className="flex md:basis-1/3 -ml-2 mb-4 md:mb-0 md:ml-4 md:order-1 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4 rtl:ml-0">
            <li>
              <a
                href={config.LINKEDIN}
                className="text-muted text-sm hover:bg-pink-100 focus:outline-none focus:ring-4 focus:ring-gray-200 inline-flex items-center p-2.5 rounded-lg"
                aria-label="Linkedin"
              >
                <svg
                  data-icon="tabler:brand-linkedin"
                  className="h-8 w-8"
                  height="1em"
                  width="1em"
                  viewBox="0 0 24 24"
                >
                  <symbol id="ai:tabler:brand-linkedin">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5" />
                      <path d="M16 16v-3a2 2 0 0 0-4 0" />
                    </g>
                  </symbol>
                  <use xlinkHref="#ai:tabler:brand-linkedin" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={config.GITHUB}
                className="text-muted text-sm hover:bg-pink-100 focus:outline-none focus:ring-4 focus:ring-gray-200 inline-flex items-center p-2.5 rounded-lg"
                aria-label="Github"
              >
                <svg
                  data-icon="tabler:brand-github"
                  className="h-8 w-8"
                  height="1em"
                  width="1em"
                  viewBox="0 0 24 24"
                >
                  <symbol id="ai:tabler:brand-github">
                    <path
                      d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </symbol>
                  <use xlinkHref="#ai:tabler:brand-github" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href={config.YOUTUBE}
                className="text-muted text-sm hover:bg-pink-100 focus:outline-none focus:ring-4 focus:ring-gray-200 inline-flex items-center p-2.5 rounded-lg"
                aria-label="Linkedin"
              >
                <svg
                  data-icon="tabler:brand-youtube"
                  className="h-8 w-8"
                  height="1em"
                  width="1em"
                  viewBox="0 0 24 24"
                >
                  <symbol id="ai:tabler:brand-youtube">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    >
                      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 5v5m0-8v.01M12 16v-5" />
                      <path d="M16 16v-3a2 2 0 0 0-4 0" />
                    </g>
                  </symbol>
                  <use xlinkHref="#ai:tabler:brand-youtube" />
                </svg>
              </a>
            </li>
          </ul>
          <div className="mr-4 md:basis-2/3 text-lg">
            Made by {config.NAME} · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
