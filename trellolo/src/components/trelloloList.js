import React from "react";
import TrelloloCard from './trelloloCard';

const TrelloloList = ({title, cards}) => {
    return (
        <div style= {styles.container}>
            <h4>{title}</h4>
            {cards.map(card => ( 
                <TrelloloCard text = {card.text} />
            ))}
        </div>
    )
};

const styles ={
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 10,
        width: 300,
        padding: 8,
        marginRight: 8,
    }
}

export default TrelloloList;