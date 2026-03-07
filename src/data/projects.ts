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
    id: "florida-beach-house",
    img: featured1,
    title: "Florida Beach House",
    category: "Architektura",
    location: "Florida",
    year: "2024",
    description: "Moderní rodinný dům zasazený do kontextu vilové čtvrti v Praze 6. Návrh klade důraz na propojení interiéru s exteriérem a maximální využití přirozeného světla.",
    details: ["[UKÁZKOVÝ POPIS] Základní koncept restaurace vychází z inspirace asijským tržištěm. Rušným místem, kde si u stánku koupíte lokální pokrm a hned ho spořádáte na provizorně přistavených stoličkách u vyskladněných beden s polotovary. Takové prostředí, jehož podobu vytvořil každodenní život a potřeby prodejců a jehož největší benefit je atmosféra autentičnosti. Ústředním designovým prvkem je mřížka – pravidelný čtvercový rastr, který sjednocuje všechny interiérové prvky. Tato mřížka symbolicky odkazuje k tržnicovým regálům, dlaždičkám, vyskládaným krabicím nebo k husté uliční síti elektrického vedení. Návrh barevnosti interiéru ponechává povrchy ve své “přirozené” barevnosti – dub, černá ocel, světlá břízová překližka, betonová stěrka, bílé maloformátové dlaždičky."],
    area: "320 m²",
    client: "Soukromý investor",
  },
  {
    id: "pho-king",
    img: featured3,
    title: "Pho King",
    category: "Interiér",
    location: "Poprad",
    year: "2023",
    description: "Citlivá rekonstrukce historického měšťanského domu v centru Prahy. Projekt snoubí zachování cenných historických prvků s moderním komfortem bydlení.",
    details: ["[UKÁZKOVÝ POPIS] Základní koncept restaurace vychází z inspirace asijským tržištěm. Rušným místem, kde si u stánku koupíte lokální pokrm a hned ho spořádáte na provizorně přistavených stoličkách u vyskladněných beden s polotovary. Takové prostředí, jehož podobu vytvořil každodenní život a potřeby prodejců a jehož největší benefit je atmosféra autentičnosti. Ústředním designovým prvkem je mřížka – pravidelný čtvercový rastr, který sjednocuje všechny interiérové prvky. Tato mřížka symbolicky odkazuje k tržnicovým regálům, dlaždičkám, vyskládaným krabicím nebo k husté uliční síti elektrického vedení. Návrh barevnosti interiéru ponechává povrchy ve své “přirozené” barevnosti – dub, černá ocel, světlá břízová překližka, betonová stěrka, bílé maloformátové dlaždičky."],
    area: "480 m²",
    client: "Soukromý investor",
  },
  {
    id: "park-historie",
    img: featured4,
    title: "Park Historie",
    category: "Urbanismus",
    location: "Aš",
    year: "2022",
    description: "Revitalizace městského parku v Brně zahrnující nové pěší trasy, odpočinkové zóny a vodní prvky. Projekt vytváří příjemný veřejný prostor pro všechny generace.",
    details: ["[UKÁZKOVÝ POPIS] Základní koncept restaurace vychází z inspirace asijským tržištěm. Rušným místem, kde si u stánku koupíte lokální pokrm a hned ho spořádáte na provizorně přistavených stoličkách u vyskladněných beden s polotovary. Takové prostředí, jehož podobu vytvořil každodenní život a potřeby prodejců a jehož největší benefit je atmosféra autentičnosti. Ústředním designovým prvkem je mřížka – pravidelný čtvercový rastr, který sjednocuje všechny interiérové prvky. Tato mřížka symbolicky odkazuje k tržnicovým regálům, dlaždičkám, vyskládaným krabicím nebo k husté uliční síti elektrického vedení. Návrh barevnosti interiéru ponechává povrchy ve své “přirozené” barevnosti – dub, černá ocel, světlá břízová překližka, betonová stěrka, bílé maloformátové dlaždičky."],
    area: "2.4 ha",
    client: "Statutární město Brno",
  },
  {
    id: "vily-lysolaje",
    img: project1,
    title: "Vily Lysolaje",
    category: "Architektura",
    location: "Praha",
    year: "2024",
    description: "Návrh dvou vil přináší do pražského Lysolajského údolí novou vrstvu moderní architektury, která citlivě doplňuje malebnou oblast definovanou především úchvatnou přírodní scenérií. ",
    details: ["[UKÁZKOVÝ POPIS] Základní koncept restaurace vychází z inspirace asijským tržištěm. Rušným místem, kde si u stánku koupíte lokální pokrm a hned ho spořádáte na provizorně přistavených stoličkách u vyskladněných beden s polotovary. Takové prostředí, jehož podobu vytvořil každodenní život a potřeby prodejců a jehož největší benefit je atmosféra autentičnosti. Ústředním designovým prvkem je mřížka – pravidelný čtvercový rastr, který sjednocuje všechny interiérové prvky. Tato mřížka symbolicky odkazuje k tržnicovým regálům, dlaždičkám, vyskládaným krabicím nebo k husté uliční síti elektrického vedení. Návrh barevnosti interiéru ponechává povrchy ve své “přirozené” barevnosti – dub, černá ocel, světlá břízová překližka, betonová stěrka, bílé maloformátové dlaždičky."],
    area: "1 200 m²",
    client: "Developerský projekt",
  },
  {
    id: "wokin",
    img: project2,
    title: "WOKIN",
    category: "Interiér",
    location: "Praha",
    year: "2023",
    description: "Základní koncept restaurace vychází z inspirace asijským tržištěm.",
    details: ["[UKÁZKOVÝ POPIS] Základní koncept restaurace vychází z inspirace asijským tržištěm. Rušným místem, kde si u stánku koupíte lokální pokrm a hned ho spořádáte na provizorně přistavených stoličkách u vyskladněných beden s polotovary. Takové prostředí, jehož podobu vytvořil každodenní život a potřeby prodejců a jehož největší benefit je atmosféra autentičnosti. Ústředním designovým prvkem je mřížka – pravidelný čtvercový rastr, který sjednocuje všechny interiérové prvky. Tato mřížka symbolicky odkazuje k tržnicovým regálům, dlaždičkám, vyskládaným krabicím nebo k husté uliční síti elektrického vedení. Návrh barevnosti interiéru ponechává povrchy ve své “přirozené” barevnosti – dub, černá ocel, světlá břízová překližka, betonová stěrka, bílé maloformátové dlaždičky."],
    area: "400 m²",
    client: "WOKIN- Jindřišská 3",
  },
  {
    id: "pekarny-zrno-zrnko",
    img: project3,
    title: "Pekárny Zrno Zrnko",
    category: "Architektura",
    location: "Praha",
    year: "2023",
    description: "Návrh interiéru řemeslných pekáren Zrno Zrnko",
    details: ["[UKÁZKOVÝ POPIS] Základní koncept restaurace vychází z inspirace asijským tržištěm. Rušným místem, kde si u stánku koupíte lokální pokrm a hned ho spořádáte na provizorně přistavených stoličkách u vyskladněných beden s polotovary. Takové prostředí, jehož podobu vytvořil každodenní život a potřeby prodejců a jehož největší benefit je atmosféra autentičnosti. Ústředním designovým prvkem je mřížka – pravidelný čtvercový rastr, který sjednocuje všechny interiérové prvky. Tato mřížka symbolicky odkazuje k tržnicovým regálům, dlaždičkám, vyskládaným krabicím nebo k husté uliční síti elektrického vedení. Návrh barevnosti interiéru ponechává povrchy ve své “přirozené” barevnosti – dub, černá ocel, světlá břízová překližka, betonová stěrka, bílé maloformátové dlaždičky."],
    area: "3 500 m²",
    client: "Městská část Praha",
  },
  {
    id: "revitalizace-krizikova-pavilonu-d",
    img: project4,
    title: "Revitalizace Křižíkova pavilonu D",
    category: "Urbanismus",
    location: "Praha",
    year: "2022",
    description: "Křižíkův pavilon D se nachází v dolní části areálu Výstaviště Praha za Průmyslovým palácem",
    details: ["[UKÁZKOVÝ POPIS] Základní koncept restaurace vychází z inspirace asijským tržištěm. Rušným místem, kde si u stánku koupíte lokální pokrm a hned ho spořádáte na provizorně přistavených stoličkách u vyskladněných beden s polotovary. Takové prostředí, jehož podobu vytvořil každodenní život a potřeby prodejců a jehož největší benefit je atmosféra autentičnosti. Ústředním designovým prvkem je mřížka – pravidelný čtvercový rastr, který sjednocuje všechny interiérové prvky. Tato mřížka symbolicky odkazuje k tržnicovým regálům, dlaždičkám, vyskládaným krabicím nebo k husté uliční síti elektrického vedení. Návrh barevnosti interiéru ponechává povrchy ve své “přirozené” barevnosti – dub, černá ocel, světlá břízová překližka, betonová stěrka, bílé maloformátové dlaždičky."],
    area: "550 m²",
    client: "Soukromý investor",
  },
];

export const featuredProjects = allProjects.slice(0, 3);
export const portfolioProjects = allProjects.slice(3, 7);
