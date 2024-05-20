import Image from "next/image";
import Link from "next/link";
import Icon from "./components/Icon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Icon name="door" className="icon-class" />
      <Icon name="Electrical" className="icon-class" />
    </main>
  );
}
