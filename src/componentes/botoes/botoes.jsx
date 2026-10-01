import React from "react";
import { Button } from "@mui/material";
import "./botoes.css";

export function Botoes({ itens = [] }) {
    return (
        <div className="botoes">
            {itens.map((item, index) => (
                <Button
                    variant="contained"
                    color="success"
                    startIcon={item.icon}
                    key={index}
                    onClick={() => {
                        if (typeof item.action === "function") {
                            item.action();
                        } else if (typeof item.navigate === "function") {
                            item.navigate();
                        }
                    }}
                >
                    {item.titulo}
                </Button>
            ))}
        </div>
    );
}
