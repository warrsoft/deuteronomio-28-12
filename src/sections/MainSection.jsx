import { StopIcon } from "@heroicons/react/16/solid";
import { Instagram, LeafLine } from "../components/Icons.jsx";
import { NoSymbolIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function MainSection () {
    return (
        <div className="bg-beige">
            <section id="MainSection" className="p-4 pt-8 flex flex-col lg:flex-row lg:items-center gap-4 justify-center-items-center max-w-5xl m-auto">
            <div className="flex flex-col gap-8">
                <article className="flex gap-2 items-center justify-center py-2 px-4 bg-green/60 w-fit rounded-full text-sm">
                    <span>Natural</span>
                    <StopIcon width={10}/>
                    <span>Hecho con amor</span>
                </article>
                <div className="flex flex-col gap-2 lg:gap-4">
                    <h2 className="text-2xl font-bold lg:text-3xl">De las raíces a tus manos</h2>
                    <span className="opacity-50 italic">"Te abrirá Jehová su buen tesoro, el cielo, para enviar la lluvia a tu tierra en su tiempo, y para bendecir toda obra de tus manos. Y prestarás a muchas naciones, y tú no pedirás prestado."</span>
                    <span className="opacity-50 italic">(Deuteronomio 28:12)</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <a href="https://msng.link/o?raices_a_tus_manos=ig" target="_blank" className="bg-primary p-2 w-full text-center rounded-lg text-light font-bold">
                        Comprar ahora
                    </a>
                    <a href="https://msng.link/o?raices_a_tus_manos=ig" target="_blank" className="flex items-center justify-center w-full gap-4 p-2 bg-transparent border border-dark/10 rounded-lg font-bold">
                        <Instagram />
                        <span>Síguenos en Instagram</span>
                    </a>
                </div>
                <div className="flex items-center justify-around gap-2 text-sm">
                    <article className="flex flex-col gap-2 items-center">
                        <figure className="bg-green/40 text-green rounded-full p-2">
                            <LeafLine width={30} height={30}/>
                        </figure>
                        <span>100% natural</span>
                    </article>
                    <article className="flex flex-col gap-2 items-center">
                        <figure className="bg-primary/40 text-primary rounded-full p-2">
                            <SparklesIcon width={30} />
                        </figure>
                        <span>Resultados visibles</span>
                    </article>
                    <article className="flex flex-col gap-2 items-center">
                        <figure className="bg-dark/20 text-dark/50 rounded-full p-2">
                            <NoSymbolIcon width={30} />
                        </figure>
                        <span>Sin químicos</span>
                    </article>
                </div>
            </div>
            <aside className="">
                <figure className="rounded-lg overflow-hidden">
                    <img src="/hero-image.png" alt="hero image" className="lg:w-8xl w-full" />
                </figure>
            </aside>
        </section>
        </div>
    )
} 