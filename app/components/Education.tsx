import educations from "@/app/data/education";
import Image from 'next/image';

export default function Education() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="space-y-6">
        {
          educations.map((education, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200/75 p-8 hover:border-blue-500/50 hover:shadow-sm transition-all duration-200"
              itemScope
              itemType="https://schema.org/EducationalOrganization">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 transition-colors">
                    <Image src={`/schools/${education.logo}`}
                      alt={`${education.institution}'s logo'`}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{education.institution}</h3>
                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      {education.period}
                    </span>
                  </div>
                  <span className="block text-blue-600 font-medium">{education.degree}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section >
  );
}
