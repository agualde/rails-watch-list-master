import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "infos", "form", "card" ]

  connect() {
    console.log('hello')
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
    console.log('titis')
    // this.infosTarget.classList.remove('d-none');
    // this.formTarget.classList.add('d-none');
  }

}