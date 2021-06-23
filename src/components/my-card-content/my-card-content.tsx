import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card-content',
  styleUrl: 'my-card-content.css',
  shadow: true,
})
export class MyCardContent {

  /**
   * The Body
   */
  @Prop() body: string;

  /**
   * The Subtitle
   */
  @Prop() subTitle: string;

  /**
   * The Title
   */
  @Prop() title: string;

  render() {
    return (
      <div class="container">
        <h4 class="subtitle">{this.subTitle}</h4>
        <h2>{this.title}</h2>
        <p class="body">{this.body}</p>
      </div>
    );
  }
}
