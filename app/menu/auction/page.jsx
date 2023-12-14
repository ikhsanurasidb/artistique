import Tabs from "../../components/tabs";
import Hero from "../../components/hero";

export default function Main({}) {
  return (
    <div className="grid gap-16 mt-[10vh] bg-neutral">
      <Hero />
      <div className="flex justify-center items-center">
        <Tabs />
      </div>
    </div>
  );
}
