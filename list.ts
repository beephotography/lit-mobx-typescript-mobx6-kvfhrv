import { html, TemplateResult, customElement, property } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import Count from './counter';


// create a new custom element, and use the base MobxLitElement class
// alternatively you can use the MobxReactionUpdate mixin, e.g. `class MyElement extends MobxReactionUpdate(LitElement)`
@customElement("my-list")
class MyElement extends MobxLitElement {
  private counter = Count;

  // any observables accessed in the render method will now trigger an update
  public render(): TemplateResult {
    return html`
      Sorting: ${this.counter.sort}
      <ul>
      ${this.counter.list.map(el => `<li>${el}</li>`)}
      </ul>
    `;
  }
}
