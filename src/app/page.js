import Image from "next/image";

export const metadata = {
  title: "Julio C. Barajas Full Stack Developer",
  description:
    "Full Stack Developer skilled in end-to-end web development, from backend logic to user-friendly front-end design.",
  keywords: ["developer", "nextjs", "portfolio"],
  robots: "index, follow",
  canonical: "https://juliox.dev",
  language: "en",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: 'Julio C. Barajas Full Stack Developer',
    description: 'Full Stack Developer skilled in end-to-end web development, from backend logic to user-friendly front-end design.',
    url: 'https://juliox.dev',
    siteName: 'Julio C. Barajas Full Stack Developer',
    images: [
      {
        url: 'https://juliox.dev/ogimage.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://juliox.dev/ogimage.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Julio C. Barajas Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between gap-x-1">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">Julio C. Barajas</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              Full Stack focused on building products with extra attention to
              detail
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href="https://www.google.com/maps/place/culiacan"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe size-3"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                Culiacán, Sinaloa México
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              <a
                href="mailto:jcrbarajas@gmail.com"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail size-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
              <a
                href="tel:+526672480255"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone size-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/devjuliox"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                >
                  <path
                    fill="currentColor"
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/julioxdev"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                >
                  <title>LinkedIn</title>
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              <a href="mailto:jcrbarajas@gmail.com">
                <span className="underline">jcrbarajas@gmail.com</span>
              </a>
              <a href="tel:+526672480255">
                <span className="underline">+526672480255</span>
              </a>
            </div>
          </div>
          <span className="relative flex shrink-0 overflow-hidden rounded-xl size-28">
            <Image
              className="aspect-square h-full w-full"
              width="120"
              height="120"
              alt="julioxdev"
              src="/julio.jpeg"
            />
          </span>
        </div>

        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            As a Full Stack, I have successfully taken multiple products from 0
            to 1. Currently, I work mostly with JavaScript, React, Node.js, and
            Nextjs. I have over 5 years of experience in working remotely.
          </p>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experiencie</h2>
          <div className="rounded-lg bg-card text-card-foreground">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a className="hover:underline" href="https://parabol.co">
                    Coppel
                  </a>
                  <span className="inline-flex gap-x-1">
                    <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">
                      Remote
                    </div>
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  2020 - Present
                </div>
              </div>
              <h4 className="font-mono text-sm leading-none">
                Full Stack Developer
              </h4>
            </div>
            <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
              Currently developing digital marketing solutions at Coppel using
              TypeScript, JavaScript, React, and Next.js
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a className="hover:underline" href="https://parabol.co">
                    Azzule System
                  </a>
                  <span className="inline-flex gap-x-1">
                    <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">
                      On-site
                    </div>
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  2019 - 2020
                </div>
              </div>
              <h4 className="font-mono text-sm leading-none">
                Designer and Frontend Developer
              </h4>
            </div>
            <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
              I managed and designed web pages and systems using HTML, CSS, and
              JavaScript.
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a className="hover:underline" href="https://parabol.co">
                    Salud digna
                  </a>
                  <span className="inline-flex gap-x-1">
                    <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">
                      On-site
                    </div>
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  2018 - 2019
                </div>
              </div>
              <h4 className="font-mono text-sm leading-none">UI/UX Designer</h4>
            </div>
            <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
              Developed eCommerce workflows and innovative self-payment, ticket
              printing systems for enhanced customer experience.
            </div>
          </div>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          <div className="rounded-lg bg-card text-card-foreground">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a className="hover:underline" href="https://parabol.co">
                    ICAT
                  </a>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  2008 - 2012
                </div>
              </div>
            </div>
            <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
              As a Frontend Development student with a focus on UI, I
              specialized in building responsive websites using HTML, CSS, and
              JavaScript, while also gaining skills in UI design principles and
              tools to create intuitive and visually appealing user interfaces.{" "}
            </div>
          </div>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
              JavaScript
            </div>

            <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
              React/Next.js
            </div>
            <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
              Node.js
            </div>
            <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
              Parse Server
            </div>
            <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
              Eleventy
            </div>
            <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
              Astro
            </div>
          </div>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3 print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
              <div className="flex flex-col space-y-1.5">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight text-base">
                    <a
                      href="https://www.ikucocinajaponesa.com/"
                      target="_blank"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      Iku{" "}
                      <span className="size-1 rounded-full bg-green-500"></span>
                    </a>
                  </h3>
                  <div className="hidden font-mono text-xs underline print:flex">
                    ikucocinajaponesa.com
                  </div>
                  <p className="text-muted-foreground font-mono text-xs">
                    Developed a user-friendly digital menu for a restaurant.
                  </p>
                </div>
              </div>
              <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
                <div className="mt-2 flex flex-wrap gap-1">
                  <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                    Next.js
                  </div>
                  <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                    JavaScript
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
              <div className="flex flex-col space-y-1.5">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight text-base">
                    <a
                      href="https://esmeraldanails.com/"
                      target="_blank"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      Esmeraldanails{" "}
                      <span className="size-1 rounded-full bg-green-500"></span>
                    </a>
                  </h3>
                  <div className="hidden font-mono text-xs underline print:visible">
                    esmeraldanails.com
                  </div>
                  <p className="text-muted-foreground font-mono text-xs">
                    Reward system and blog for nail care customers.
                  </p>
                </div>
              </div>
              <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
                <div className="mt-2 flex flex-wrap gap-1">
                  <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                    Next.js
                  </div>
                  <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                    Javascript
                  </div>
                  <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                    MDX
                  </div>
                  <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                    Node.js
                  </div>
                  <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                    MongoDB Atlas
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
              <div className="flex flex-col space-y-1.5">
                <div className="space-y-1">
                  <h3 className="font-semibold tracking-tight text-base">
                    <a
                      href="https://juliox.dev/"
                      target="_blank"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      Juliox.dev{" "}
                      <span className="size-1 rounded-full bg-green-500"></span>
                    </a>
                  </h3>
                  <div className="hidden font-mono text-xs underline print:visible">
                    juliox.dev
                  </div>
                  <p className="text-muted-foreground font-mono text-xs">
                    My personal website and blog. Built with Next.js
                  </p>
                </div>
              </div>
              <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
                <div className="mt-2 flex flex-wrap gap-1">
                  <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                    Next.js
                  </div>
                  <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]">
                    MDX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
