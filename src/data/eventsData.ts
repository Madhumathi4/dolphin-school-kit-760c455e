export interface SchoolEvent {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  category: string;
}

export const mockEvents: SchoolEvent[] = [
  { id: 1, title: "Annual Day Celebration", date: "2026-03-15", description: "Grand annual day with cultural performances, awards, and special guests.", category: "Cultural" },
  { id: 2, title: "Parent-Teacher Meeting", date: "2026-03-05", description: "PTM scheduled for all classes to discuss student progress.", category: "Academic" },
  { id: 3, title: "Sports Day", date: "2026-03-20", description: "Inter-house sports competition featuring athletics, cricket, and kabaddi.", category: "Sports" },
  { id: 4, title: "Science Exhibition", date: "2026-03-25", description: "Students showcase innovative science projects and experiments.", category: "Academic" },
  { id: 5, title: "Republic Day", date: "2026-01-26", description: "Flag hoisting ceremony and patriotic performances.", category: "National" },
  { id: 6, title: "Pongal Celebration", date: "2026-01-15", description: "Traditional Pongal celebrations with kolam and cultural programs.", category: "Cultural" },
  { id: 7, title: "Children's Day", date: "2026-11-14", description: "Special programs and fun activities organized for students.", category: "Cultural" },
  { id: 8, title: "Independence Day", date: "2026-08-15", description: "Flag hoisting and patriotic speeches by students.", category: "National" },
  { id: 9, title: "Exam Week Begins", date: "2026-04-01", description: "Mid-term examinations for all classes.", category: "Academic" },
  { id: 10, title: "Art Competition", date: "2026-03-10", description: "Drawing and painting competition for all age groups.", category: "Cultural" },
];
