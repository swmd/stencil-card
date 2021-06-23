import { newSpecPage } from '@stencil/core/testing';
import { MyCardHeader } from '../my-card-header';

describe('my-card-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCardHeader],
      html: `<my-card-header></my-card-header>`,
    });
    expect(page.root).toEqualHtml(`
      <my-card-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-card-header>
    `);
  });
});
