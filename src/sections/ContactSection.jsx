import { HeartIcon } from "@heroicons/react/16/solid";
import { Instagram } from "../components/Icons";

export default function ContactSection () {
    return (
        <div className="bg-dark-primary">
            <section id="ContactSection" className="p-4 pt-8 flex flex-col gap-8 justify-center items-start text-light lg:gap-10 max-w-5xl m-auto">
            <header className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">De las raíces a tus manos</h2>
                <p>Cuidado natural para tu cabello. Devolviendo vida y fuerza con ingredientes que la naturaleza nos regala.</p>
                <span className="opacity-50 italic">Deuteronomio 28:12</span>
            </header>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Enlaces rápidos</h3>
                <ul className="opacity-60">
                    <li><a href="#MainSection">Inicio</a></li>
                    <li><a href="#BenefictsSection">Beneficios</a></li>
                    <li><a href="#IngredientsSection">Ingredientes</a></li>
                    <li><a href="#HowSection">Cómo usar</a></li>
                    <li><a href="#QuestionsSection">Preguntas frecuentes</a></li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Contáctanos</h3>
                <a className="flex items-center gap-2">
                    <Instagram />
                    Síguenos en Instagram
                </a>
            </div>
            <div className="border border-light/20 w-full"/>
            <footer className="flex flex-col items-center gap-4 text-center w-full">
                <p>© 2025 De las raíces a tus manos. Todos los derechos reservados.</p>
                <p className="flex items-center gap-1">Hecno con <HeartIcon width={20}/> para tu cabello</p>
            </footer>
        </section>
        </div>
    )
}