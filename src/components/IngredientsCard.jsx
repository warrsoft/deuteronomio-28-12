import { LeafLine } from "./Icons";

export default function IngredientsCard ({ icon, title, subTitle, description }) {
    return (
        <article className="flex flex-col gap-2 items-center justify-center text-center">
                    <div className="relative bg-linear-to-br from-green/50 to-primary/50 to-80% p-4 rounded-full">
                        {icon}
                        <figure className="absolute -bottom-2 -right-2 bg-primary text-light p-1 rounded-full">
                            <LeafLine width={20} height={20}/>
                        </figure>
                    </div>
                    <h3 className="font-bold text-2xl">{title}</h3>
                    <h4 className="text-primary font-bold">{subTitle}</h4>
                    <p>{description}</p>
                </article>
    )
}