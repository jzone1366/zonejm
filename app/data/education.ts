export interface Education {
  degree: string;
  institution: string;
  logo: string;
  period: string;
}

const educations: Education[] = [
  {
    degree: "B.S. in Information Technology and Web Science",
    institution: "RPI",
    logo: "rpi_best.jpg",
    period: "2010 - 2014",
  },
  // Add more education entries here
];

export default educations;
