import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  // {
  //   title: "Usluge",
  //   list: [
  //     {
  //       title: "Kuhinje",
  //       link: "",
  //     },
  //     {
  //       title: "Plakari",
  //       link: "",
  //     },
  //     {
  //       title: "TV Komode",
  //       link: "",
  //     },
  //     {
  //       title: "Projektovanje Enterijera",
  //       link: "",
  //     },
  //   ],
  // },
  {
    title: "Kolekcije",
    link: "/products",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Grupni treninzi",
    text: "Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i podršku tima. Pridruži se i zajedno postižemo ciljeve!",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Individualni treninzi",
    text: "Ostvari maksimalne rezultate uz personalizovane individualne treninge! Treniraj prema svom tempu, uz stručnu podršku i plan prilagođen tvojim ciljevima. Fokus je na tebi!",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Pilates",
    text: "Poboljšaj fleksibilnost, snagu i držanje uz pilates treninge! Uz kontrolisane pokrete i fokus na disanje, oblikuj telo i oslobodi se stresa. Idealno za sve nivoe kondicije!",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Body power",
    text: "Ojačaj mišiće i poboljšaj izdržljivost uz intenzivan trening snage! Kombinacija tegova i funkcionalnih vežbi pomoći će ti da postigneš vrhunsku formu.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Mix-fit",
    text: " Dinamičan spoj kardio i snage za maksimalne rezultate! Raznovrsni pokreti, visoka energija i zabavna atmosfera čine svaki trening izazovnim i efektivnim.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Aeronix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Iskustvo i profesionalizam",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Srbija i inostranstvo",
    text: "Višegodišnje iskustvo u opremanju enterijera.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Elektroinstalacije",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Elektro ormani",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Industrijski elektro ormani",
    text: "",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Pružamo usluge izrade, montaže i održavanja elektro ormana za domaćinstva, poslovne prostore i industrijska postrojenja. Naš tim vodi računa o kvalitetu instalacija i bezbednosti sistema, uz poštovanje svih standarda i propisa.",
};

export interface Colections {
  id: number;
  title: string;
  price: number;
  img: string[];
  description1: string;
  description2: string;
  colors: { color: string }[];
  colorsImg: string;
  size: string[];
  sizeImg: string;
}

export const colections: Colections[] = [
  {
    id: 1,
    title: "BEACH BABE",
    price: 200,
    img: [
      "/BEACH BABE 1 color NEON YELLOW-min.jpg",
      "/BEACH BABE 2.1 color NEON ORANGE-min.jpg",
      "/BEACH BABE 3 color NEON ORANGE-min.jpg",
      "/BEACH BABE 4 color NEON ORANGE-min.jpg",
      "/BEACH BABE 4-ispis-min.jpg",
      "/visual double beach babe 1-min.jpg",
    ],
    description1:
      "BEACH BABE bokserice sa jednostavnim dizajnom i podesivim vezicama garantuju savrseno prijanjanje.",
    description2:
      "Napravljene o laganog materijala koji omogucava potpunu slobodu pokreta i udobnost tokom celog dana.",
    colors: [
      { color: "black" },
      { color: "white" },
      { color: "neon-yellow" },
      { color: "neon-orange" },
      { color: "neon-pink" },
    ],
    colorsImg: "/KARTA BOJA- BEACH BABE-min.jpg",
    size: [" S", " M", "L", "XL"],
    sizeImg: "/TABELA VELICINA.png",
  },
  {
    id: 2,
    title: "BREEZE",
    price: 200,
    img: [
      "/BREEZE 1 color BLACK-min.jpg",
      "/BREEZE 2 color BLACK-min.jpg",
      "/BREEZE 3 color BLACK-min.jpg",
      "/BREEZE 4color BLACK-min.jpg",
      "/BREEZE 5 color BLACK-min.jpg",
      "/BREEZE 6 color BLACK-min.jpg",
      "/visual double breeze-double trouble-min.jpg",
    ],
    description1:
      "BREEZE bikini model dizajniran je za minimalnu pokrivenost uz maksimalnu udobnost.",
    description2:
      "Lagan materjal obezbedjuje potpunu slobodu pokreta, pruzajuci savsrsen osecaj tokom nosenja.",
    colors: [{ color: "black" }],
    colorsImg: "/KARTA BOJA- BREEZE-min.jpg",
    size: [" S", " M", "L", "XL"],
    sizeImg: "/TABELA VELICINA.png",
  },
  {
    id: 3,
    title: "SHORTS",
    price: 200,
    img: [
      "/SHORTS 1.1 color WHITE-min.jpg",
      "/SHORTS 1.4 color WHITE-min.jpg",
      "/SHORTS 2 color NEON CORAL-min.jpg",
      "/SHORTS 3 color BLACK-min.jpg",
      "/SHORTS 4 color ROSE-min.jpg",
      "/SHORTS 4.1 color ROSE-min.jpg",
      "/SHORTS 4.2 color ROSE-min.jpg",
      "/visual double shorts 1-min.jpg",
    ],
    description1:
      "SHORTS za kupanje je napravljen od izuzetno laganog materijala koji se ne oseca na kozi, puzajuci udobnost tokom celog dana.",
    description2:
      "Postavljen je mrezicom koja dodatno povecava prijatnost i podrsku.",
    colors: [
      { color: "black" },
      { color: "white" },
      { color: "gold" },
      { color: "olive-green" },
      { color: "rose" },
      { color: "neon-coral" },
    ],
    colorsImg: "/KARTA BOJA- SHORTS-min.jpg",
    size: ["S|M", "L|XL"],
    sizeImg: "/TABELA VELICINA.png",
  },
  {
    id: 4,
    title: "THE OG",
    price: 200,
    img: [
      "/THE OG 1 color MAGENTA-min.jpg",
      "/THE OG 1.1 color MAGENTA-min.jpg",
      "/THE OG 1.2 color MAGENTA-min.jpg",
      "/THE OG 2.1 color TIFFANY BLUE-min.jpg",
      "/THE OG 2.2 color TIFFANY BLUE-min.jpg",
      "/THE OG 2.3 color TIFFANY BLUE-min.jpg",
      "/THE OG 2.5 color TIFFANY BLUE-min.jpg",
      "/THE OG 3 color WHITE-min.jpg",
      "/THE OG 3.1 color WHITE-min.jpg",
      "/THE OG 3.2 color WHITE-min.jpg",
      "/THE OG 3.3 color WHITE-min.jpg",
      "/THE OG 4 color NUDE-min.jpg",
      "/THE OG 4.1 color NUDE-min.jpg",
      "/THE OG 5 color GREEN-min.jpg",
      "/THE OG 5.1 color GREEN-min.jpg",
      "/THE OG 6 color ROSE-min.jpg",
      "/THE OG 6.1 color ROSE-min.jpg",
      "/THE OG 6.2 color ROSE-min.jpg",
      "/THE OG Rose and Tiffany blue-min.jpg",
      "/visual double the og 1-min.jpg",
      "/visual double the og 2-min.jpg",
      "/visual double the og 3-min.jpg",
      "/visual the og-min.jpg",
    ],
    description1:
      "THE OG su udobne kupace gace u brief modelu sa podesivim vezicama za savrseno prijanjanje.",
    description2:
      "Napravljene od laganog, brzosuseceg materijalakoji pruza maksimalnu udobnost tokom nosenja. Bestseler brenda.",
    colors: [
      { color: "black" },
      { color: "white" },
      { color: "nude" },
      { color: "gray" },
      { color: "green" },
      { color: "magenta" },
      { color: "tiffany-blue" },
      { color: "rose" },
      { color: "yellow" },
    ],
    colorsImg: "/KARTA BOJA-THE OG-min.jpg",
    size: [" S", " M", "L", "XL"],
    sizeImg: "/TABELA VELICINA.png",
  },
];
