import styled from 'styled-components';

const DivView = styled.div`

  overflow: hidden;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
/*   ${props.small?{height:'7.5rem',
width: '5rem', marginBottom: '15px', 
border: '0.2px solid rgb(125, 121, 121)'}:
(props.Medium?{height:'10rem', width: '100%'}:
{height:'30rem', width: '100%'})};
*/
const ImageView = (props) => {
    return(
        <DivView >
          <img 
          style={props.small?{height: '100%',width: '100%'}:{objectFit: 'cover',width: '100%'}}
          src={props.src} alt={props.alt} />
        </DivView>
    )
}

export default ImageView;