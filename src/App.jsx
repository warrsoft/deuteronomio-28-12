import Navbar from "./components/Navbar"
import BenefictsSection from "./sections/BenefictsSection"
import IngredientsSection from "./sections/IngredientsSection"
import MainSection from "./sections/MainSection"

function App() {

  return (
    <div className="bg-light min-h-svh text-dark">
      <div className="max-w-7xl m-auto">
        <Navbar />
        <MainSection />
        <BenefictsSection />
        <IngredientsSection />
      </div>
    </div>
  )
}

export default App
