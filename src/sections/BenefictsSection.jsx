import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from "@heroicons/react/16/solid";
import BenefictsCard from "../components/BenefictsCard";
import { HeartIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function BenefictsSection () {
    return (
        <div className="bg-light">
            <section id="BenefictsSection" className="p-4 pt-8 flex flex-col gap-8 justify-center items-center max-w-5xl m-auto">
            <header className="flex flex-col items-center justify-center w-full text-center gap-4 lg:gap-6">
                <h2 className="font-bold text-2xl lg:text-4xl">Lo natural que tu cabello estaba esperando</h2>
                <p>Nuestra fórmula combina lo mejor de la naturaleza para devolverle vida y fuerza a tu cabello</p>
            </header>
            <main className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <BenefictsCard icon={<ArrowTrendingDownIcon width={30}/>} title={"Detiene la caída"} description={"Fortalece el folículo piloso desde la raíz para reducir significativamente la caída del cabello."}/>
                <BenefictsCard icon={<ArrowTrendingUpIcon width={30}/>} title={"Acelera el crecimiento"} description={"Estimula la circulación del cuero cabelludo promoviendo un crecimiento más rápido y saludable."}/>
                <BenefictsCard icon={<HeartIcon width={30}/>} title={"Nutre el cuero cabelludo"} description={"Hidrata profundamente y equilibra el pH natural para un cuero cabelludo sano."}/>
                <BenefictsCard icon={<SparklesIcon width={30}/>} title={"Fortalece desde la raíz"} description={"Ingredientes naturales que penetran y fortifican cada hebra desde su origen."}/>
            </main>
        </section>
        </div>
    )
}