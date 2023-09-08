import type { V2_MetaFunction } from "@remix-run/node";
import {Navbar} from "~/includes/Navbar";
import Hero from "~/includes/Hero";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Weave Index" },
    { name: "description", content: "Welcome to Weave Index!" },
  ];
};

export default function Index() {
  return (
    <div style={{ lineHeight: "1.8" }}>
      <div>
        <Navbar />
      </div>

      <div className="mt-32">
        <Hero />
      </div>
    </div>
  );
}
