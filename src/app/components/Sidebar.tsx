import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Search, ShoppingCart, User } from 'lucide-react';



export default function Sidebar() {
    return (
        <aside
            style={{

                height: "80px",
                width: "100%",
                padding: "0 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: 'relative',

                background: "#f5f5dc",
                fontFamily: "'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif'",
                fontSize: "20px",
                borderBottom: "1px solid #ddd",
            }}
        >

            {/* parte da esquerda */}
            <div style={{ flex: 1 }}>
                <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '2rem' }}>
                    <li><Link href="/" className="main-nav-link">Home</Link></li>
                    <li><Link href="/shop" className="main-nav-link">Shop</Link></li>
                    <li><Link href="/about" className="main-nav-link">About</Link></li>
                </ul>
            </div>

            {/* logo centralizado */}

            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Image src="/logo3.png" alt='Logo' width={160} height={50} priority>

                </Image>
            </div>

            {/* ícones na direita 👤❤️🏠*/}

            <div style={{ display: 'flex', flexDirection: 'row', }}>
                <p style={{ margin: 0, color: '#aaa', display: "flex",gap: '2rem'  }}>
                    <Search color="#2C2C2C" size={24} style={{ cursor: 'pointer' }} />
                    <ShoppingCart color="#2C2C2C" size={24} style={{ cursor: 'pointer' }} />
                    <User color="#2C2C2C" size={24} style={{ cursor: 'pointer' }} />
                </p>
            </div>
        </aside >
    );
}