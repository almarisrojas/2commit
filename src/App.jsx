import "./App.css";
import Menu from "./componentes/menu/menu";

import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Routes, Route, useNavigate } from "react-router-dom";

import { Produto } from "./Produto/Produto";
import { Fornecedor } from "./Fornecedor/Fornecedor";
import { Saida } from "./Saida/Saida";

import ProdutoLista from "./Produto/Produto_Lista/ProdutoLista";
import FornecedorLista from "./Fornecedor/Fornecedor_Lista/FornecedorLista";

function App() {
    const navigate = useNavigate();

    const controladorNavegacao = (rota) => {
        navigate(rota);
    };

    const menuItens = [
        { label: "Inicio", navigate: "/", icon: <HomeIcon /> },
        { label: "Produto", navigate: "/Produto", icon: <ProductionQuantityLimitsIcon /> },
        { label: "Fornecedor", navigate: "/Fornecedor", icon: <ReceiptLongIcon /> },
        { label: "Saída de Produtos", navigate: "/Saida", icon: <ExitToAppIcon /> }
    ];

    return (
        <>
            <Menu item={menuItens} onNavigate={controladorNavegacao} />

            <div className="corpo">
                <Routes>
                    <Route path="/" element={<h3>Bem-vindo ao sistema de estoque</h3>} />
                    <Route path="/Produto" element={<Produto />} />
                    <Route path="/ProdutoLista" element={<ProdutoLista />} />
                    <Route path="/Fornecedor" element={<Fornecedor />} />
                    <Route path="/FornecedorLista" element={<FornecedorLista />} />
                    <Route path="/Saida" element={<Saida />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
