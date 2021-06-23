import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  shadow: true,
})
export class MyCard {
  /**
   * Image URL
   */
  @Prop() image: string;

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
        <img src={this.image} alt="Avatar" class="img-header" />
        <div class="container">
          <h4 class="subtitle">{this.subTitle}</h4>
          <h2>{this.title}</h2>
          <p class="body">{this.body}</p>
        </div>
      </div>
    );
  }

}
