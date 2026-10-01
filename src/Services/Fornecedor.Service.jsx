
import { BaseURL, fetchAutenticado } from "./Utilitario";

export const getFornecedores = async (fornecedor = "") => {
    const params = new URLSearchParams();
    params.set("fornecedor", fornecedor || "");

    const resposta = await fetchAutenticado(
        `${BaseURL}/ListaFornecedor?${params.toString()}`
    );

    if (!resposta.ok) {
        let detalhe = "";

        try {
            const corpo = await resposta.json();
            detalhe = corpo.detalhe || corpo.erro || "";
        } catch {
            // resposta sem JSON
        }

        throw new Error(`HTTP ${resposta.status} ${detalhe}`.trim());
    }

    return await resposta.json();
};
