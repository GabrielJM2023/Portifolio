import React from "react";
import "./style.css";
import Embreve from '../../app/images/Embreve.jpeg'; 
import Teste from '../../app/images/BordaVinha.jpeg'; 

const data = [
    {
        name: 'Em Breve',
        img: Embreve,
    },
    {
        name: 'Em Breve2',
        img: "../../app/images/BordaVinha.jpeg",
    }
];

function Carrosel() {
    return (
        <div className="AreaCarrossel">
            <div className="slides">
                {data.map((d, index) => (
                    <div className="Area" key={index}>
                        <div>
                            <div>
                                <img src={d.img} alt={d.name} /> 
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1>{d.name}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrosel;
