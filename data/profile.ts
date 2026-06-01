import { siteConfig } from "../lib/site";

export interface ProfileData {
  name: string;
  role: string;
  area: string;
  education: string;
  bio: string;
  mission: string;
  tagline: string;
  location: string;
  status: string;
  primaryStack: string[];
}

export const profileData: ProfileData = {
  name: siteConfig.name,
  role: siteConfig.role,
  area: siteConfig.area,
  education: siteConfig.education,
  bio: siteConfig.profileBio,
  mission: siteConfig.mission,
  tagline: siteConfig.tagline,
  location: siteConfig.location,
  status: siteConfig.status,
  primaryStack: ["PHP", "MySQL", "React", "Docker", "Linux", "n8n"],
};
