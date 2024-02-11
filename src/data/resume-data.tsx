import { ArealizeLogo, RocketLogo, ThorvaldLogo, ToreLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Julian Riise",
  initials: "JR",
  location: "Oslo, Norway",
  locationLink: "https://www.google.com/maps/place/Oslo",
  about:
    "Architect experienced in building web applications.",
  summary:
    "Building simulation tools in Python, React and Typescript for web applications in a Norwegian startup.",
  avatarUrl: "https://avatars.githubusercontent.com/u/77626314?v=4",
  personalWebsiteUrl: "https://julianriise.com",
  contact: {
    email: "hi@julianriise.com",
    tel: "+4794082912",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/julianriise",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/julianriise/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/julianriise",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Oslo School of Architecture and Design",
      degree: "Masters Degree in Architecture",
      start: "2016",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Arealize",
      link: "https://arealize.ai",
      badges: [],
      title: "Architect",
      logo: ArealizeLogo,
      start: "2022",
      end: "Present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Rocket AS",
      link: "https://rocketmedia.no",
      badges: [],
      title: "Founder and sales manager",
      logo: RocketLogo,
      start: "2020",
      end: "2021",
      description:
        "Founded a media company that produced content for social media. I was responsible for sales and marketing.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Redux",
    "Node.js"
  ],
  projects: [
    {
      title: "Tore Austad",
      techStack: [
        "Astro",
        "SEO"
      ],
      description: "Training blog on first page of Google.",
      logo: ToreLogo,
      link: {
        label: "toreaustad.no",
        href: "https://www.toreaustad.no/",
      },
    },
    {
      title: "Thorvald",
      techStack: [
        "Landing page",
        "Swift"
      ],
      description: "A personal training app for iOS.",
      logo: ThorvaldLogo,
      link: {
        label: "thorvald.app",
        href: "https://www.thorvald.app/",
      },
    }
  ],
} as const;
