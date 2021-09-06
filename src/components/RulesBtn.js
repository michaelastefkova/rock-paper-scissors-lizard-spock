import React from 'react'
import styles from './styles.css'
import { ButtonFormat } from './../styledComponents/ButtonFormat';

export default function RulesBtn(props) {
    return (
        <div class="rules-container">
             <ButtonFormat  onClick={props.openModal}> Rules </ButtonFormat>
        </div>
    )
}
