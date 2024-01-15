export function CallToAction() {
  return (
    <section className="relative not-prose scroll-mt-[72px]">
      <div
        className="absolute inset-0 pointer-events-none -z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-0" />
      </div>
      <div className="relative px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center rounded-xl shadow-md p-6 mb-6 bg-white">
          <div className="md:mx-auto text-center mb-0 md:mb-0">
            <h2 className="leading-tighter text-heading text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
              Turn Your Idea into Success! Build Your MVP with Us
            </h2>
            <p className="mt-4 text-xl text-muted">
              Transform your vision into reality with my expertise. My MVP
              development skills will take you one step closer to success. Let
              me help you turn your ideas into a successful reality!
            </p>
          </div>
          <div className="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 mt-6">
            <div className="flex w-full sm:w-auto">
              <a
                className="btn-primary bg-violet-600 border-violet-600 hover:bg-violet-800 w-full sm:mb-0"
                rel="noopener noreferrer"
                href="/contact"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
