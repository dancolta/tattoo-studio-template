import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Lock icon */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-full border border-border flex items-center justify-center">
          <svg
            className="w-7 h-7 text-text-muted"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>

        <h1 className="font-heading text-2xl md:text-3xl font-bold text-text mb-3">
          Private Portfolio
        </h1>
        <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
          This experience is available by invitation only. If you received a link
          to view a portfolio, please use that direct link.
        </p>

        <Link
          href="https://nodesparks.com"
          className="inline-block text-sm text-text-muted/60 hover:text-text-muted transition-colors"
        >
          Powered by NodeSparks
        </Link>
      </div>
    </div>
  );
}
