import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import { Titulo } from "../componentes/titulo/titulo";
import { Botoes } from "../componentes/botoes/botoes";
import "./fornecedor.css";

export function Fornecedor() {
    const [fornecedor, setFornecedor] = useState("");
    const navigate = useNavigate();

    const pesquisar = () => {
        navigate("/FornecedorLista", {
            state: { fornecedor }
        });
    };

    const botoes = [
        {
            titulo: "Novo",
            action: () => {
                // A tela de cadastro ainda não existe.
                // Mantemos o botão para seguir o padrão da tela Produto.
            },
            icon: <AddIcon />
        },
        {
            titulo: "Pesquisar",
            action: pesquisar,
            icon: <SearchIcon />
        }
    ];

    return (
        <>
            <Titulo NomeDaTela="Cadastro de Fornecedor" />

            <Botoes itens={botoes} />

            <div className="dados">
                <TextField
                    id="Fornecedor"
                    label="Fornecedor"
                    variant="outlined"
                    value={fornecedor}
                    onChange={(e) => setFornecedor(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") pesquisar();
                    }}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
            </div>
        </>
    );
}
