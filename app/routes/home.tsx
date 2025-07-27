import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analizar Curriculum Vitae" },
    { name: "description", content: "¡Bienvenido/a! Analizaremos tu CV" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    
    <section className="main-section">
      <div className="page-heading">
        <h1>Analizar Curriculum Vitae</h1>
        <h2>Revisa y analiza tu Curriculum con la IA</h2>
      </div>

    </section>

  </main>
}
