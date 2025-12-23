import { AboutBlock } from "@/components/AboutBlock";
import WalletLoader from "@/components/WalletLoader";



export default function About() {
  return (
    <div className="container mx-auto px-4">
      <WalletLoader/>
      <AboutBlock></AboutBlock>
    </div>
  );
}