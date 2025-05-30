import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/75 p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">About</h2>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="space-y-6">
        {/* Leadership Philosophy */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Icon icon="heroicons:light-bulb" className="w-5 h-5 text-blue-600" />
            Leadership Philosophy
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            I believe in empowering teams through clear vision, technical excellence, and collaborative innovation. 
            My approach focuses on building scalable systems while fostering a culture of continuous learning and growth.
          </p>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Icon icon="heroicons:trophy" className="w-5 h-5 text-blue-600" />
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Icon icon="heroicons:arrow-trending-down" className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Cost Optimization</span>
              </div>
              <p className="text-sm text-blue-800">Reduced infrastructure costs by 45% through strategic cloud optimization and architectural improvements.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Icon icon="heroicons:rocket-launch" className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">Delivery Speed</span>
              </div>
              <p className="text-sm text-green-800">Accelerated development cycles by 75% through improved CI/CD and agile practices.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Icon icon="heroicons:users" className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-900">Team Leadership</span>
              </div>
              <p className="text-sm text-purple-800">Successfully led global engineering teams of 15+ members across multiple time zones.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Icon icon="heroicons:chart-bar-square" className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-900">System Performance</span>
              </div>
              <p className="text-sm text-orange-800">Improved system performance by 30% through microservice architecture and optimization.</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Icon icon="heroicons:heart" className="w-5 h-5 text-blue-600" />
            Core Values
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Technical Excellence',
              'Team Empowerment',
              'Continuous Learning',
              'Innovation',
              'Scalability',
              'Collaboration'
            ].map((value) => (
              <span
                key={value}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 