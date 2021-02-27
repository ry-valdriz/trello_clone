import React from "react";
import TrelloloCard from './trelloloCard';

const TrelloloList = ({title}) => {
    return (
        <div style= {styles.container}>
            <h4>{title}</h4>
            <TrelloloCard/>
        </div>
    )
};

const styles ={
    container: {
        backgroundColor: "#ccc",
        borderRadius: 10,
        width: 300,
        padding: 5,
    }
}

export default TrelloloList;