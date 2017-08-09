import _ from 'lodash';
import $ from 'jquery';
import Icon from '../public/img/pc_icon.png';
import 'bootstrap/dist/js/bootstrap';
import 'bootswatch/flatly/bootstrap.css';
import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Cytoscape } from './js/react-cytoscape.jsx';
import { Genelist } from './js/genelist.jsx';
import { Egmt } from './js/egmt.jsx';

const mountElement = $('#epout').get(0);
const mountCytoscape = $('#cp').get(0);
const mountGenelist = $('#form').get(0);



var eles = {
	nodes:[
       {
         data: {
           name: "PIP3 activates AKT signaling",
           color: "#FF0000",
           size: 12.5527,
           id: "PIP3 activates AKT signaling"
         }
       },
       {
         data: {
           name: "Constitutive Signaling by Aberrant PI3K in Cancer",
           color: "#FF0000",
           size: 11.4613,
           id: "Constitutive Signaling by Aberrant PI3K in Cancer"
         }
       },
       {
         data: {
           name: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           color: "#FF0000",
           size: 11.7609,
           id: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling"
         }
       },
       {
         data: {
           name: "Fanconi Anemia Pathway",
           color: "#FF0000",
           size: 10.4139,
           id: "Fanconi Anemia Pathway"
         }
       },
       {
         data: {
           name: "RAF/MAP kinase cascade",
           color: "#FF0000",
           size: 11.7609,
           id: "RAF/MAP kinase cascade"
         }
       },
       {
         data: {
           name: "TP53 Regulates Transcription of DNA Repair Genes",
           color: "#FE0101",
           size: 10.4139,
           id: "TP53 Regulates Transcription of DNA Repair Genes"
         }
       },
       {
         data: {
           name: "Signaling by FGFR3 fusions in cancer",
           color: "#FB1711",
           size: 7.7815,
           id: "Signaling by FGFR3 fusions in cancer"
         }
       },
       {
         data: {
           name: "Downstream signal transduction",
           color: "#FA231A",
           size: 9.0309,
           id: "Downstream signal transduction"
         }
       },
       {
         data: {
           name: "Signaling by FGFR4 in disease",
           color: "#F73528",
           size: 7.7815,
           id: "Signaling by FGFR4 in disease"
         }
       },
       {
         data: {
           name: "Regulation of TP53 Degradation",
           color: "#E5C494",
           size: 9.0309,
           id: "Regulation of TP53 Degradation"
         }
       }
     ],


  edges:[
       {
         data: {
           source: "PIP3 activates AKT signaling",
           target: "Constitutive Signaling by Aberrant PI3K in Cancer",
           width: 3.9441
         }
       },
       {
         data: {
           source: "PIP3 activates AKT signaling",
           target: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           width: 4.0825
         }
       },
       {
         data: {
           source: "Constitutive Signaling by Aberrant PI3K in Cancer",
           target: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           width: 4.3205
         }
       },
       {
         data: {
           source: "PIP3 activates AKT signaling",
           target: "RAF/MAP kinase cascade",
           width: 3.1623
         }
       },
       {
         data: {
           source: "Constitutive Signaling by Aberrant PI3K in Cancer",
           target: "RAF/MAP kinase cascade",
           width: 3.496
         }
       },
       {
         data: {
           source: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           target: "RAF/MAP kinase cascade",
           width: 3.4028
         }
       },
       {
         data: {
           source: "Fanconi Anemia Pathway",
           target: "TP53 Regulates Transcription of DNA Repair Genes",
           width: 2.1082
         }
       },
       {
         data: {
           source: "RAF/MAP kinase cascade",
           target: "Signaling by FGFR3 fusions in cancer",
           width: 2.1693
         }
       },
       {
         data: {
           source: "PIP3 activates AKT signaling",
           target: "Downstream signal transduction",
           width: 2.1822
         }
       },
       {
         data: {
           source: "Constitutive Signaling by Aberrant PI3K in Cancer",
           target: "Downstream signal transduction",
           width: 2.4254
         }
       },
       {
         data: {
           source: "PI5P, PP2A and IER3 Regulate PI3K/AKT Signaling",
           target: "Downstream signal transduction",
           width: 2.357
         }
       },
       {
         data: {
           source: "RAF/MAP kinase cascade",
           target: "Downstream signal transduction",
           width: 2.357
         }
       },
       {
         data: {
           source: "Signaling by FGFR3 fusions in cancer",
           target: "Downstream signal transduction",
           width: 3.3333
         }
       },
       {
         data: {
           source: "RAF/MAP kinase cascade",
           target: "Signaling by FGFR4 in disease",
           width: 2.1693
         }
       },
       {
         data: {
           source: "Signaling by FGFR3 fusions in cancer",
           target: "Signaling by FGFR4 in disease",
           width: 3.7796
         }
       },
       {
         data: {
           source: "Downstream signal transduction",
           target: "Signaling by FGFR4 in disease",
           width: 3.3333
         }
       }
     ]

};


ReactDOM.render(<Egmt/>, mountElement);
ReactDOM.render(<Cytoscape elements={eles}/>, mountCytoscape);
ReactDOM.render(<Genelist/>, mountGenelist);
