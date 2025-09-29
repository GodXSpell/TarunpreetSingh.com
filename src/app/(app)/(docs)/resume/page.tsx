import {
  ArrowRightIcon,
  DownloadIcon,
  ExternalLinkIcon,
  FileTextIcon,
  LinkedinIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download my latest resume or view my professional experience and skills.",
};

export default function Page() {
  const resumeActions = [
    {
      id: "download",
      title: "Download PDF",
      description: "Get the latest version of my resume in PDF format",
      href: "https://drive.google.com/uc?export=download&id=1QwTCJSI709YPVUH9W0VcvLQuWAmAS8ww",
      icon: DownloadIcon,
      download: true,
      primary: true,
    },
    {
      id: "view",
      title: "View Online",
      description: "View my resume directly in your browser",
      href: "https://drive.google.com/file/d/1QwTCJSI709YPVUH9W0VcvLQuWAmAS8ww/view?usp=sharing",
      icon: ExternalLinkIcon,
      target: "_blank",
      primary: false,
    },
    {
      id: "linkedin",
      title: "LinkedIn Profile",
      description: "Connect with me on LinkedIn for more details",
      href: "https://www.linkedin.com/in/tarunpreet-singh-77b12b333/",
      icon: LinkedinIcon,
      target: "_blank",
      primary: false,
    },
  ];

  return (
    <div className="min-h-svh">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Resume</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="space-y-0">
        {resumeActions.map((action) => (
          <Link
            key={action.id}
            href={action.href}
            {...(action.download && { download: true })}
            {...(action.target && { target: action.target })}
            {...(action.target === "_blank" && {
              rel: "noopener noreferrer",
            })}
            className="group/action flex items-center border-b border-edge pr-4 transition-colors hover:bg-muted/50"
          >
            <action.icon
              className="mx-4 size-5 shrink-0 text-muted-foreground"
              aria-hidden
            />

            <div className="flex-1 border-l border-dashed border-edge p-4">
              <h2 className="leading-snug font-medium text-balance underline-offset-4 group-hover/action:underline">
                {action.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {action.description}
              </p>
            </div>

            {action.primary && (
              <span
                className="shrink-0 rounded-md bg-success px-1.5 font-mono text-sm font-medium text-white text-shadow-xs"
                aria-hidden
              >
                Primary
              </span>
            )}

            <ArrowRightIcon
              className="mx-2 size-4 shrink-0 text-muted-foreground transition-colors group-hover/action:text-foreground"
              aria-hidden
            />
          </Link>
        ))}
      </div>

      {/* Resume Preview Section */}
      <div className="screen-line-before screen-line-after mt-8">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center gap-2">
          <FileTextIcon className="size-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold">Resume Preview</h2>
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <iframe
            src="https://drive.google.com/file/d/1QwTCJSI709YPVUH9W0VcvLQuWAmAS8ww/view?usp=sharing"
            className="h-96 w-full rounded-lg border border-edge bg-white"
            title="Resume Preview"
          />
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
}
