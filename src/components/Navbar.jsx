import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { useState } from "react";

export default function Navbar () {

    const [overlay, setOverlay] = useState(false);

    const handleClick = () => {
        setOverlay(!overlay)
    }

    return (
        <>
            <div onClick={() => setOverlay(!overlay)} className={clsx([overlay ? "" : "hidden"], "fixed inset-0 bg-black/50 z-50")} />
            <header className={"flex justify-between items-center p-4 z-50 bg-beige"}>
            <button className="flex items-center gap-2">
                <img className="w-10" src="/main-logo-reverse.png" alt="logo" />
                <h3 className="text-lg font-bold lg:text-2xl">De las raíces a tus manos</h3>
            </button>
            <button className="fixed top-2 right-2 lg:hidden" onClick={() => handleClick()}>
                <Bars3Icon width={30} />
            </button>
            <div className={clsx([
                overlay ? "right-0" : "-right-full"
            ], "flex flex-col fixed transition-all top-0 duration-300 h-full w-[75%] md:w-[50%] p-4 bg-beige lg:bg-transparent z-90 lg:static lg:min-h-auto lg:w-auto lg:p-0 lg:flex-row gap-10 lg:gap-4 lg:items-center shadow-md lg:shadow-none md:text-lg lg:text-sm")}>
                <div className="flex w-full justify-between items-center">
                    <img className="w-10 h-10" src="/main-logo-reverse.png" alt="logo" />
                    <button onClick={() => handleClick()} className="lg:hidden">
                        <XMarkIcon width={45}/>
                    </button>
                </div>
                <nav className="grow">
                    <ul className="flex flex-col lg:flex-row gap-8 mt-16 lg:mt-0">
                        <li>
                            <a onClick={handleClick} href="#MainSection">Inicio</a>
                        </li>
                        <li>
                            <a onClick={handleClick} href="#BenefictsSection">Beneficios</a>
                        </li>
                        <li>
                            <a onClick={handleClick} href="#IngredientsSection">Ingredientes</a>
                        </li>
                        <li>
                            <a onClick={handleClick} href="#HowSection">Cómo usar</a>
                        </li>
                        <li>
                            <a onClick={handleClick} href="#QuestionsSection">Preguntas</a>
                        </li>
                        <li>
                            <a onClick={handleClick} href="#ContactSection">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <a target="_blank" href="https://msng.link/o?raices_a_tus_manos=ig" className="bg-primary p-2 text-light rounded-lg w-full text-center">
                    Comprar ahora
                </a>
            </div>
        </header>
        </>
    )
}