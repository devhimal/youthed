import HeroSection from "@/components/HeroSection/heroSection"
import Story from "@/components/Story/story"
import Supporters from "@/components/Supporters/Supporters"
import ScholarshipSection from "@/components/scholarship/ScholarshipSection"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white px-10">
      <HeroSection />
      <ScholarshipSection />
      <Story />
      <Supporters />
    </main>
  )
}
