'use client';

import { Icon } from '@iconify/react';
import apps from '../data/apps';

export default function Apps() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Apps & Projects</h2>
        <div className="flex-grow border-t border-gray-200" />
      </div>

      <div className="grid gap-4 md:gap-6 sm:grid-cols-2">
        {apps.map((app, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl border border-gray-200/75 p-4 md:p-6 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all duration-200"
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 p-1.5 md:p-2 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 transition-colors">
                  <img src={`/apps/${app.icon}`}
                    alt={`${app.name}'s logo`}
                    className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="flex-grow min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{app.description}</p>
                <div className="mt-3 md:mt-4 flex flex-wrap gap-3">
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Icon icon="logos:apple-app-store" className="w-4 h-4" />
                      <span className="hidden sm:inline">App Store</span>
                      <span className="sm:hidden">iOS</span>
                    </a>
                  )}
                  {app.playStoreUrl && (
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Icon icon="logos:google-play-icon" className="w-4 h-4" />
                      <span className="hidden sm:inline">Play Store</span>
                      <span className="sm:hidden">Android</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
