import QuestionsCard from "../components/QuestionsCard";

export default function QuestionsSection () {
    return (
        <div className="bg-beige">
            <section id="QuestionsSection" className="p-4 pt-8 flex flex-col gap-8 justify-center items-center lg:gap-10 max-w-5xl m-auto">
            <header className="flex flex-col items-center justify-center w-full text-center gap-4 lg:gap-6">
                <h2 className="font-bold text-2xl lg:text-4xl">Preguntas frecuentes</h2>
                <p>Todo lo que necesitas saber sobre nuestro tratamiento</p>
            </header>
            <main className="flex flex-col gap-4">
                <QuestionsCard question={"¿Cada cuánto debo usarlo?"} answer={"Para obtener los mejores resultados, recomendamos usar el tratamiento al menos 3 veces por semana. Puedes usarlo con más frecuencia si lo deseas - mientras más seguido lo uses, más rápidos serán los resultados. Algunas de nuestras clientas lo usan diariamente y han visto transformaciones increíbles."} />
                <QuestionsCard question={"¿En cuánto tiempo veré resultados?"} answer={"La mayoría de nuestras clientas comienzan a notar una reducción en la caída del cabello después de 2-3 semanas de uso constante. Los resultados en crecimiento y fortalecimiento suelen ser visibles entre 4-6 semanas. Recuerda que cada cabello es único y los resultados pueden variar según tu tipo de cabello y la constancia en el uso."} />
                <QuestionsCard question={"¿Es apto para todo tipo de cabello?"} answer={"Sí, nuestra fórmula natural es apta para todo tipo de cabello: liso, ondulado, rizado o afro. También es seguro para cabello teñido, con tratamientos químicos o extensiones. Los ingredientes naturales trabajan en armonía con cualquier tipo de cuero cabelludo, ya sea graso, seco o mixto."} />
                <QuestionsCard question={"¿Puedo usarlo con otros productos?"} answer={"Sí, puedes usar nuestro tratamiento junto con tu rutina habitual de cuidado capilar. Aplica primero nuestro producto en el cuero cabelludo, deja actuar el tiempo recomendado, y luego procede con tu shampoo y acondicionador habituales. Para mejores resultados, te recomendamos usar productos libres de sulfatos y parabenos."} />
                <QuestionsCard question={"¿Tiene algún efecto secundario?"} answer={"Al ser 100% natural, nuestro producto es muy seguro. Algunas personas pueden sentir una ligera sensación de calor en el cuero cabelludo durante la aplicación - esto es completamente normal y es la canela activando la circulación. Si tienes piel muy sensible o alergias conocidas a alguno de los ingredientes, te recomendamos hacer una prueba de parche antes de usar."} />
                <QuestionsCard question={"¿Cómo debo almacenar el producto?"} answer={"Guarda el producto en un lugar fresco y seco, lejos de la luz solar directa. No es necesario refrigerar. Agita bien antes de cada uso. Una vez abierto, te recomendamos usarlo dentro de los 6 meses para garantizar la máxima efectividad de los ingredientes naturales."} />
            </main>
            <footer className="w-full">
                <article className="bg-green/40 rounded-lg p-8 text-center border border-dark/10 flex flex-col gap-2">
                    ¿Tienes más preguntas? Estamos aquí para ayudarte
                    <a className="text-primary font-bold" href="#">Contáctanos →</a>
                </article>
            </footer>
        </section>
        </div>
    )
}