export function HowCard ({ icon, title, description }) {
    return (
        <article className="bg-primary/10 p-6 rounded-lg flex flex-col w-full gap-4 border border-primary/50 hover:shadow-md">
                    <div className="flex">
                        {icon}
                    </div>
                    <aside className="flex flex-col items-start gap-2">
                        <h3 className="font-bold text-lg">{title}</h3>
                        <p className="opacity-70">{description}</p>
                    </aside>
                </article>
    )
}

export function NumberIcon ({ number }) {
    return (
        <div className="flex items-center justify-center py-2 px-4 text-lg font-bold text-light rounded-md w-fit bg-linear-to-br from-primary/50 to-green">
            {number}
        </div>
    )
}

export function IconIcon ({ icon }) {
    return (
        <div className="rounded-full p-2 bg-primary text-light">
            {icon}
        </div>
    )
}