import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";

export default function QuestionsCard ({ question, answer }) {

    const [open, setOpen] = useState(false);
    const cardRef = useRef()

    useEffect(() => {
        function handleClickOther(event) {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        if(open) {
            document.addEventListener("mousedown", handleClickOther);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOther)
        }
    }, [open]);

    return (
        <article ref={cardRef} className={`flex flex-col gap-4 p-4 bg-light rounded-xl shadow-md ${!open ? 'h-15' : 'h-full'} transition-all duration-200 overflow-hidden`}>
            <header className="flex justify-between items-center" onClick={() => setOpen(!open)}>
                <span>{question}</span>
                <div className={`${!open ? '' : 'rotate-180'} transition-transform duration-200`}>
                    <ChevronDownIcon width={30} />
                </div>
            </header>
            <div>
                <p>{answer}</p>
            </div>
        </article>
    )
}