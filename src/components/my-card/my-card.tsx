import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {


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
      <div class="card">
        <slot></slot>
        <div class="container">
          <h4 class="subtitle">{this.subTitle}</h4>
          <h2>{this.title}</h2>
          <p class="body">{this.body}</p>
        </div>
      </div>
    );
  }

}
