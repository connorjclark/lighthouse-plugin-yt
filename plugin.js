'use strict';

/** @type {LH.Config.Plugin} */
module.exports = {
  audits: [{
    path: 'lighthouse-plugin-yt/audits/yt-iframes.js',
  }],

  category: {
    title: 'YouTube',
    description: '🚀🚀🚀 Lazy loads youtube embeds 🚀🚀🚀',
    auditRefs: [
      {id: 'yt-iframes', weight: 1},
    ],
  },
};
