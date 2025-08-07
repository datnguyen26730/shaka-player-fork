/*! @license
 * Shaka Player
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */


goog.provide('shaka.ui.ReportButton');

goog.require('shaka.ui.Controls');
goog.require('shaka.ui.Element');
goog.require('shaka.util.Dom');


/**
 * @extends {shaka.ui.Element}
 * @final
 * @export
 */
shaka.ui.ReportButton = class extends shaka.ui.Element {
  /**
   * @param {!HTMLElement} parent
   * @param {!shaka.ui.Controls} controls
   */
  constructor(parent, controls) {
    super(parent, controls);

    /** @private {!HTMLElement} */
    const reportContainer = shaka.util.Dom.createHTMLElement('div');
    reportContainer.classList.add('report-button-container');
    this.parent.appendChild(reportContainer);
  }
};

/**
 * @implements {shaka.extern.IUIElement.Factory}
 * @final
 */
shaka.ui.ReportButton.Factory = class {
  /** @override */
  create(rootElement, controls) {
    return new shaka.ui.ReportButton(rootElement, controls);
  }
};

shaka.ui.Controls.registerElement(
    'report', new shaka.ui.ReportButton.Factory());
