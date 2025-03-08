import CardColection from "@/components/CardColection";
import HeroOneImg from "@/components/HeroOneImg";
import { colections } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <CardColection title={"Bliss"} data={colections} />
    </div>
  );
}
