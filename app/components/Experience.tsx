import experiences from "@/app/data/experiences";
import { Disclosure, DisclosurePanel, DisclosureButton } from "@headlessui/react";
import { Icon } from '@iconify/react'

export default function Experience() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <Disclosure
            key={experience.company}
            defaultOpen={index === 0}
            as="div"
            className="group relative bg-white rounded-2xl border border-gray-200/75 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200"
            itemScope
            itemType="http://schema.org/OrganizationRole" >
            <div className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 transition-colors">
                    <img src={`/companies/${experience.logo}`}
                      alt={`${experience.company}'s logo'`}
                      itemProp="image"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900" itemProp="memberOf" itemScope itemType="http://schema.org/Organization">
                      <span itemProp="name">{experience.company}</span>
                    </h3>
                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700" itemProp="startDate">
                      {experience.period}
                    </span>
                  </div>
                  <span itemProp="roleName" className="block text-blue-600 font-medium">
                    {experience.position}
                  </span>
                </div>
                <DisclosureButton className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200">
                  <span>View Details</span>
                  <Icon icon="heroicons:chevron-down" className="w-4 h-4 transform transition-transform duration-200 ui-open:rotate-180" />
                </DisclosureButton>
              </div>

              <div itemProp="hasOccupation" itemScope itemType="http://schema.org/Occupation">
                <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>

                {experience.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <DisclosurePanel className="pt-4 border-t border-gray-100">
                  <div className="space-y-2.5">
                    {experience.tasks.map((task, idx) => (
                      <div
                        key={idx}
                        itemProp="skills"
                        className="relative pl-5 text-gray-700"
                      >
                        <div className="absolute left-0 top-[0.6rem] w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <span className="leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </div>
            </div>
          </Disclosure>
        ))
        }
      </div>
    </section >
  );
}
