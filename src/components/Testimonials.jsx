const testimonials = [
  { name: "Dr. Ananya Mehta", role: "Molecular Biologist", text: "PhDians’ mentorship has been transformative. Their guidance in experimental design and data interpretation significantly accelerated our research projects." },
  { name: "Dr. Rohan Verma", role: "AI & Robotics Researcher", text: "The workshops and resources provided by PhDians helped me refine my AI algorithms and optimise computational experiments efficiently." },
  { name: "Prof. Leela Krishnan", role: "Environmental Scientist", text: "PhDians is a one-stop solution for early-career scientists. From manuscript preparation to grant applications, their support is impeccable." },
  { name: "Dr. Sameer Kapoor", role: "Biochemist", text: "The collaborative network of experts at PhDians enabled my team to troubleshoot complex biochemical assays we struggled with for months." },
  { name: "Dr. Priya Iyer", role: "Nanotechnology Researcher", text: "PhDians’ career mentoring and skill development programs are unmatched. They’ve helped me transition from a junior researcher to leading my own lab." },
  { name: "Dr. Arvind Menon", role: "Astrophysicist", text: "Thanks to PhDians, our astrophysics simulations are now more accurate and reproducible. Their technical support is outstanding." },
  { name: "Dr. Meera Joshi", role: "Public Health Scientist", text: "PhDians provided critical guidance in designing my epidemiology study, ensuring statistical rigor and ethical compliance." },
  { name: "Dr. Kiran Reddy", role: "Interdisciplinary Researcher", text: "The literature review and manuscript editing support from PhDians allowed our interdisciplinary research team to submit high-impact papers with confidence." },
  { name: "Dr. Tanvi Deshmukh", role: "Chemical Engineer", text: "PhDians’ mentoring helped me navigate complex experimental protocols and improved the reproducibility of our lab work significantly." },
  { name: "Dr. Vikram Choudhary", role: "Climate Scientist", text: "PhDians’ workshops on grant writing and research methodology provided me with practical skills that immediately benefited my independent research projects." },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-white">
          What Researchers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col h-full shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Quote */}
              <p className="italic text-gray-300 flex-1 leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-white group-hover:text-cyan-300 transition">
                  {t.name}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}