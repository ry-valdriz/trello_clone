import React from "react";
import TrelloloCard from './trelloloCard';
import ActionButton from './actionButton';

const TrelloloList = ({title, cards, listID}) => {
    console.log('cards: ', cards)
    return (
        <div style= {styles.container}>
            <h4>{title}</h4>
            {cards.map(card => ( 
                <TrelloloCard key = {card.id} text = {card.text} />
            ))}
            <ActionButton listID = {listID} />
        </div>
    )
};

const styles ={
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 10,
        width: 300,
        padding: 8,
        height: '100%',
        marginRight: 8,
    }
}

export default TrelloloList;