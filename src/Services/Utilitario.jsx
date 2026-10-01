
export const BaseURL = "https://serviconode-rw1c.onrender.com";

let tokenCache = null;
let tokenExpira = 0;

export const obterToken = async () => {
    if (tokenCache && Date.now() < tokenExpira) {
        return tokenCache;
    }

    const resposta = await fetch(`${BaseURL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            usuario: "3info",
            senha: "Protasio@123"
        })
    });

    if (!resposta.ok) {
        let detalhe = "";
        try {
            const dados = await resposta.json();
            detalhe = dados.erro || "";
        } catch {
            // resposta sem JSON
        }
        throw new Error(`Falha no login (HTTP ${resposta.status}) ${detalhe}`.trim());
    }

    const dados = await resposta.json();

    if (!dados.token) {
        throw new Error("A API não retornou o token");
    }

    tokenCache = dados.token;
    tokenExpira = Date.now() + 50 * 60 * 1000;

    return tokenCache;
};

export const fetchAutenticado = async (url, opcoes = {}) => {
    const token = await obterToken();

    return fetch(url, {
        ...opcoes,
        headers: {
            ...(opcoes.headers || {}),
            Authorization: `Bearer ${token}`
        }
    });
};
