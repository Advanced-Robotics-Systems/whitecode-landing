import {
  Chat,
  Clients,
  Discover,
  Hero,
  Map,
  Mission,
  Mission2,
  Project,
  Services,
  Services2,
  Solution,
  Values,
  Vision,
} from "@/sections";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Mission />
      <Project />
      <Solution />
      <Services />
      <Services2 />
      <Mission2 />
      <Map />
      <Clients />
      <Discover />
      <Vision />
      <Values />
      <Chat />
    </main>
  );
}
