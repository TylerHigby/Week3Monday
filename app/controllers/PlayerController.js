import { AppState } from "../AppState.js"



export class PlayerController {
  constructor() {
    this.drawPlayers
    console.log('character controller loaded')
  }
  drawPlayers() {
    let content = ''
    AppState.players.forEach(player => {
      content += player.PlayerTemplateCard
    })
    document.getElementById('players').innerHTML = content
  }
}