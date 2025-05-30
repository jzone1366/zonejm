import experiences from "@/app/data/experiences";
import { Disclosure, DisclosurePanel, DisclosureButton } from "@headlessui/react";
import { Icon } from '@iconify/react'
import Image from 'next/image';

export default function Experience() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Experience</h2>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="space-y-4 md:space-y-6">
        {experiences.map((experience, index) => (
          <Disclosure
            key={experience.company}
            defaultOpen={index === 0}
            as="div"
            className="group relative bg-white rounded-2xl border border-gray-200/75 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200"
            itemScope
            itemType="http://schema.org/OrganizationRole" >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 p-1.5 md:p-2 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 transition-colors">
                    <Image src={`/companies/${experience.logo}`}
                      alt={`${experience.company}'s logo'`}
                      itemProp="image"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900" itemProp="memberOf" itemScope itemType="http://schema.org/Organization">
                      <span itemProp="name">{experience.company}</span>
                    </h3>
                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 w-fit" itemProp="startDate">
                      {experience.period}
                    </span>
                  </div>
                  <span itemProp="roleName" className="block text-sm md:text-base text-blue-600 font-medium">
                    {experience.position}
                  </span>
                </div>
                <DisclosureButton className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-lg text-xs md:text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200 flex-shrink-0">
                  <span className="hidden sm:inline">View Details</span>
                  <span className="sm:hidden">Details</span>
                  <Icon icon="heroicons:chevron-down" className="w-4 h-4 transform transition-transform duration-200 ui-open:rotate-180" />
                </DisclosureButton>
              </div>

              <div itemProp="hasOccupation" itemScope itemType="http://schema.org/Occupation">
                <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{experience.description}</p>

                {experience.skills && (
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {experience.skills.slice(0, 8).map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                    {experience.skills.length > 8 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-500">
                        +{experience.skills.length - 8} more
                      </span>
                    )}
                  </div>
                )}

                <DisclosurePanel className="pt-4 border-t border-gray-100">
                  <div className="space-y-2.5">
                    {experience.tasks.map((task, idx) => (
                      <div
                        key={idx}
                        itemProp="skills"
                        className="relative pl-4 md:pl-5 text-gray-700"
                      >
                        <div className="absolute left-0 top-[0.6rem] w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <span className="leading-relaxed text-sm md:text-base">{task}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Show all skills in expanded view */}
                  {experience.skills && experience.skills.length > 8 && (
                    <div className="mt-4 pt-4 border-t border-gray-50">
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                        All Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
