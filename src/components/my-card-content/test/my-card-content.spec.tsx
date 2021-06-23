import { newSpecPage } from '@stencil/core/testing';
import { MyCardContent } from '../my-card-content';

describe('my-card-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCardContent],
      html: `<my-card-content></my-card-content>`,
    });
    expect(page.root).toEqualHtml(`
      <my-card-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-card-content>
    `);
  });
});
