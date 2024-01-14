
export function Container({ children }: React.PropsWithChildren) {
  return (
    <section className="relative not-prose scroll-mt-[72px]" id="about">
      <div
        className="absolute inset-0 pointer-events-none -z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 " />
      </div>
      <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-7xl">
        {children}
      </div>
    </section>
  );
}
