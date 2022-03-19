import { Controller } from "stimulus"
import { csrfToken } from "@rails/ujs"

export default class extends Controller {
  static targets = [ "infos", "form", "card" ]

  connect() {
    // console.log('hello')
    // console.log(this.infosTarget);
    // console.log(this.formTarget);
    // console.log(this.cardTarget);
  }

  displayForm(event) {
    event.preventDefault()
    this.infosTarget.classList.add('d-none');
    this.formTarget.classList.remove('d-none');
  }

  cancelForm() {
    this.infosTarget.classList.remove('d-none');
    this.formTarget.classList.add('d-none');
  }

  add(event) {
    event.preventDefault()
    event.stopImmediatePropagation()
    console.log('tities')
    const action = document.getElementById("form_id").action;
    console.log(action)

    // fetch POST request to link url
    fetch(action, {
    method: "POST",
    headers: {
      "Accept": "text/plain",
      "X-CSRF-Token": csrfToken()
    }
  }
    )

}

}
