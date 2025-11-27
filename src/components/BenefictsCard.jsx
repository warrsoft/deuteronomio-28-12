export default function BenefictsCard ({ icon, title, description }) {
    return (
        <article className="bg-beige rounded-lg border border-dark/20 p-6 flex flex-col gap-4 hover:shadow-md">
                    <figure className="p-3 bg-linear-to-br from-primary/30 from-50% to-green/60 w-fit rounded-lg text-primary">
                        {icon}
                    </figure>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p>{description}</p>
                </article>
    )
}