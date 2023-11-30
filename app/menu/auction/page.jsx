import Tabs from "../../components/tabs";
import Hero from "../../components/hero";

export default function Main({}) {
  return (
    <div className="mt-[10vh] bg-neutral">
      <Hero />
      <div className="">
        <Tabs />
      </div>
    </div>
  );
}
