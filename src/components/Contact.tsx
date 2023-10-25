import config from "@/config";

export function Contact() {
  return (
    <section className="relative not-prose scroll-mt-[72px]" id="contact">
      <div
        className="absolute inset-0 pointer-events-none -z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-0" />
      </div>
      <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-7xl">
        <div className="text-center mb-8 md:mb-12 md:mx-auto max-w-3xl">
          <h2 className="font-bold leading-tighter font-heading tracking-tighter text-heading md:text-4xl text-3xl">
            Elevate Your Digital Presence
          </h2>
          <p className="text-muted text-xl mt-4">
            Ready to take the next step? Contact us now and discover how we can
            help you reach your goals!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 sm:gap-y-8">
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="font-bold text-xl">General support</div>
            <p className="text-muted mt-2">
              Chat with us for inquiries related to account management, website
              navigation, payment issues, accessing purchased templates or
              general questions about the website&apos;s functionality.
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              className="text-primary h-12 mb-6 w-12"
              data-icon="tabler:headset"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
            >
              <symbol id="ai:tabler:headset">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M4 14v-3a8 8 0 1 1 16 0v3m-2 5c0 1.657-2.686 3-6 3" />
                  <path d="M4 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3zm11 0a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3z" />
                </g>
              </symbol>
              <use xlinkHref="#ai:tabler:headset" />
            </svg>
            <div className="font-bold text-xl">Phone</div>
            <p className="text-muted mt-2">
              <a
                href={`https://api.whatsapp.com/send?phone=${config.PHONE}&text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services`}
                target="_blank"
              >
                {config.PHONE}{" "}
              </a>
              <a />
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              className="text-primary h-12 mb-6 w-12"
              data-icon="tabler:mail"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
            >
              <symbol id="ai:tabler:mail">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                  <path d="m3 7l9 6l9-6" />
                </g>
              </symbol>
              <use xlinkHref="#ai:tabler:mail" />
            </svg>
            <div className="font-bold text-xl">Email</div>
            <p className="text-muted mt-2">
              <a
                href={`mailto:${config.EMAIL}?subject=Inquiry%20About%20[Your%20Subject]`}
                target="_blank"
              >
                {config.EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
