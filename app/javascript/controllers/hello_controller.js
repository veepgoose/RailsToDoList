import { Controller } from "@hotwired/stimulus"
import Rails from "rails-ujs";
Rails.start();

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
}
