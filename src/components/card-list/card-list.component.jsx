import React from "react";
import './card-list.style.css';
import '../card/card.component';
import { Card } from "../card/card.component";

export const CardList = props =>(
   <div className="card-list">

    {
     props.monisters.map(monster =>(
     <Card key={monster.id} monster={monster}/> )
     )}

   </div>
)