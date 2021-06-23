import { newSpecPage } from '@stencil/core/testing';
import { MyCardHeader } from '../my-card-header';

describe('my-card-header', () => {
  it('renders with values', async () => {
    const imageUrl = 'https://picsum.photos/300/150';
    const { root } = await newSpecPage({
      components: [MyCardHeader],
      html: `<my-card-header url="${imageUrl}"></my-card>`,
    });
    expect(root).toEqualHtml(`
      <my-card-header url="${imageUrl}">
        <mock:shadow-root>
          <div class="card-header">
            <img src="${imageUrl}" alt="Avatar" />
          </div>
        </mock:shadow-root>
      </my-card-header>
    `);
  });
});
