import React from "react";
import * as S from "../Style/StyleHeader";

export default function Header(props){
    
    return(
        <>
          <S.Head>{props.usuario}</S.Head>
        </>
    );
    
};