import correspondentImg from "@/assets/correspondent.png";
import headmasterImg from "@/assets/headmaster.png";
import heroBannerImg from "@/assets/hero-banner.png";
import aboutSchoolImg from "@/assets/about-school.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";

export const schoolInfo = {
  name: "Dolphin Nursery & Primary School",
  address: "No.18A, Vijayapuram, Thiruvarur, Tamil Nadu 610001",
  phone: "+91 96554 67791",
  email: "info@dolphinschool.in",
  mapLat: 10.7619261,
  mapLng: 79.6350767,
  mapIframe: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d79.6350767!3d10.7619261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzQzLjAiTiA3OcKwMzgnMDYuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`,
  workingHours: [
    { day: "Monday", hours: "7:30am – 7:30pm" },
    { day: "Tuesday", hours: "7:30am – 7:30pm" },
    { day: "Wednesday", hours: "7:30am – 7:30pm" },
    { day: "Thursday", hours: "7:30am – 7:30pm" },
    { day: "Friday", hours: "7:30am – 7:30pm" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
};

export const images = {
  heroBanner: heroBannerImg,
  aboutSchool: aboutSchoolImg,
  correspondent: correspondentImg,
  headmaster: headmasterImg,
};

export const leadership = [
  {
    id: 1,
    name: "Mr. Ramachandran K.",
    role: "Correspondent",
    qualification: "M.A., M.Ed., Ph.D.",
    image: correspondentImg,
    message:
      "Education is the most powerful weapon which you can use to change the world. At Dolphin School, we are committed to providing a nurturing environment where every child can discover their potential and grow into confident, responsible citizens.",
  },
  {
    id: 2,
    name: "Mr. Senthil Kumar P.",
    role: "Headmaster",
    qualification: "M.Sc., B.Ed.",
    image: headmasterImg,
    message:
      "Our dedicated team of educators works tirelessly to ensure that each student receives personalized attention and the best possible learning experience. We believe in holistic development — academic excellence combined with strong moral values.",
  },
];

export const importantNotes = [
  {
    id: 1,
    title: "Admissions Open for 2026-2027",
    date: "2026-02-20",
    description: "Applications are now being accepted for LKG, UKG, and Classes I to V for the academic year 2026-2027. Limited seats available.",
  },
  {
    id: 2,
    title: "Annual Day Celebration",
    date: "2026-03-15",
    description: "Join us for our grand Annual Day celebration featuring cultural performances, awards ceremony, and special guests.",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    date: "2026-03-05",
    description: "PTM scheduled for all classes. Parents are requested to attend and discuss their ward's progress.",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Academic Excellence Award",
    category: "Academic",
    year: "2025",
    image: gallery5,
    description: "Our students secured top ranks in district-level examinations with 100% pass rate and multiple distinction holders.",
  },
  {
    id: 2,
    title: "District Sports Champions",
    category: "Sports",
    year: "2025",
    image: gallery2,
    description: "Won overall championship at the District Level Inter-School Sports Meet in athletics and cricket.",
  },
  {
    id: 3,
    title: "Cultural Fest Winners",
    category: "Cultural",
    year: "2024",
    image: gallery1,
    description: "Students won multiple awards in dance, music, and drama at the State Level Cultural Festival.",
  },
  {
    id: 4,
    title: "Science Exhibition",
    category: "Academic",
    year: "2024",
    image: gallery4,
    description: "First prize at the Regional Science Exhibition for innovative project on renewable energy.",
  },
  {
    id: 5,
    title: "Best School Award",
    category: "Awards",
    year: "2024",
    image: gallery3,
    description: "Recognized as the Best Primary School in Thiruvarur district for overall excellence in education.",
  },
];

export const galleryImages = [
  { id: 1, src: gallery1, category: "Annual Day", title: "Annual Day Performances" },
  { id: 2, src: gallery2, category: "Sports", title: "Sports Day Events" },
  { id: 3, src: gallery3, category: "Campus", title: "Campus Entrance" },
  { id: 4, src: gallery4, category: "Events", title: "Science Lab Activities" },
  { id: 5, src: gallery5, category: "Events", title: "Prize Distribution" },
  { id: 6, src: gallery6, category: "Campus", title: "School Library" },
  { id: 7, src: aboutSchoolImg, category: "Campus", title: "Classroom Learning" },
  { id: 8, src: heroBannerImg, category: "Campus", title: "School Building" },
];

export const chatbotReplies: Record<string, string> = {
  admission: "Admissions for 2026-2027 are now open! We accept applications for LKG, UKG, and Classes I-V. Please visit the school with the child's birth certificate, Aadhaar card, and passport-sized photos. Contact us at +91 96554 67791 for more details.",
  fee: "Our fee structure is competitive and affordable. For detailed fee information, please contact our office at +91 96554 67791 or visit us during working hours (Mon-Fri, 7:30am-7:30pm).",
  timings: "School working hours are Monday to Friday, 7:30 AM to 7:30 PM. We are closed on Saturdays and Sundays.",
  location: "We are located at No.18A, Vijayapuram, Thiruvarur, Tamil Nadu 610001. You can find us on Google Maps for easy navigation.",
  contact: "You can reach us at +91 96554 67791 or visit us at No.18A, Vijayapuram, Thiruvarur, Tamil Nadu 610001. Working hours: Mon-Fri, 7:30am-7:30pm.",
};
