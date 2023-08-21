import { AppState } from "../AppState.js";


class PlayerService {
  manageScore(playerName, updatedScore) {
    let player = AppState.players.find(p => p.name == playerName)
    player.score = updatedScore
    console.log(player)
  }
}