import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import { Titulo } from "../componentes/titulo/titulo";
import { Botoes } from "../componentes/botoes/botoes";
import "./Produto.css";

export function Produto() {
    const [codigo, setCodigo] = useState("");
    const [produto, setProduto] = useState("");
    const navigate = useNavigate();

    const pesquisar = () => {
        navigate("/ProdutoLista", { state: { codigo, produto } });
    };

    const botoes = [
        { titulo: "Novo", action: () => {}, icon: <AddIcon /> },
        { titulo: "Pesquisar", action: pesquisar, icon: <SearchIcon /> }
    ];

    return (
        <>
            <Titulo NomeDaTela="Cadastro de Produto" />
            <Botoes itens={botoes} />

            <div className="dados">
                <TextField
                    id="Codigo"
                    label="Código"
                    variant="outlined"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />

                <TextField
                    id="Produto"
                    label="Produto"
                    variant="outlined"
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
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
