import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import GameContainer from './components/gameContainer/GameContainer';
import RulesBtn from './components/rulesbtn/RulesBtn'
import ResultContainer from './components/resultContainer/ResultContainer';
import Modal from './components/modal/Modal';
import Paper from './components/paper';
import Scissors from './components/scissors';
import Rock from './components/rock';
import Spock from './components/spock';
import Lizard from './components/lizard';

class App extends React.Component {

  state = {
    mySelection: '',
    computerSelection: '',
    resultMsg: '',
    gameOn: true,
    score: 0,
    isModalOpen: false,
    loading: false,
    normalMode: false
  }


  componentDidMount = () => {
    if (localStorage.getItem('score')) {
      let scoreLocal = JSON.parse(localStorage.getItem('score'))
      this.setState({ score: scoreLocal })
      this.setState({ loading: true })

    } else {
      localStorage.setItem('score', '0')
    }
  }

  render() {
    return (
      <>
        {this.state.loading ?
          <Navbar
            score={this.state.score}
            changeMode={this.changeMode}
            normalMode={this.state.normalMode}
            gameOn={this.state.gameOn} />
          :
          <Navbar score={"-"} normalMode={this.state.normalMode} />
        }

        {this.state.isModalOpen ? <Modal closeModal={this.closeModal} normalMode={this.state.normalMode} /> : null}
        {
          this.state.gameOn ?
            <GameContainer handleClick={this.handleClick} normalMode={this.state.normalMode} />
            :
            <ResultContainer
              mySelection={this.renderChoice(this.state.mySelection, this.state.resultMsg, 'mine', this.state.loading, this.state.gameOn)}
              computerSelection={this.renderChoice(this.state.computerSelection, this.state.resultMsg, "computer", this.state.loading, this.state.gameOn)}
              resultMsg={this.state.resultMsg}
              handleButton={this.handleAgainButton}
              setLoading={this.setLoading}
              loading={this.state.loading}
            />
        }

        <RulesBtn openModal={this.openModal} />

      </>
    );
  }


  setLoading = () => this.setState({ loading: true })

  openModal = () => this.setState({ isModalOpen: true })

  closeModal = () => this.setState({ isModalOpen: false })

  handleAgainButton = () => this.setState({ gameOn: !this.state.gameOn })

  changeMode = () => {
    console.log(this.state.normalMode)
    this.setState({ normalMode: !this.state.normalMode })
  }


  /* Usuario realiza una seleccion*/
  handleClick = async (event) => {
    let computer = this.selectComputerChoice(this.state.normalMode)
    await this.setState({ computerSelection: computer })
    await this.setState({ mySelection: event })

    let message = await this.playGame(this.state.mySelection, this.state.computerSelection)
    this.setScore(message)

    this.setState({ resultMsg: message })
    this.setState({
      gameOn: !this.state.gameOn,
      loading: false,
    })
  }



  renderChoice = (word, txt, turn, loading, gameOn) => {
    console.log(word, turn, loading)
    let winner = false
    if (turn === "mine" && txt === "You win") {
      winner = true
    } else if (turn === "computer" && txt === "You lose") {
      console.log('entro cuando gana la compu')
      winner = true
    }

    /*  winner => indica  shape ganadora (para agregarle shadow class) y loading => hace esperar x segundos 
    antes de mostrar el resultado*/
    switch (word) {
      case 'rock':
        return <Rock winner={winner} loading={loading} secondRendering={true} gameOn={gameOn} />
      case 'paper':
        return <Paper winner={winner} loading={loading} secondRendering={true} gameOn={gameOn} />
      case 'scissors':
        return <Scissors winner={winner} loading={loading} secondRendering={true} gameOn={gameOn} />
      case 'lizard':
        return <Lizard winner={winner} loading={loading} secondRendering={true} gameOn={gameOn} />
      case 'spock':
        return <Spock winner={winner} loading={loading} secondRendering={true} gameOn={gameOn} />
      default:
        break;
    }

  }

  /* Computer hace su eleccion */

  selectComputerChoice = (normalMode) => {
    let choices = normalMode ? ["rock", "paper", "scissors"] : ["rock", "paper", "scissors", "spock", "lizard"]
     const compAnswer = Math.floor(Math.random() * choices.length);
    return choices[compAnswer];
  }


  /* Play Game y retorna un resultado con msg = "" */
  playGame = (myChoice, computerChoice) => {
    const shapes = {
      rock: { win: ["scissors", "lizard"], action: "beats" },
      paper: { win: ["rock", "spock"], action: "beats" },
      scissors: { win: ["paper", "lizard"], action: "beats" },
      spock: { win: ["scissors", "rock"], action: "beats" },
      lizard: { win: ["spock", "paper"], action: "beats" }
    }
    let msg = "";



    console.log(myChoice, shapes[myChoice], computerChoice, 'asdfasdfasdfasdfads')
    if (myChoice === computerChoice) {
      msg = "It's a draw";
    } else if (shapes[myChoice].win.includes(computerChoice)) {
      msg = "You win"
    } else {
      msg = "You lose"

    }
    return msg
  }


  /* Setea el score segun el resultado en msg */
  setScore = async (msg) => {
    if (msg === 'You win') {
      await this.setState({ score: this.state.score + 1 })
    } else if (msg === "You lose") {
      await this.setState({ score: this.state.score - 1 })
    }
    await this.saveLocalStorage(this.state.score)

  }

  /*Guarda Score en el Local Storage*/
  saveLocalStorage = (score) => localStorage.setItem('score', score)

}

export default App;
