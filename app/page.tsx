import CardColection from "@/components/CardColection";
import HeroOneImg from "@/components/HeroOneImg";
import { colections } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <CardColection title={"Bliss"} data={colections} />
      <video controls autoPlay muted className="max-w-full h-auto mx-auto">
        <source src="/VIDEO 1.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
