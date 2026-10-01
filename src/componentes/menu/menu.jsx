import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import "./menu.css";

function Menu({ onNavigate, item = [] }) {

    return (
        <AppBar position="fixed" color="primary" elevation={3}>
            <Toolbar className="toolbar">
                {item.map((item, index) => (
                    <Button
                        key={index}
                        color="inherit"
                        startIcon={item.icon}
                        onClick={() => { onNavigate(item.navigate)}}
                    >
                        {item.label}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    )

}
export default Menu;