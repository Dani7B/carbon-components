/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import settings from 'carbon-components/es/globals/js/settings';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './tooltip.scss';

const { prefix } = settings;

/**
 * Tooltip footer.
 */
@customElement(`${prefix}-tooltip-footer`)
class BXTooltipFooter extends LitElement {
  render() {
    return html`<slot></slot>`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default BXTooltipFooter;
