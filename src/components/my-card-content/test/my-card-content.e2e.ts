import { newE2EPage } from '@stencil/core/testing';

describe('my-card-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-card-content></my-card-content>');

    const element = await page.find('my-card-content');
    expect(element).toHaveClass('hydrated');
  });
});
