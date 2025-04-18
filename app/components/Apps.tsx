'use client';

import { Icon } from '@iconify/react';
import apps from '../data/apps';

export default function Apps() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Apps</h2>
        <div className="flex-grow border-t border-gray-200" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {apps.map((app, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl border border-gray-200/75 p-6 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 flex items-center justify-center border border-gray-100 group-hover:border-blue-100 transition-colors">
                    <img src={`/apps/${app.icon}`}
                      alt={`${app.name}'s logo`}
                      className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>

              <div className="flex-grow min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-600">{app.description}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {app.appStoreUrl && (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Icon icon="logos:apple-app-store" className="w-5 h-5" />
                      App Store
                    </a>
                  )}
                  {app.playStoreUrl && (
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Icon icon="logos:google-play-icon" className="w-5 h-5" />
                      Play Store
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
