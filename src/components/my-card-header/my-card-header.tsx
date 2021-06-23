import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card-header',
  styleUrl: 'my-card-header.css',
  shadow: true,
})
export class MyCardHeader {
  /**
   * Image URL
   */
  @Prop() url: string;

  render() {
    return (
      <div class="card-header">
        <img src={this.url} alt="Avatar" />
      </div>
    );
  }

}
