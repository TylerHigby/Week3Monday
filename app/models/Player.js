export class Player {
  name
  score
  constructor(name, score) {
    this.name = name;
    // The score is defaulted to start at 0
    this.score = 0;
  }
  get PlayerTemplateCard() {
    return /*html*/`
        <div class="card">
            <div class="card-body">
                ${this.name} - ${this.score}
            </div>
        </div>`
  }
}