// import type { Metadata } from "next";
// import Link from "next/link";
// import { DownloadIcon, ExternalLinkIcon, LinkedinIcon, ArrowRightIcon, FileTextIcon } from "lucide-react";

// import { cn } from "@/lib/utils";

// export const metadata: Metadata = {
//   title: "Resume",
//   description: "Download my latest resume or view my professional experience and skills.",
// };

// export default function Page() {
//   const resumeActions = [
//     {
//       id: "download",
//       title: "Download PDF",
//       description: "Get the latest version of my resume in PDF format",
//       href: "/resume/tarunpreet-singh-resume-2025.pdf",
//       icon: DownloadIcon,
//       download: true,
//       primary: true,
//     },
//     {
//       id: "view",
//       title: "View Online",
//       description: "View my resume directly in your browser",
//       href: "/resume/tarunpreet-singh-resume-2025.pdf",
//       icon: ExternalLinkIcon,
//       target: "_blank",
//       primary: false,
//     },
//     {
//       id: "linkedin",
//       title: "LinkedIn Profile",
//       description: "Connect with me on LinkedIn for more details",
//       href: "https://linkedin.com/in/tarunpreet-singh", // Update with your actual LinkedIn
//       icon: LinkedinIcon,
//       target: "_blank",
//       primary: false,
//     },
//   ];

//   return (
//     <div className="min-h-svh [--color-resume:#059669] dark:[--color-resume:#10b981]">
//       <div className="screen-line-after px-4">
//         <h1 className="text-3xl font-semibold">Resume</h1>
//       </div>

//       <div className="screen-line-after p-4">
//         <p className="font-mono text-sm text-balance text-muted-foreground">
//           {metadata.description}
//         </p>
//       </div>

//       <div className="space-y-0">
//         {resumeActions.map((action) => (
//           <Link
//             key={action.id}
//             href={action.href}
//             {...(action.download && { download: true })}
//             {...(action.target && { target: action.target })}
//             {...(action.target === "_blank" && { 
//               rel: "noopener noreferrer" 
//             })}
//             className="group/action flex items-center border-b border-edge pr-4 transition-colors hover:bg-muted/50"
//           >
//             <action.icon
//               className="mx-4 size-5 shrink-0 text-(--color-resume)"
//               aria-hidden
//             />

//             <div className="border-l border-dashed border-edge p-4 flex-1">
//               <h2 className="leading-snug font-medium text-balance underline-offset-4 group-hover/action:underline">
//                 {action.title}
//               </h2>
//               <p className="text-sm text-muted-foreground mt-1">
//                 {action.description}
//               </p>
//             </div>

//             {action.primary && (
//               <span
//                 className="shrink-0 rounded-md bg-success px-1.5 font-mono text-sm font-medium text-white text-shadow-xs"
//                 aria-hidden
//               >
//                 Primary
//               </span>
//             )}

//             <ArrowRightIcon
//               className="mx-2 size-4 shrink-0 text-muted-foreground group-hover/action:text-foreground transition-colors"
//               aria-hidden
//             />
//           </Link>
//         ))}
//       </div>

//       {/* Resume Preview Section */}
//       <div className="screen-line-before screen-line-after mt-8">
//         <div
//           className={cn(
//             "h-8",
//             "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
//             "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
//           )}
//         />
//       </div>

//       <div className="p-4">
//         <div className="flex items-center gap-2 mb-4">
//           <FileTextIcon className="size-5 text-(--color-resume)" />
//           <h2 className="text-xl font-semibold">Resume Preview</h2>
//         </div>
//         <div className="w-full max-w-4xl mx-auto">
//           <iframe 
//             src="/resume/tarunpreet-singh-resume-2025.pdf"
//             className="w-full h-96 border border-edge rounded-lg bg-white"
//             title="Resume Preview"
//           />
//         </div>
//       </div>

//       <div className="h-4" />
//     </div>
//   );
// } type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Resume",
//   description: "A collection of reusable compone.",
// };
