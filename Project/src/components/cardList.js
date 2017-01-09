import React from 'react';
import CardListItem from './cardItem';

const cardList = (props) => {
    // console.log(props.cards);
    var setClassName = (props.isLine) ? "cards-line-container text-center" : "cards-container text-center";
    const myCardList = props.cards.map((card) => {
        return <CardListItem card={card} key={card.id} />
    });

    return (
        <div className={setClassName}>
            {myCardList}
        </div>
    );
};

export default cardList;
