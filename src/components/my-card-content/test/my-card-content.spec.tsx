import { newSpecPage } from '@stencil/core/testing';
import { MyCardContent } from '../my-card-content';

describe('my-card-content', () => {
  it('renders with values', async () => {
    const title = 'Title';
    const subTitle = 'kicker';
    const body = 'Body Text';
    const { root } = await newSpecPage({
      components: [MyCardContent],
      html: `
        <my-card-content
          title="${title}"
          sub-title="${subTitle}"
          body="${body}"
        >
        </my-card-content>`,
    });
    expect(root).toEqualHtml(`
      <my-card-content
        title="${title}"
        sub-title="${subTitle}"
        body="${body}"
      >
        <mock:shadow-root>
          <div class="container">
            <h4 class="subtitle">${subTitle}</h4>
            <h2>${title}</h2>
            <p class="body">${body}</p>
          </div>
        </mock:shadow-root>
      </my-card-content>
    `);
  });
});
