import { Icon } from '@iconify/react';

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/75 dark:border-gray-700 p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">About</h2>
        <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
      </div>

      <div className="space-y-5">
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          I specialize in turning complex distributed systems into platforms that engineering teams can actually ship on. Most of my career has been spent at the intersection of architecture and execution — designing event-driven pipelines, decomposing monoliths into microservices, and building the CI/CD and observability tooling that keeps everything running.
        </p>

        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          At Ten Mile Square I lead the platform modernization of a core banking application, working across GraphQL, Kubernetes, and AWS. Before that I directed engineering at QL2 for a large-scale web data extraction system, built procurement intelligence infrastructure at TealBook, and led investment platform architecture at SigFig.
        </p>

        {/* What I focus on */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Icon icon="heroicons:wrench-screwdriver" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            What I focus on
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Platform & infrastructure design', icon: 'heroicons:server-stack' },
              { label: 'Distributed systems & event-driven architecture', icon: 'heroicons:arrows-right-left' },
              { label: 'Cloud cost optimization (AWS, GCP)', icon: 'heroicons:arrow-trending-down' },
              { label: 'Engineering team leadership (15+ people)', icon: 'heroicons:user-group' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                <Icon icon={item.icon} className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Currently */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Icon icon="heroicons:sparkles" className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Currently
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Consulting at Ten Mile Square on a banking modernization project — cloud-first, GraphQL, Kubernetes on AWS. Building PitchTrack on the side, an Apple Watch app for baseball pitch tracking written in Swift. Always tinkering with ML tooling on Kaggle.
          </p>
        </div>
      </div>
    </section>
  );
}
