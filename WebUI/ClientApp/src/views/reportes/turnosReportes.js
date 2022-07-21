﻿import React, { useEffect, useState } from 'react';
import turno from '../../images/change-management.png';
import '../../styles/producciondiaria.css';
import Placas from './placasReportes';
import { Form, Table } from 'react-bootstrap';
import { InputText } from '../../components/inputs';


const TurnosReportes = ({ data}) => { //lista con los datos de turnos


    useEffect(() => {
       
    }, []);

    return (

        <>
            <div className="section-container">
                <div>
                    <div className="turno-left" >
                        <h2>Conteo de placas por turno</h2>
                    </div>
                    <div className="turno-right">
                        <img src={turno} />
                    </div>
                </div>
                <br />
                

                      < Placas turno={data[0].idTurno} placaInicio={data[0].placaInicio} placaFinal={data[0].placaFinal} conteo={data[0].conteo}/>

                    <Placas turno={data[1].idTurno} placaInicio={data[1].placaInicio} placaFinal={data[1].placaFinal} conteo={data[1].conteo} />


                
                <hr />

  
            </div>
        </>
    );
}

export default TurnosReportes;