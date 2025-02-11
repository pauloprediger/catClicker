import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonContext } from '../../context/ButtonContext';

const BuyAndSellSection = ({ sendDataToParent }) => {
    // Estado local para controlar a operação (compra ou venda)
    const [operation, setOperation] = useState('increment'); // 'increment' é o estado inicial
    const [quantity, setQuantity] = useState(1); // Estado da quantidade (1, 10, 100)
    const { dispatch: buttonDispatch } = useContext(ButtonContext);

    const sendData = () => {
        const data = operation === 'increment' ? 'increment' : 'decrement'; // Envia a operação para o pai
        sendDataToParent(data); // Envia os dados para o pai
    };

    const handleBuyClick = () => {
        setOperation('increment'); // Compra: incrementa
    };

    const handleSellClick = () => {
        setOperation('decrement'); // Venda: decrementa
    };

    const handleQuantityClick = (qty) => {
        setQuantity(qty); // Atualiza a quantidade de botões a serem comprados ou vendidos
    };

    const applyOperation = () => {
        // Aplica a operação de compra ou venda para a quantidade escolhida
        buttonDispatch({
            type: 'UPDATE_BUTTON_QUANTITY',
            payload: { operation, quantity },
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '0.5rem',
            }}
            className="bg-secondary border rounded-bottom"
        >
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button variant="success" className="shadow border" onClick={handleBuyClick}>
                    Comprar
                </Button>
                <Button variant="danger" className="shadow border" onClick={handleSellClick}>
                    Vender
                </Button>
            </div>
            <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                <Button variant="secondary" onClick={() => handleQuantityClick(1)}>
                    1
                </Button>
                <Button variant="secondary" onClick={() => handleQuantityClick(10)}>
                    10
                </Button>
                <Button variant="secondary" onClick={() => handleQuantityClick(100)}>
                    100
                </Button>
            </div>
        </div>
    );
};

export default BuyAndSellSection;
