import { NoSymbolIcon } from "@heroicons/react/24/outline";
import { HowCard, IconIcon, NumberIcon } from "../components/HowCard";

export default function HowSection () {
    return (
        <div className="bg-light">
            <section id="HowSection" className="p-4 pt-8 flex flex-col gap-8 justify-center items-center lg:gap-10 max-w-5xl m-auto">
            <header className="flex flex-col items-center justify-center w-full text-center gap-4 lg:gap-6">
                <h2 className="font-bold text-2xl lg:text-4xl">Cómo usarlo</h2>
                <p>Tres pasos simples para transformar tu cabello</p>
            </header>
            <main className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <HowCard  icon={<NumberIcon number={"01"} />} title={"Aplicar en el cuero cabelludo"} description={"Aplica el producto directamente en el cuero cabelludo, puede estar seco o mojado según tu preferencia."}/>
                <HowCard  icon={<NumberIcon number={"02"} />} title={"Masajear suavemente"} description={"Realiza un masaje circular con las yemas de los dedos hasta sentir una sensación de calor en el cuero cabelludo."}/>
                <HowCard  icon={<NumberIcon number={"03"} />} title={"Recoger y dejar actuar"} description={"Recoge tu cabello en un moño alto y deja reposar mínimo 4 horas o el tiempo que desees."}/>
                <HowCard  icon={<IconIcon icon={<NoSymbolIcon width={30}/>} />} title={"Recoger y dejar actuar"} description={"Recoge tu cabello en un moño alto y deja reposar mínimo 4 horas o el tiempo que desees."}/>
            </main>
        </section>
        </div>
    )
}