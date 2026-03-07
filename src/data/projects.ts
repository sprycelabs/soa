import featured1 from "@/assets/featured-1.jpg";
import featured2 from "@/assets/featured-2.jpg";
import featured3 from "@/assets/featured-3.jpg";
import featured4 from "@/assets/featured-4.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export interface Project {
  id: string;
  img: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  details: string[];
  area?: string;
  client?: string;
}

export const allProjects: Project[] = [
  {
    id: "rodinny-dum-praha",
    img: featured1,
    title: "Florida Beach House",
    category: "Architektura",
    location: "Florida",
    year: "2024",
    description: "Moderní rodinný dům zasazený do kontextu vilové čtvrti v Praze 6. Návrh klade důraz na propojení interiéru s exteriérem a maximální využití přirozeného světla.",
    details: [
      "Návrh respektuje okolní zástavbu a zároveň přináší současný architektonický výraz.",
      "Velkoplošná zasklení směrem do zahrady vytvářejí plynulý přechod mezi vnitřním a vnějším prostorem.",
      "Materiálová paleta kombinuje pohledový beton, dřevo a kov.",
    ],
    area: "320 m²",
    client: "Soukromý investor",
  },
  {
    id: "kancelare-delta",
    img: featured2,
    title: "Kanceláře Delta",
    category: "Interiér",
    location: "Brno",
    year: "2023",
    description: "Kompletní návrh interiérů kancelářských prostor pro technologickou společnost. Koncept kombinuje otevřené pracovní prostory s klidovými zónami.",
    details: [
      "Flexibilní pracovní prostory navržené pro různé styly práce – od soustředěné individuální po týmovou spolupráci.",
      "Akustické řešení zajišťuje komfort v otevřených prostorech.",
      "Zelené prvky a biophilic design podporují wellbeing zaměstnanců.",
    ],
    area: "850 m²",
    client: "Delta Technologies",
  },
  {
    id: "rekonstrukce-historickeho-domu",
    img: featured3,
    title: "Pho King",
    category: "Interiér",
    location: "Poprad",
    year: "2023",
    description: "Citlivá rekonstrukce historického měšťanského domu v centru Prahy. Projekt snoubí zachování cenných historických prvků s moderním komfortem bydlení.",
    details: [
      "Obnovení původních štukových prvků a kamenných detailů fasády.",
      "Moderní technické zázemí integrované s respektem k historické podstatě objektu.",
      "Nový krov s podkrovním bytem nabízejícím výhledy na Pražský hrad.",
    ],
    area: "480 m²",
    client: "Soukromý investor",
  },
  {
    id: "mestsky-park-brno",
    img: featured4,
    title: "Park Historie",
    category: "Urbanismus",
    location: "Aš",
    year: "2022",
    description: "Revitalizace městského parku v Brně zahrnující nové pěší trasy, odpočinkové zóny a vodní prvky. Projekt vytváří příjemný veřejný prostor pro všechny generace.",
    details: [
      "Systém pěších a cyklistických tras propojující park s okolními čtvrtěmi.",
      "Vodní prvky a retenční systém hospodařící s dešťovou vodou.",
      "Komunitní zahrada a dětské hřiště navržené s ohledem na inkluzivitu.",
    ],
    area: "2.4 ha",
    client: "Statutární město Brno",
  },
  {
    id: "mestsky-dum",
    img: project1,
    title: "Vily Lysolaje",
    category: "Architektura",
    location: "Praha",
    year: "2024",
    description: "Návrh dvou vil přináší do pražského Lysolajského údolí novou vrstvu moderní architektury, která citlivě doplňuje malebnou oblast definovanou především úchvatnou přírodní scenérií. ",
    details: [
      "Vertikální koncept s terasami orientovanými do vnitrobloku.",
      "Fasáda z cihelného obkladu odkazující na industriální charakter lokality.",
      "Společné střešní terasy s výhledy na město.",
    ],
    area: "1 200 m²",
    client: "Developerský projekt",
  },
  {
    id: "kancelare-studio-delta",
    img: project2,
    title: "WOKIN",
    category: "Interiér",
    location: "Praha",
    year: "2023",
    description: "Základní koncept restaurace vychází z inspirace asijským tržištěm.",
    details: [
      "Centrální modelářská dílna jako srdce studia.",
      "Materiálová knihovna integrovaná do designu interiéru.",
      "Flexibilní prezentační prostor pro klienty.",
    ],
    area: "400 m²",
    client: "Studio Delta",
  },
  {
    id: "zs-lobsters",
    img: project3,
    title: "Pekárny Zrno Zrnko",
    category: "Architektura",
    location: "Praha",
    year: "2023",
    description: "Návrh interiéru řemeslných pekáren Zrno Zrnko",
    details: [
      "Učebny navržené jako flexibilní prostory s možností variabilního uspořádání.",
      "Zelená střecha s venkovní učebnou a školní zahradou.",
      "Sportovní hala sloužící i jako komunitní centrum pro okolí.",
    ],
    area: "3 500 m²",
    client: "Městská část Praha",
  },
  {
    id: "floridian-beach-house",
    img: project4,
    title: "Revitalizace Křižíkova pavilonu D",
    category: "Urbanismus",
    location: "Praha",
    year: "2022",
    description: "Křižíkův pavilon D se nachází v dolní části areálu Výstaviště Praha za Průmyslovým palácem",
    details: [
      "Otevřená dispozice propojující obytné prostory s venkovní terasou a bazénem.",
      "Odolnost vůči hurikánům integrována do architektonického konceptu.",
      "Udržitelné materiály a pasivní chlazení snižující energetickou náročnost.",
    ],
    area: "550 m²",
    client: "Soukromý investor",
  },
];

export const featuredProjects = allProjects.slice(0, 4);
export const portfolioProjects = allProjects.slice(4, 8);
