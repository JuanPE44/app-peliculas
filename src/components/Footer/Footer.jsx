import styled from 'styled-components'

export function Footer() {
  return (
    <FooterDiv className="footer">
      <p>© 2023</p>
    </FooterDiv>
  )
}

const FooterDiv = styled.div`
  margin-top: 12rem;
  padding: 6rem 2rem;
  background: #333;
  p {
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`
