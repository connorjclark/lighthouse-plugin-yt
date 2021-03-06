'use strict';

const {Audit} = require('lighthouse');

/**
 * @fileoverview Audits if a page lazy loads YouTube videos.
 */

class YtAudit extends Audit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'yt-iframes',
      title: 'Lazy loads YouTube embeds',
      failureTitle: 'Does not load YouTube embeds',
      description: 'YouTube embeds on this page should not be loaded until the user interacts with the video. [Learn more](https://github.com/paulirish/lite-youtube-embed)',
      requiredArtifacts: ['IFrameElements'],
    };
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @return {Promise<LH.Audit.Product>}
   */
  static async audit(artifacts) {
    const results = artifacts.IFrameElements
      .filter(iframe => iframe.src && new URL(iframe.src).host === 'www.youtube.com')
      .map(iframe => {
        const srcParts = new URL(iframe.src).pathname.split('/');
        const videoId = srcParts[srcParts.length - 1];
        const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        return {src: iframe.src, thumbnail};
      });

    /** @type {LH.Audit.Details.Table['headings']} */
    const headings = [
      {key: 'thumbnail', itemType: 'thumbnail', text: ''},
      {key: 'src', itemType: 'url', text: 'url'},
    ];

    return {
      score: Number(results.length === 0),
      details: Audit.makeTableDetails(headings, results),
      extendedInfo: {
        numericValue: results.length,
      }
    };
  }
}

module.exports = YtAudit;
