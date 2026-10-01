import { BaseURL, fetchAutenticado } from "./Utilitario";

export const getProdutos = async (codigo = "", produto = "") => {
    const params = new URLSearchParams({ codigo, produto });

    const resposta = await fetchAutenticado(
        `${BaseURL}/ListaProduto?${params.toString()}`
    );

    if (!resposta.ok) {
        throw new Error(`Erro ao buscar produtos: HTTP ${resposta.status}`);
    }

    return await resposta.json();
};
