import { html, TemplateResult, customElement, property } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import Count from "./counter";

// create instance that can be shared across components

// create a new custom element, and use the base MobxLitElement class
// alternatively you can use the MobxReactionUpdate mixin, e.g. `class MyElement extends MobxReactionUpdate(LitElement)`
@customElement("my-blub")
class MyBlub extends MobxLitElement {
  private counter = Count;

  // any observables accessed in the render method will now trigger an update
  public render(): TemplateResult {
    return html`
      <button @click=${this.incrementCount}>+++++</button>
    `;
  }

  private incrementCount() {
    // and you can trigger change in event callbacks
    this.counter.sortAsc(); // value is now n + 1
  }
}
