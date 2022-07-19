import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import '../../styles/producciondiaria.css';
import { BarChart, LineChart } from './grafico';
import jsPDF from "jspdf";
import { ReporteAcumulativoMensual } from '../../servicios/ServicioReporte';

const AcumuladoPlacas = ({ data }) => {

    const [dataGrafico, setdataGrafico] = useState([]);

    useEffect(() => {

    }, []);


    const onClickExportarAPdf = (e) => {
        const newCanvas = document.querySelector('#grafico');
        //newCanvas.fillStyle = "#FFFFFF";
        /*var ctx = newCanvas.getContext('2d');
        ctx.fillStyle = 'trasparent';
        ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);*/

        const newCanvasImg = newCanvas.toDataURL("image/png", 1.0);
        const doc = new jsPDF('landscape');
        doc.setFontSize(20);
        doc.text(15, 15, "Grupo PANABLOCK");
        doc.addImage(newCanvasImg, 'PNG', 10, 10, 280, 150);
        doc.save('new-canvas.pdf');
    }


    return (
        <>
            <div className="container">
                <br />
                <br />
                {<BarChart title={"ACUMULADO DE PLACAS "} data={data} id="grafico"  />}
                <br />
                <br />
                <button className="btn btn-info"  onClick={() => onClickExportarAPdf()}>Exportar a PDF</button>

                <br />
                <br />
            </div>

        </>

    );
}

export default AcumuladoPlacas;