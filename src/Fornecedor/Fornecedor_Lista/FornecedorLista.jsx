import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer
} from "@mui/material";
import Paper from "@mui/material/Paper";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import { Titulo } from "../../componentes/titulo/titulo";
import { Botoes } from "../../componentes/botoes/botoes";
import { getFornecedores } from "../../Services/Fornecedor.Service";
import "./FornecedorLista.css";

export default function FornecedorLista() {
    const location = useLocation();
    const navigate = useNavigate();
    const { fornecedor = "" } = location.state || {};

    const [listaFornecedor, setListaFornecedor] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        let ativo = true;

        const carregar = async () => {
            setCarregando(true);
            setErro("");

            try {
                const resposta = await getFornecedores(fornecedor);

                if (ativo) {
                    setListaFornecedor(Array.isArray(resposta) ? resposta : []);
                }
            } catch (error) {
                console.error("Erro ao buscar fornecedores:", error);

                if (ativo) {
                    setListaFornecedor([]);
                    setErro(error.message || "Erro ao buscar fornecedores");
                }
            } finally {
                if (ativo) {
                    setCarregando(false);
                }
            }
        };

        carregar();

        return () => {
            ativo = false;
        };
    }, [fornecedor]);

    const botoes = [
        {
            titulo: "Retornar",
            action: () => navigate("/Fornecedor"),
            icon: <KeyboardReturnIcon />
        }
    ];

    return (
        <>
            <Titulo NomeDaTela="Lista de Fornecedores" />

            <Botoes itens={botoes} />

            <div className="dados">
                <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>CNPJ</TableCell>
                                <TableCell>IE</TableCell>
                                <TableCell>Responsável</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {listaFornecedor.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.Nome}</TableCell>
                                    <TableCell>{row.CNPJ}</TableCell>
                                    <TableCell>{row.IE}</TableCell>
                                    <TableCell>{row.Responsavel}</TableCell>
                                </TableRow>
                            ))}

                            {carregando && (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        Carregando...
                                    </TableCell>
                                </TableRow>
                            )}

                            {!carregando && !erro && listaFornecedor.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        Nenhum fornecedor encontrado
                                    </TableCell>
                                </TableRow>
                            )}

                            {!carregando && erro && (
                                <TableRow>
                                    <TableCell colSpan={4} align="center">
                                        {erro}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}
