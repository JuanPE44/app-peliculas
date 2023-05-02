import styled from 'styled-components'

export function IconSvg({ icon, width, height, color }) {
  return (
    <Icon width={width} height={height} color={color}>
      {icon}
    </Icon>
  )
}

const Icon = styled.div`
  width: ${(props) => (props.width ? props.width : '4')}rem;
  height: ${(props) => (props.height ? props.height : '4')}rem;
  fill: ${(props) => props.color && props.color};
  cursor: pointer;
`
