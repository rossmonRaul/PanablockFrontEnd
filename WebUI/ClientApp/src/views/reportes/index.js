
import jsPDF from "jspdf";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { InputSelect, InputText } from "../../components/inputs";

import { BarChart } from './grafico'



const Reportes = () => {
    const tipoReportes = [{id: 1, label: "Producción diaria"}, {id: 2, label: "Semento por unidad"}, {id: 3, label: "Acumulado placas"}]
    const [idTipoReporte, setIdTipoReporte] = useState(1);
    const [dia, setDia] = useState("");

    const onChangeTipoReporte = (event) => setIdTipoReporte(event.target.value);
    const onChangeDia = (e) => setDia(e.target.value);

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const datasets = [
        {
          label: 'Dataset 1',
          data: [0,1,2,3,4,5],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: [0,1,2,3,4,5],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ];

    const onClickExportarAPdf = (e) => {
        const newCanvas = document.querySelector('#grafico');
        //newCanvas.fillStyle = "#FFFFFF";
        /*var ctx = newCanvas.getContext('2d');
ctx.fillStyle = 'trasparent';
ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);*/

        const newCanvasImg = newCanvas.toDataURL("image/jpeg", 1.0);
        const doc = new jsPDF('landscape');
        doc.setFontSize(20);
        doc.text(15, 15, "Super Cool Chart");
        doc.addImage(newCanvasImg, 'JPEG', 10, 10, 280, 150 );
        doc.save('new-canvas.pdf');
    }

    return(
        <>
            <h1>Reportes</h1>
            <hr />
            <div>
                <Row>
                    <InputSelect className="form-control custom-select-sm" controlId="sel-rol" label="Tipo de reporte" data={tipoReportes} 
                        onChange={() => onChangeTipoReporte} value={idTipoReporte} optionValue="id" optionLabel="label" classGroup="col-md-3" />
                </Row>
                <br />
                <label>Opciones de busqueda</label>
                <Row>
                    <InputText id='txt-fecha' label='Fecha:' type='date' placeholder='Ingrese el nombre' value={dia}
                        text='Dia a buscar' onChange={onChangeDia} mensajeValidacion="00/00/0000" className="col-md-1" />
                </Row>                
            </div>  
            <button onClick={() => onClickExportarAPdf()}>Export 2 PDF</button>
            <div id="div2PDF">
            <BarChart title="Reporte de produccion diaria" labels={labels} datasets={datasets}/>
            </div>
            
            
        </>
    )
}

export default Reportes;