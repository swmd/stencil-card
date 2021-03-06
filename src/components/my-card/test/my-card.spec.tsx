import { newSpecPage } from '@stencil/core/testing';
import { MyCard } from '../my-card';

describe('my-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCard],
      html: `<my-card></my-card>`,
    });
    expect(page.root).toEqualHtml(`
      <my-card>
        <mock:shadow-root>
          <div class="card">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </my-card>
    `);
  });

  it('renders content', async () => {
    const page = await newSpecPage({
      components: [MyCard],
      html: `<my-card><div>Dummy content</div></my-card>`,
    });
    expect(page.root).toEqualHtml(`
      <my-card>
        <mock:shadow-root>
          <div class="card">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <div>Dummy content</div>
      </my-card>
    `);
  });
});
