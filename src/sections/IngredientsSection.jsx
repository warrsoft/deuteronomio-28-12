import { LeafLine } from "../components/Icons";
// import { IngredientsCard } from "../components/IngredientsCard";

export default function IngredientsSection () {
    return (
        <section className="bg-beige p-4 pt-8 flex flex-col gap-8 justify-center items-center">
            <header className="flex flex-col items-center justify-center w-full text-center gap-4">
                <h2 className="font-bold text-2xl">Ingredientes que nutren desde la raíz</h2>
                <p>Tres poderosos ingredientes naturales que trabajan en armonía para transformar tu cabello</p>
            </header>
            <main className="flex flex-col gap-4">
                <article className="flex flex-col gap-2 items-center justify-center text-center">
                    <div className="relative bg-linear-to-br from-green/50 to-primary/50 to-80% p-4 rounded-full">
                        {"icon"}
                        <figure className="absolute -bottom-2 -right-2 bg-primary text-light p-1 rounded-full">
                            <LeafLine width={20} height={20}/>
                        </figure>
                    </div>
                    <h3 className="font-bold text-2xl">{"title"}</h3>
                    <h4 className="text-primary font-bold">{"subTitle"}</h4>
                    <p>{"description"}</p>
                </article>
            </main>
            <footer>
                <article className="bg-green/40 rounded-lg p-8 text-center border border-dark/10">
                    Cada ingrediente es cuidadosamente seleccionado y combinado en su proporción exacta para crear una sinergia que potencia los beneficios naturales de cada componente.
                </article>
            </footer>
        </section>
    )
}