/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyCard {
    }
    interface MyCardContent {
        /**
          * The Body
         */
        "body": string;
        /**
          * The Subtitle
         */
        "subTitle": string;
        /**
          * The Title
         */
        "title": string;
    }
    interface MyCardHeader {
        /**
          * Image URL
         */
        "url": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMyCardElement extends Components.MyCard, HTMLStencilElement {
    }
    var HTMLMyCardElement: {
        prototype: HTMLMyCardElement;
        new (): HTMLMyCardElement;
    };
    interface HTMLMyCardContentElement extends Components.MyCardContent, HTMLStencilElement {
    }
    var HTMLMyCardContentElement: {
        prototype: HTMLMyCardContentElement;
        new (): HTMLMyCardContentElement;
    };
    interface HTMLMyCardHeaderElement extends Components.MyCardHeader, HTMLStencilElement {
    }
    var HTMLMyCardHeaderElement: {
        prototype: HTMLMyCardHeaderElement;
        new (): HTMLMyCardHeaderElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-card": HTMLMyCardElement;
        "my-card-content": HTMLMyCardContentElement;
        "my-card-header": HTMLMyCardHeaderElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyCard {
    }
    interface MyCardContent {
        /**
          * The Body
         */
        "body"?: string;
        /**
          * The Subtitle
         */
        "subTitle"?: string;
        /**
          * The Title
         */
        "title"?: string;
    }
    interface MyCardHeader {
        /**
          * Image URL
         */
        "url"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "my-card": MyCard;
        "my-card-content": MyCardContent;
        "my-card-header": MyCardHeader;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-card": LocalJSX.MyCard & JSXBase.HTMLAttributes<HTMLMyCardElement>;
            "my-card-content": LocalJSX.MyCardContent & JSXBase.HTMLAttributes<HTMLMyCardContentElement>;
            "my-card-header": LocalJSX.MyCardHeader & JSXBase.HTMLAttributes<HTMLMyCardHeaderElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
