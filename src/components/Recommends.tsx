export function Recommends() {
  return (
    <section className="relative not-prose scroll-mt-[72px]" id="recommends">
      <div
        className="absolute inset-0 pointer-events-none -z-[1]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 dark:bg-transparent" />
      </div>
      <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-7xl">
        <div className="text-center mb-8 md:mb-12 md:mx-auto max-w-3xl">
          <p className="font-bold dark:text-blue-200 text-base text-secondary tracking-wide uppercase">
            Recommends
          </p>
          <h2 className="font-bold leading-tighter font-heading tracking-tighter text-heading md:text-4xl text-3xl">
            Mostly Recommended Approaches to Start Your MVP
          </h2>
          <p className="text-muted text-xl mt-4">
            Provides a simple approach to quickly start developing your business
            idea
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 sm:gap-y-8">
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-nextjs"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
              <path d="M15 12v-3"></path>
            </svg>
            <div className="font-bold text-xl">Next.js</div>
            <p className="text-muted mt-2">
              Ideal for rapid MVP development, Next.js leverages React to
              quickly bring your projects to production.
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chart-infographic"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M7 3v4h4"></path>
              <path d="M9 17l0 4"></path>
              <path d="M17 14l0 7"></path>
              <path d="M13 13l0 8"></path>
              <path d="M21 12l0 9"></path>
            </svg>
            <div className="font-bold text-xl">KPI</div>
            <p className="text-muted mt-2">
              KPIs, or Key Performance Indicators, are measurable metrics that
              track performance over time for specific goals. They provide
              targets, measure progress, and offer valuable insights for
              informed decision-making across the organization.
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-robot-face"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z"></path>
              <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1"></path>
              <path d="M9 7l-1 -4"></path>
              <path d="M15 7l1 -4"></path>
              <path d="M9 12v-1"></path>
              <path d="M15 12v-1"></path>
            </svg>
            <div className="font-bold text-xl">Generative AI Models</div>
            <p className="text-muted mt-2">
              Artificial intelligence models capable of autonomously generating
              content, such as text, images, or music.
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <path d="M17.5 19H22m0 0l-2.5-2.5M22 19l-2.5 2.5M12 2L9.5 4.5L12 7" />
                <path d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2" />
                <path d="M6.756 5.5A7.497 7.497 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5" />
              </g>
            </svg>
            <div className="font-bold text-xl">Scrum</div>
            <p className="text-muted mt-2">
              An agile methodology that emphasizes collaboration, incremental
              delivery, and continuous adaptation, which can be beneficial for
              managing software development projects.
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-aws"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94"></path>
              <path d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1"></path>
              <path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5"></path>
              <path d="M3 9h3"></path>
              <path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6"></path>
              <path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"></path>
            </svg>
            <div className="font-bold text-xl">
              Continuous Integration and Continuous Deployment (CI/CD)
            </div>
            <p className="text-muted mt-2">
              Methodologies and practices that enable automated testing and code
              deployment, improving efficiency in software development and
              delivery.
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shield-lock"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
              <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 12l0 2.5"></path>
            </svg>
            <div className="font-bold text-xl">SonarQube</div>
            <p className="text-muted mt-2">
              A tool for continuous code quality inspection, which helps
              maintain code quality and identify areas for improvement.
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-api"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 13h5"></path>
              <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"></path>
              <path d="M20 8v8"></path>
              <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"></path>
            </svg>
            <div className="font-bold text-xl">RESTful APIs</div>
            <p className="text-muted mt-2">
              Designing your APIs in a RESTful manner to achieve efficient
              communication between the frontend and backend.
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-palette"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path>
              <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            </svg>
            <div className="font-bold text-xl">User-Centered Design (UCD)</div>
            <p className="text-muted mt-2">
              Focusing your development on the user experience, ensuring your
              software meets your customers&apos; needs.
            </p>
          </div>
          <div className="flex flex-col backdrop-blur bg-white border border-[#ffffff29] dark:bg-slate-900 dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 relative rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-cloud-lock-open"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1c.397 -1.768 -.285 -3.593 -1.788 -4.787c-1.503 -1.193 -3.6 -1.575 -5.5 -1s-3.315 2.019 -3.712 3.787c-2.199 -.088 -4.155 1.326 -4.666 3.373c-.512 2.047 .564 4.154 2.566 5.027"></path>
              <path d="M8 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
              <path d="M10 15v-2a2 2 0 0 1 3.736 -1"></path>
            </svg>
            <div className="font-bold text-xl">Open Source Transformers</div>
            <p className="text-muted mt-2">
              A quick and secure way to implement AI models in data-sensitive
              environments like banks is through On-Premise AI Solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
