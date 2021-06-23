import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card-content',
  styleUrl: 'my-card-content.css',
  shadow: true,
})
export class MyCardContent {

  /**
   * The Title
   */
   @Prop() title: string;

  /**
   * The Subtitle
   */
  @Prop() subTitle: string;

  /**
    * The Body
   */
  @Prop() body: string;

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
