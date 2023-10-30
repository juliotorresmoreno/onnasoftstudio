export function Contact() {
  return (
    <section className="relative not-prose scroll-mt-[72px]" id="contact">
      <div
        className="absolute inset-0 pointer-events-none -z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-0" />
      </div>
      <div className="relative px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default max-w-7xl mx-auto">
        <div className="mb-8 md:mx-auto md:mb-12 text-center max-w-3xl">
          <h2 className="font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl md:text-4xl">
            We are here to help!
          </h2>
        </div>
        <div className="grid sm:gap-y-8 lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="relative flex flex-col rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6">
            <div className="text-xl font-bold">General support</div>
            <p className="text-muted mt-2">
              Chat with us for inquiries related to account management, website
              navigation, payment issues, accessing purchased templates or
              general questions about the website&apos;s functionality.
            </p>
          </div>
          <div className="relative flex flex-col rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6">
            <div className="text-xl font-bold">Contact sales</div>
            <p className="text-muted mt-2">
              Chat with us for questions about purchases, customization options,
              licensing for commercial use, inquiries about specific template,
              etc.
            </p>
          </div>
          <div className="relative flex flex-col rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6">
            <div className="text-xl font-bold">Technical support</div>
            <p className="text-muted mt-2">
              Chat with us when facing issues like template installation,
              problems editing difficulties, compatibility issues with software
              or download errors, or other technical challenges related to using
              the templates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
