import React from 'react'
import * as S from '../styled/App'

const Menu = (props) => {
    return(
      <div>
          <S.Menu>{props.name}</S.Menu>
      </div>
    );
}

export default Menu;