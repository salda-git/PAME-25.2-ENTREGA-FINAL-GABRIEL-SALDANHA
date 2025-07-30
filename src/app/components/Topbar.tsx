import React from 'react';

export default function Topbar() {
    const barStyle: React.CSSProperties = {
        backgroundColor: '#E85A2E',
        color: '#FFFFFF',
        padding: '0.5rem 1rem',
        textAlign: 'center',
        fontSize: '0.9rem',
    };

    return (
        <div style={barStyle}>
            Compras acima de 30R$ Ganham Entrega Gratis. &nbsp; ★ &nbsp; Compras acima de 30R$ Ganham Entrega Gratis. &nbsp; ★ &nbsp; Compras acima de 30R$ Ganham Entrega Gratis.
        </div>
    );
}