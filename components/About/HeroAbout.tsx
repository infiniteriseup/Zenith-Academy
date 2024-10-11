import HighlightText from "../Home/HighlightedText"
import { ButtonOutline, MainButton } from "../ui/ThemeButton"

export default function HeroAbout() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
            Elevate Your Mind with <HighlightText text="ZenithMinds" />
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Embark on a transformative learning journey powered by cutting-edge
            AI and expert-crafted content. Unlock your potential in the digital
            age.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <MainButton>Start Your Odyssey</MainButton>
            <ButtonOutline>Explore Courses</ButtonOutline>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent" /> */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-900/20 opacity-50 blur-3xl" />
      {/* <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-900/20 opacity-50 blur-3xl" /> */}
    </section>
  )
}
