import { newE2EPage } from '@stencil/core/testing';

describe('my-card-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-card-header></my-card-header>');

    const element = await page.find('my-card-header');
    expect(element).toHaveClass('hydrated');
  });
});
