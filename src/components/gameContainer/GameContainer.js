import React, { Component } from 'react'
import Paper from '../paper';
import Lizard from '../lizard';
import Rock from '../rock';
import Scissors from '../scissors';
import Spock from '../spock';
import styles from './styles.css'

class GameContainer extends Component {
    render() {
        console.log(this.props)
        const { handleClick, normalMode } = this.props
        return (

            <>

                {
                    normalMode ?
                        <div className="choices__triangle">
                            <Paper handleClick={handleClick} />
                            <Rock handleClick={handleClick} />
                            <Scissors handleClick={handleClick} />

                            <div class="triangle__container">
                                <img className="triangle__img" src="./images/bg-triangle.svg" alt="background" />
                            </div>

                        </div>
                        :
                        <div className="choices__pentagon">
                            <Paper handleClick={handleClick} />
                            <Lizard handleClick={handleClick} />
                            <Rock handleClick={handleClick} />
                            <Scissors handleClick={handleClick} />
                            <Spock handleClick={handleClick} />
                            <div class="pentago__container">
                                <img className="pentagon__img" src="./images/bg-pentagon.svg" alt="background" />
                            </div>
                        </div>
                }
            </>
        )
    }
}


export default GameContainer

/*    <Scissors handleClick={this.props.handleClick}/>
             <Rock handleClick={this.props.handleClick}/>
             <Spock handleClick={this.props.handleClick}/>
             <Lizard handleClick={this.props.handleClick}/>*/
