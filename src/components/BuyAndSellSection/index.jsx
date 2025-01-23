import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ButtonContext } from '../../context/ButtonContext';

const BuyAndSellSection = () => {
    // Estado local para controlar a operação (compra ou venda)
    const [operation, setOperation] = useState('increment'); // 'increment' é o estado inicial
    const [quantity, setQuantity] = useState(1); // Estado da quantidade (1, 10, 100)
    const { dispatch: buttonDispatch } = useContext(ButtonContext);

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
            payload: { operation, quantity }
        });
    };

    return (
        <div 
            style={{
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                gap: "10px", 
                padding: "0.5rem",
                backgroundColor: operation === 'increment' ? "#6882B3" : "#FAD0C5" // Azul para comprar, vermelho pastel para vender
            }}
            className='bg-secondary border rounded-bottom'
        >
            <div style={{ display: "flex", gap: "10px" }}>
                <Button variant="success" className='shadow border' onClick={handleBuyClick}>
                    Comprar
                </Button>
                <Button variant="danger" className='shadow border' onClick={handleSellClick}>
                    Vender
                </Button>
            </div>
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <Button variant="secondary" onClick={() => handleQuantityClick(1)}>1</Button>
                <Button variant="secondary" onClick={() => handleQuantityClick(10)}>10</Button>
                <Button variant="secondary" onClick={() => handleQuantityClick(100)}>100</Button>
            </div>
            <Button 
                variant={operation === 'increment' ? "success" : "danger"}
                onClick={applyOperation} 
                className='mt-2'
            >
                Aplicar {operation === 'increment' ? "Compra" : "Venda"}
            </Button>
        </div>
    );
};

export default BuyAndSellSection;
