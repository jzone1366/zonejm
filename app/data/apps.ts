interface App {
  name: string;
  description: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  icon: string;
  screenshots: string[];
}

const apps: App[] = [
  {
    name: "PitchTrack",
    description: "Track pitch count, speed, and arm velocity with PitchTrack. View instant stats on your watch and deeper trends with the iOS app. Train smart, pitch better.",
    appStoreUrl: "https://apps.apple.com/us/app/pitchtrackapp/id6744333237",
    icon: "pitch_track.png", // We'll use an iOS icon from the Iconify set
    screenshots: [] // You can add screenshot URLs here
  }
];

export default apps;
