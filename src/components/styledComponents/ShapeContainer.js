import styled from 'styled-components'

/* Add border and boxShadow to the shape*/
const handleShape = (props) => {
  console.log(props, 'props. que entran')
  let border
  let boxShadow
  switch (props.shape) {
    case 'paper':
      border = "hsl(230, 89%, 65%)"
      boxShadow = "hsl(230, 89%, 62%)"
      break;
    case 'scissors':
      border = "hsl(40, 84%, 53%)"
      boxShadow = "hsl(39, 89%, 49%)"
      break;
    case 'rock':
      border = "hsl(349, 71%, 52%)"
      boxShadow = "hsl(349, 70%, 56%)"
      break;
    case 'spock':
      border = "hsl(189, 59%, 53%)"
      boxShadow = "hsl(189, 58%, 57%)"
      break;
    case 'lizard':
      border = "hsl(261, 73%, 60%)"
      boxShadow = "hsl(261, 72%, 63%)"
      break;
    default:
      break;
  }

  return `border: 15px solid ${border};
  box-shadow: inset 0 4px 3px -1px rgba(128, 128, 128, 0.767), 1px 8px ${boxShadow};
  `
}

export const ShapeContainer = styled.div`
{
width: ${props => props.gameOn || props.gameOn === undefined ? "8rem" : "12rem" };
height: ${props => props.gameOn || props.gameOn === undefined ? "8rem" : "12rem" };;
margin: auto;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #ffffff;
cursor: pointer;
position: relative;
${( shape ) => handleShape(shape)};
grid-area: ${props => props.shape}
}

&:hover{
  background: rgb(206, 201, 201);
}

.image {
    transform: scale(1);
    transform: ${props => props.gameOn || props.gameOn === undefined ? "scale(1)" : "scale(1.5)" };
}

.shadow {
    width: 10rem;
   height: 10rem;
   box-shadow: 0 0 0 60px #1f3756, 0 0 0 120px #1b2e4f, 0 0 0 180px #182648;
   z-index: -1;
   position: absolute;
   border-radius: 100%;
  }
 
 
  @media (max-width:800px) {
    width: 6rem;
    height: 6rem; 

    .image {
      transform: scale(0.6);
  }

  .shadow {
  width: 2rem;
    height: 2rem;
  }
  
}

  

`
