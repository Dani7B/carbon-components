/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import settings from 'carbon-components/es/globals/js/settings';
import styles from './dropdown.scss';

const { prefix } = settings;

/**
 * Skeleton version of dropdown.
 */
@customElement(`${prefix}-dropdown-skeleton`)
class BXDropdownSkeleton extends LitElement {
  render() {
    return html`
      <div
        class="${prefix}--skeleton ${prefix}--dropdown-v2 ${prefix}--list-box ${prefix}--form-item">
        <div class="${prefix}--list-box__field">
          <span class="${prefix}--list-box__label"></span>
        </div>
      </div>
    `;
  }

  static styles = styles;
}

export default BXDropdownSkeleton;
