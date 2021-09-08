import styled from 'styled-components';

export const ModalContainer = styled.div`
width: 100%;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: white;
position: absolute;
padding: 3rem 0rem;
z-index: 5;
background-attachment: fixed;
background-size: cover;
position: fixed;


.modal{
    text-align: center;
    width: 100%;
    padding: 0rem 0rem;


}
.modal-title  {
    color: hsl(229, 25%, 31%);
    margin: 2rem 0;
    text-align: center;
     text-transform: uppercase;
    font-size: 1.7rem;
  }
  
  .modal svg, .modal img {
    transform: scale(0.7);
    margin: 1rem auto;
  }
  
  .fa-times {
    color: black;
    text-align: center;
    color: hsla(217, 16%, 45%, 0.39);
    text-decoration: none;
    font-size: 2rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }
  
  .fa-times:hover {
    color: hsla(217, 16%, 45%);
  }
  
  .close {
    display: block;
    margin: auto;
    text-align: center;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .close svg {
    transform: scale(1.3);
  }
  
  .close:hover path {
    fill: var(--darkBlue);
  }


@media(min-width: 510px) {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-attachment: fixed;
      background-color: hsla(238, 48%, 15%, 0.699);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 5;
      min-height: 100vh;
      position: fixed;
    
    
    .modal {
        padding: 0rem;
        border-radius: 8px;
        width: 350px;
        height: 350px;
        position: relative;
      }

      .modal-title {
        margin-top: 0.3rem;
        margin-left: 0.6rem;
        text-align: left;
        margin-bottom: 0rem;
      }

      .modal__image{
        width: 100%
      }

      .modal__image img {
        margin: 0rem auto;
         width: 90%

      }
    
      .close svg {
        transform: scale(1.3);
      }
    
      .close {
        position: absolute;
        top: 0px;
        left: 306px;
      }
    }
}
`
