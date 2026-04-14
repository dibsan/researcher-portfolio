import { profile } from "../data/profileData";

export default function FloatingCVButton() {
  return (
    <a
      href={profile.cv}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-teal-700 px-4 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-teal-800 sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-sm"
    >
      Download CV
    </a>
  );
}