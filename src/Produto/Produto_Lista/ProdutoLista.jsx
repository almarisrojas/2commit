import { useState, useEffect } from "react";
import { Titulo } from "../../componentes/titulo/titulo";
import { Botoes } from "../../componentes/botoes/botoes";
import "./ProdutoLista.css";

import  AddIcon  from '@mui/icons-material/Add';
import  KeyboardReturnIcon  from '@mui/icons-material/KeyboardReturn';

import { getProdutos } from "../../Services/Produto.Service";

import {
    Table, TableBody, TableCell,
    TableHead, TableRow, TableContainer
} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useNavigate, useLocation} from 'react-router-dom';

export default function ProdutoLista() {

    const location = useLocation();
    const {codigo, produto} = location.state || {};

    const [ListaProduto, setListaProduto] = useState([]);


    useEffect(() => {
        getLista();
    }, []);


    const botoes = [
        { titulo: 'Novo', navigate: 'Novo', icon: <AddIcon /> },
        { titulo: 'Retornar', action: () => retornar(), icon: <KeyboardReturnIcon /> }
    ];

    const navigate = useNavigate();

    const retornar = () => {
        navigate('/Produto');
    }

    const getLista = async () => {
        getProdutos(codigo , produto).then((resposta) => {
            setListaProduto(resposta);
        }).catch((error) => {
          console.log('Erro ao buscar o produto ' + error);
        });
    }

    return (
        <>
            <Titulo NomeDaTela="Lista de Produtos"></Titulo>
            <Botoes itens={botoes}></Botoes>
            <div class="dados">
                <TableContainer component={Paper}>
                    <Table sx={{ width: '100%' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Código</TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>Valor de Compra</TableCell>
                                <TableCell>Valor de Venda</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ListaProduto.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.Codigo}</TableCell>
                                    <TableCell>{row.Nome}</TableCell>
                                    <TableCell>{row.ValorCompra}</TableCell>
                                    <TableCell>{row.ValorVenda}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>


        </>
    );
}