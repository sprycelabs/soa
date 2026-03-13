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
    id: "rezidence-na-vyhlídce",
    img: featured1,
    title: "Rezidence Na Vyhlídce",
    category: "Architektura",
    location: "Karlovy Vary",
    year: "2024",
    description: "Luxusní rezidence zasazená do svahu s panoramatickým výhledem na lázeňské město. Dynamická hmota domu reaguje na terén a otevírá se směrem k údolí.",
    details: ["Koncept rezidence vychází z myšlenky propojení architektury s dramatickou topografií místa. Tři vzájemně posunuté objemy vytvářejí kaskádovitou kompozici, která maximalizuje výhledy a zároveň zajišťuje soukromí jednotlivých obytných zón. Fasáda kombinuje přírodní kámen s velkoplošným zasklením, čímž vzniká dialog mezi masivností a transparentností. Střešní terasy s integrovanou zelení plynule navazují na okolní krajinu."],
    area: "520 m²",
    client: "Soukromý investor",
  },
  {
    id: "kavarna-mlýn",
    img: featured3,
    title: "Kavárna Mlýn",
    category: "Interiér",
    location: "Olomouc",
    year: "2023",
    description: "Konverze historického mlýna na komunitní kavárnu s pražírnou. Surové industriální prvky se potkávají s měkkými textiliemi a teplým osvětlením.",
    details: ["Návrh kavárny pracuje s autentickým průmyslovým dědictvím objektu. Původní mlýnské mechanismy byly zachovány jako dominantní interiérové prvky a doplněny o soudobý mobiliář z ohýbaného dubového dřeva. Pražírna kávy je umístěna za prosklenou stěnou v centru prostoru, čímž se stává vizuálním i aromatickým středobodem celého podniku. Barevnost interiéru staví na kontrastu tmavé oceli a světlého dřeva."],
    area: "280 m²",
    client: "Mlýn Coffee s.r.o.",
  },
  {
    id: "park-pod-lipami",
    img: featured4,
    title: "Park Pod Lipami",
    category: "Urbanismus",
    location: "Plzeň",
    year: "2022",
    description: "Revitalizace zanedbaného městského parku v nový komunitní prostor s amfiteátrem, vodními prvky a vzdělávací stezkou pro děti.",
    details: ["Projekt transformuje zapomenutý městský park v živé centrum čtvrti. Klíčovým prvkem je organicky tvarovaný amfiteátr zapuštěný do terénu, který slouží jako místo pro kulturní akce i neformální setkávání. Síť pěších cest respektuje přirozené trasy obyvatel a doplňuje je o pobytové niky s lavičkami pod korunami vzrostlých lip. Vodní biotop nahrazuje původní betonovou fontánu a přináší do parku přírodní element."],
    area: "3.8 ha",
    client: "Statutární město Plzeň",
  },
  {
    id: "ateliery-stromovka",
    img: project1,
    title: "Ateliéry Stromovka",
    category: "Architektura",
    location: "Praha",
    year: "2024",
    description: "Soubor čtyř kreativních ateliérů na okraji Stromovky. Každý objekt má unikátní prostorové řešení přizpůsobené konkrétní umělecké disciplíně.",
    details: ["Čtyři pavilony jsou rozmístěny mezi vzrostlými stromy tak, aby minimalizovaly zásah do stávající zeleně. Každý ateliér nabízí specifické světelné podmínky – od severního studia pro malíře po prosklený box pro fotografa. Objekty jsou propojeny subtilní lávkou z cortenu, která zároveň definuje společný venkovní prostor. Konstrukce z křížem lepeného dřeva odkazuje k tradici zahradních staveb."],
    area: "680 m²",
    client: "Nadace pro umění",
  },
  {
    id: "bistro-skleník",
    img: project2,
    title: "Bistro Skleník",
    category: "Interiér",
    location: "Brno",
    year: "2023",
    description: "Rostlinami prostoupený interiér bistra ve skleněném přístavku secesní budovy. Gastronomie se potkává s botanikou.",
    details: ["Interiér bistra je koncipován jako pokračování přilehlé botanické zahrady. Ocelová konstrukce skleníku je ponechána v surové podobě a doplněna zavěšenými truhlíky s bylinkami, které slouží jak dekorativně, tak jako zdroj čerstvých ingrediencí pro kuchyni. Podlaha z leštěného betonu kontrastuje s měkkostí rostlin. Osvětlení kombinuje grow lampy s teplými pendanty nad jednotlivými stoly."],
    area: "190 m²",
    client: "Skleník Gastro s.r.o.",
  },
  {
    id: "vinařství-hořínky",
    img: project3,
    title: "Vinařství Hořínky",
    category: "Architektura",
    location: "Velké Bílovice",
    year: "2023",
    description: "Moderní vinařství zapuštěné do svahu vinohradu. Architektura mizí v krajině a nechává vyniknout terasovité vinice.",
    details: ["Vinařství je navrženo jako krajinná architektura – zelená střecha plynule přechází ve vinohrady a budova je z dálky téměř neviditelná. Interiér výrobních prostor využívá přirozené chlazení zeminou. Degustační sál s prosklenou jižní fasádou nabízí výhled přes řady vinné révy až k Pálavským vrchům. Materiálová paleta zahrnuje pohledový beton, dubové barely a ručně vyráběné keramické obklady."],
    area: "1 450 m²",
    client: "Rodinné vinařství Hořínky",
  },
  {
    id: "lávka-přes-moravu",
    img: project4,
    title: "Lávka přes Moravu",
    category: "Urbanismus",
    location: "Kroměříž",
    year: "2022",
    description: "Elegantní pěší lávka spojující historické centrum s novou rekreační zónou na protějším břehu řeky Moravy.",
    details: ["Lávka o rozpětí 85 metrů je navržena jako subtilní ocelová konstrukce s dřevěnou pochozí plochou. Tvar mostovky se jemně vlní a vytváří tak přirozená zastavení s výhledem na řeku i panorama města. Noční osvětlení integrované do zábradlí proměňuje lávku v lineární světelnou instalaci. Konstrukce je ukotvena do kamenných opěr, které svým materiálem odkazují k historickým mostům regionu."],
    area: "85 m délky",
    client: "Město Kroměříž",
  },
];

export const featuredProjects = allProjects.slice(0, 3);
export const portfolioProjects = allProjects.slice(3, 7);
