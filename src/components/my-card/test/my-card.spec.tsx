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
          <slot></slot>
        </mock:shadow-root>
      </my-card>
    `);
  });

  it('renders with values', async () => {
    const imageUrl = 'https://picsum.photos/300/150';
    const title = 'Title';
    const subTitle = 'kicker';
    const body = 'Body Text';
    const { root } = await newSpecPage({
      components: [MyCard],
      html: `
        <my-card
          image="${imageUrl}"
          title="${title}"
          sub-title="${subTitle}"
          body="${body}"
        >
        </my-card>`,
    });
    expect(root).toEqualHtml(`
      <my-card
        image="${imageUrl}"
        title="${title}"
        sub-title="${subTitle}"
        body="${body}"
      >
        <mock:shadow-root>
          <div class="card">
            <img src="${imageUrl}" alt="Avatar" class="img-header" />
            <div class="container">
              <h4 class="subtitle">${subTitle}</h4>
              <h2>${title}</h2>
              <p class="body">${body}</p>
            </div>
          </div>
        </mock:shadow-root>
      </my-card>
    `);
  });
});
