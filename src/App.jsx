import Navbar from "./components/Navbar"
import BenefictsSection from "./sections/BenefictsSection"
import ContactSection from "./sections/ContactSection"
import HowSection from "./sections/HowSection"
import IngredientsSection from "./sections/IngredientsSection"
import MainSection from "./sections/MainSection"
import QuestionsSection from "./sections/QuestionsSection"

function App() {

  return (
    <div className="bg-light min-h-svh text-dark font-inter">
      <div className="m-auto">
        <Navbar />
        <MainSection />
        <BenefictsSection />
        <IngredientsSection />
        <HowSection />
        <QuestionsSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default App
