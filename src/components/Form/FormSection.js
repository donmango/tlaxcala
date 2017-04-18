import styled from 'styled-components'

export default styled.div`
 display: inline-block;
 padding: 0 1em;
 text-align: left;
 ${props => props.half ? 'width: 50%;' : 'width: 100%;'}
`
