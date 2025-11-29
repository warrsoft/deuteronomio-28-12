import { EyeDropperIcon, FireIcon } from "@heroicons/react/24/outline";
import { LeafLine } from "../components/Icons";
import IngredientsCard  from "../components/IngredientsCard";

export default function IngredientsSection () {
    return (
       <div className="bg-beige">
         <section id="IngredientsSection" className="p-4 pt-8 flex flex-col gap-8 justify-center items-center m-auto max-w-5xl lg:gap-10">
            <header className="flex flex-col items-center justify-center w-full text-center gap-4 lg:gap-6">
                <h2 className="font-bold text-2xl lg:text-4xl">Ingredientes que nutren desde la raíz</h2>
                <p>Tres poderosos ingredientes naturales que trabajan en armonía para transformar tu cabello</p>
            </header>
            <main className="flex flex-col gap-6 md:flex-row">
                <IngredientsCard title={"Romero"} icon={<LeafLine width={50} height={50} />} subTitle={"Estimula la circulación"}  description={"Activa el flujo sanguíneo en el cuero cabelludo, promoviendo el crecimiento del cabello y fortaleciendo los folículos."} />
                <IngredientsCard title={"Áloe vera"} icon={<EyeDropperIcon width={50} height={50} />} subTitle={"Hidrata y calma"}  description={"Proporciona hidratación profunda mientras calma el cuero cabelludo irritado, creando el ambiente perfecto para el crecimiento."} />
                <IngredientsCard title={"Canela"} icon={<FireIcon width={50} height={50} />} subTitle={"Activa y fortalece"}  description={"Genera calor natural que activa los folículos dormidos y fortalece la estructura del cabello desde la raíz."} />
            </main>
            <footer>
                <article className="bg-green/40 rounded-lg p-8 text-center border border-dark/10">
                    Cada ingrediente es cuidadosamente seleccionado y combinado en su proporción exacta para crear una sinergia que potencia los beneficios naturales de cada componente.
                </article>
            </footer>
        </section>
       </div>
    )
}