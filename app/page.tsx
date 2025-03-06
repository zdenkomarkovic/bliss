import CardColection from "@/components/CardColection";
import HeroOneImg from "@/components/HeroOneImg";
import Testemonials from "@/components/Testimonials";
import { colections } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <CardColection title={"Kupace gace"} data={colections} />
      <Testemonials />
    </div>
  );
}
