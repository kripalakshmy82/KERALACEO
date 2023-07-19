
import SpotLight from "./home/Spotlight";
import VotersCard from "./home/VotersCard";
import BoardTeam from "./home/BoardTeam";
import HelpCard from "./home/HelpCard";

export const metadata = {
  title: "ecm-kerala",
  description: "election-commission-kerala",
};

export default function Home() {
  return (
    <main>
      <SpotLight />
      <VotersCard />
      <BoardTeam />
      <HelpCard  />
    </main>
  );
}