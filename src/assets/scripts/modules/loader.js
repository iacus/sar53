'use strict'

import Swup from 'swup';
import SwupProgressPlugin from '@swup/progress-plugin';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';

export default class PageLoader {
  constructor() {
    this.config = {

    }
  }

  transitions () {
    const options = {
      linkSelector:'a[href^="/"]:not([data-no-swup]), a[href^="' + window.location.origin + '"]:not([data-no-swup])',
      plugins: [
        new SwupProgressPlugin(),
        new SwupPreloadPlugin(),
        new SwupBodyClassPlugin({
          prefix: ''
        })]
    };

    const swup = new Swup(options);
  }

  init() {
    this.transitions()
  }
}
