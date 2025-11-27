import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useState } from "react";

export default function Navbar () {

    const [show, setShow] = useState(false);

    return (
        <>
            <div onClick={() => setShow(!show)} className={clsx([show ? "" : "hidden"], "fixed inset-0 bg-black/50 z-50")} />
            <header className={"flex justify-between items-center p-4 z-30 bg-beige sticky top-0"}>
            <button>
                <h3 className="text-lg font-bold">De las raíces a tus manos</h3>
            </button>
            <button className="lg:hidden" onClick={() => setShow(!show)}>
                <Bars3Icon width={30} />
            </button>
            <div className={clsx([
                show ? "right-0" : "-right-full"
            ], "flex flex-col fixed transition-all top-0 duration-300 h-full min-h-dvw w-50 md:w-75 p-4 bg-beige lg:bg-transparent z-50 lg:static lg:min-h-auto lg:w-auto lg:p-0 lg:flex-row gap-10 lg:gap-4 lg:items-center")}>
                <button onClick={() => setShow(!show)} className="absolute right-2 top-2 md:hidden">
                    <XMarkIcon width={45}/>
                </button>
                <nav className="grow">
                    <ul className="flex flex-col lg:flex-row gap-8 mt-16 lg:mt-0">
                        <li>Beneficios</li>
                        <li>Ingredientes</li>
                        <li>Cómo usar</li>
                        <li>Preguntas</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
                <button className="bg-primary p-2 text-light rounded-lg">
                    Comprar ahora
                </button>
            </div>
        </header>
        </>
    )
}