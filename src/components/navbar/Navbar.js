import React, { Component } from 'react'
import styles from './styles.css'
import { ButtonFormat } from './../styledComponents/ButtonFormat';

class Navbar extends Component {
    render() {
        const { score, normalMode, changeMode, gameOn } = this.props

        return (
            <nav>
                {
                    normalMode ?
                    <img src="./images/logo.svg" alt='logo' />
                    :
                    <img src="./images/logo-bonus.svg" alt='logo' />
                }
                {
                    gameOn &&
                <div className="button__container">
                <ButtonFormat onClick={changeMode}> Change Mode </ButtonFormat>
                </div>
                }
                
                <div class="scoreboard">
                    <h2 class="scoreboard-title">Score</h2>
                    <p class="score"> {score}</p>
                </div>
            </nav>
        )
    }
}


export default Navbar
