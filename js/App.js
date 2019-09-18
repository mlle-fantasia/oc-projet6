import Grid from './Grid'

export default class App {

  constructor(){
    this.initGrid()
  }

  initGrid() {
    this.grid = new Grid()
    this.grid.generateCases()
  }
}
