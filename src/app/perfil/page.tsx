// src/app/perfil/page.tsx

// Componente reutilizável para cada seção do perfil
const ProfileSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">{title}</h2>
        <div>{children}</div>
    </div>
);

// Componente reutilizável para um item de informação
const InfoItem = ({ label, value }: { label: string, value: string }) => (
    <div className="mb-2">
        <span className="font-semibold text-gray-600">{label}: </span>
        <span className="text-gray-800">{value}</span>
    </div>
);

export default function PerfilPage() {
    // Dados rando do usuário
    const user = {
        name: "Luiza Melo",
        email: "luiza.clara@email.com",
        memberSince: "Julho de 2024",
        address: "Rua Teste, 123, Bairro Teste, Cidade Teste - RJ, CEP 12345-678",
    };

    // Dados random do histórico de pedidos
    const orderHistory = [
        { id: "#12345", date: "25/07/2024", total: "R$ 15,50", status: "Entregue" },
        { id: "#12321", date: "15/07/2024", total: "R$ 8,00", status: "Entregue" },
    ];

    return (
        <div className="p-8">
            {/* Cabeçalho do Perfil com Avatar e Nome */}
            <div className="flex items-center gap-6 mb-10">
                <div className="w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center text-4xl text-pink-600">
                    {/* Simulação de avatar com a inicial do nome */}
                    {user.name.charAt(0)}
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                    <p className="text-gray-500">{user.email}</p>
                </div>
            </div>

            {/* Grid com as seções do perfil */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Seção de Informações Pessoais */}
                <ProfileSection title="Informações Pessoais">
                    <InfoItem label="Nome Completo" value={user.name} />
                    <InfoItem label="Email" value={user.email} />
                    <InfoItem label="Cliente desde" value={user.memberSince} />
                </ProfileSection>

                {/* Seção de Endereço */}
                <ProfileSection title="Endereço de Entrega">
                    <p className="text-gray-800">{user.address}</p>
                </ProfileSection>

                <div className="lg:col-span-2">
                    <ProfileSection title="Histórico de Pedidos">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="p-2">Pedido</th>
                                    <th className="p-2">Data</th>
                                    <th className="p-2">Total</th>
                                    <th className="p-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderHistory.map(order => (
                                    <tr key={order.id} className="border-b last:border-0">
                                        <td className="p-2 font-mono text-pink-600">{order.id}</td>
                                        <td className="p-2">{order.date}</td>
                                        <td className="p-2">{order.total}</td>
                                        <td className="p-2">
                                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </ProfileSection>
                </div>
            </div>

            {/* Botão de Sair */}
            <div className="mt-10">
                <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 transition-colors">
                    Sair (Logout)
                </button>
            </div>
        </div>
    );
}