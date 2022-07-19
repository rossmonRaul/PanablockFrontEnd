import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import '../../styles/producciondiaria.css';
import { BarChart, LineChart } from './grafico';
import jsPDF from "jspdf";
import { ReporteProductos } from '../../servicios/ServicioReporte';

const CementoPorUnidad = ({ labels, datasets  }) => {

    /*const [fechaInicio, setfechaInicio] = useState(fechaI);
    const [fechaFinal, setfechaFinal] = useState(/*data.fechaFinal);
    const [idProducto, setidProducto] = useState(/*data.idProducto);*/
    const [dataGrafico, setdataGrafico] = useState([]);

    //hooks

    useEffect(() => {
    }, []);
    const onClickExportarAPdfCemento = (e) => {
        const newCanvas = document.querySelector('#graficoCemento');
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
                <div >
                { <div id="rptContent">
                        <LineChart id="graficoCemento" title={"CEMENTO EN Kg POR UNIDAD DE "} label={labels} values={datasets} style={{ backgroundColor: "white"}} />
                    </div>}
                </div>
                <br />
                <br />
                <button className="btn btn-info" onClick={() => onClickExportarAPdfCemento()}>Exportar a PDF</button>
                <br />
                <br />
            </div>

        </>

    );
}

export default CementoPorUnidad;