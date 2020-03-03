import styled from "styled-components"

export const TopBarContainer = styled.div`
  @media screen and (min-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
  }
`

export const BarBox = styled.div`
  background: #1a1a1a;
  color: #fff;
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  .lef_menu, .right_search {
    color: #ff9500;
    font-size: 20px;
  }
`