import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useState } from "react";

export default function Navbar () {

    const [show, setShow] = useState(true)

    return (
        <header className={clsx([
        ], "flex justify-between items-center p-4 bg-beige z-30")}>
            <button>
                <h3>De las raíces a tus manos</h3>
            </button>
            <button className="md:hidden" onClick={() => setShow(!show)}>
                <Bars3Icon width={30} />
            </button>
            <div className={clsx([
                show ? "right-0" : "-right-full"
            ], "flex flex-col fixed transition-all top-0 duration-300 min-h-full w-50 p-4 bg-beige z-50 md:static md:h-auto md:w-auto md:p-0 md:flex-row gap-10")}>
                <button onClick={() => setShow(!show)} className="absolute right-2 top-2 md:hidden">
                    <XMarkIcon width={45}/>
                </button>
                <nav>
                    <ul className="flex flex-col md:flex-row">
                        <li>Beneficios</li>
                        <li>Ingredientes</li>
                        <li>Cómo usar</li>
                        <li>Preguntas</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
                <button>
                    Comprar ahora
                </button>
            </div>
        </header>
    )
}