import {
  Chat,
  Clients,
  ContactChat,
  Discover,
  Hero,
  Map,
  Mission,
  Mission2,
  Project,
  ReviewFutureAwaits,
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
      {/* <Chat /> */}
      <ReviewFutureAwaits />
    </main>
  );
}
