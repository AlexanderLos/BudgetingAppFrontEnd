import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const GIFPopUp = () => {
    const { expenses, budget } = useContext(AppContext);
    const [gifURL, setGifURL] = useState("");

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    useEffect(() => {
        fetch("https://protected-hollows-19359-274bca1c8068.herokuapp.com/gif")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setGifURL(data); 
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    return (
        <div>
            {totalExpenses > budget && (
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '20px', color: 'red' }}>You have spent too much money</p>
                    <img src={gifURL} style={{ maxWidth: '100%', height: 'auto' }} alt="Budget Exceeded" />
                </div>
            )}
        </div>
    );
}

export default GIFPopUp;
