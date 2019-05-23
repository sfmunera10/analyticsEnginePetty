import React, { Component} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Heatmap from 'react-simple-heatmap';
import ReactWordcloud from "react-wordcloud";
import Widget04 from './../Widgets/Widget04';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Progress,
  Row
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const heat1 = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

const heat10 = [
            [0,0,0,0,0,0,0,0,5,10,0,7,0,0,4,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,24,0,0,12,0,45,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,7,0,0,0,0,2,0,0,0],
            [0,0,0,0,0,0,0,0,13,0,0,4,0,0,0,0,0,0,0,2,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,78,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

const pie2 = {
  labels: [
    'Urgencia veterinaria',
    'Vacunación',
    'Belleza',
    'Paseos',
    'Desparasitación',
    'Partos y esterilización',
    'Servicios fúnebres',
    'Pedidos',
    'Rescate'
  ],
  datasets: [
    {
      data: [300, 50, 100,40,96,24,51,20,39],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#20C997',
        '#4DBD74',
        '#6F42C1',
        '#E83E8C',
        '#F8CB00',
        '#17A2B8'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#20C997',
        '#4DBD74',
        '#6F42C1',
        '#E83E8C',
        '#F8CB00',
        '#17A2B8'
      ],
    }],
};

const line3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Usaquén',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(32, 168, 216,1)',
      borderColor: 'rgba(32, 168, 216,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(75,192,192,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 9, 12, 16, 18, 20, 15],
    },
    {
      label: 'Suba',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(111, 66, 193,1)',
      borderColor: 'rgba(111, 66, 193,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(111, 66, 193,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(111, 66, 193,1)',
      pointHoverBorderColor: 'rgba(111, 66, 193,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [15,18,11,6,3,4,11],
    },
    {
      label: 'Santa Fe',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(232, 62, 140,1)',
      borderColor: 'rgba(232, 62, 140,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(232, 62, 140,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(232, 62, 140,1)',
      pointHoverBorderColor: 'rgba(232, 62, 140,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [19, 2, 12, 16, 7, 1, 11],
    },
    {
      label: 'La Candelaria',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(248, 108, 107,1)',
      borderColor: 'rgba(248, 108, 107,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(248, 108, 107,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(248, 108, 107,1)',
      pointHoverBorderColor: 'rgba(248, 108, 107,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [6, 14, 20, 11, 16, 13, 2],
    },
    {
      label: 'Chapinero',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 193, 7,1)',
      borderColor: 'rgba(255, 193, 7,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255, 193, 7,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 193, 7,1)',
      pointHoverBorderColor: 'rgba(255, 193, 7,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [17, 8, 5, 12, 16, 13, 6],
    },
    {
      label: 'Teusaquillo',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(77, 189, 116,1)',
      borderColor: 'rgba(77, 189, 116,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(77, 189, 116,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(77, 189, 116,1)',
      pointHoverBorderColor: 'rgba(77, 189, 116,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [13, 5, 8, 20, 13, 7, 2],
    }
  ],
};

const line4 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Usaquén',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(32, 168, 216,1)',
      borderColor: 'rgba(32, 168, 216,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(75,192,192,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 9, 12, 16, 18, 20, 15],
    },
    {
      label: 'Suba',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(111, 66, 193,1)',
      borderColor: 'rgba(111, 66, 193,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(111, 66, 193,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(111, 66, 193,1)',
      pointHoverBorderColor: 'rgba(111, 66, 193,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [15,18,11,6,3,4,11],
    },
    {
      label: 'Santa Fe',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(232, 62, 140,1)',
      borderColor: 'rgba(232, 62, 140,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(232, 62, 140,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(232, 62, 140,1)',
      pointHoverBorderColor: 'rgba(232, 62, 140,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [19, 2, 12, 16, 7, 1, 11],
    },
    {
      label: 'La Candelaria',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(248, 108, 107,1)',
      borderColor: 'rgba(248, 108, 107,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(248, 108, 107,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(248, 108, 107,1)',
      pointHoverBorderColor: 'rgba(248, 108, 107,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [6, 14, 20, 11, 16, 13, 2],
    },
    {
      label: 'Chapinero',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 193, 7,1)',
      borderColor: 'rgba(255, 193, 7,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255, 193, 7,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 193, 7,1)',
      pointHoverBorderColor: 'rgba(255, 193, 7,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [17, 8, 5, 12, 16, 13, 6],
    },
    {
      label: 'Teusaquillo',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(77, 189, 116,1)',
      borderColor: 'rgba(77, 189, 116,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(77, 189, 116,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(77, 189, 116,1)',
      pointHoverBorderColor: 'rgba(77, 189, 116,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [13, 5, 8, 20, 13, 7, 2],
    }
  ],
};

const line5 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Usaquén',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(32, 168, 216,1)',
      borderColor: 'rgba(32, 168, 216,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(75,192,192,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 9, 12, 16, 18, 20, 15],
    },
    {
      label: 'Suba',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(111, 66, 193,1)',
      borderColor: 'rgba(111, 66, 193,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(111, 66, 193,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(111, 66, 193,1)',
      pointHoverBorderColor: 'rgba(111, 66, 193,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [15,18,11,6,3,4,11],
    },
    {
      label: 'Santa Fe',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(232, 62, 140,1)',
      borderColor: 'rgba(232, 62, 140,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(232, 62, 140,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(232, 62, 140,1)',
      pointHoverBorderColor: 'rgba(232, 62, 140,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [19, 2, 12, 16, 7, 1, 11],
    },
    {
      label: 'La Candelaria',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(248, 108, 107,1)',
      borderColor: 'rgba(248, 108, 107,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(248, 108, 107,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(248, 108, 107,1)',
      pointHoverBorderColor: 'rgba(248, 108, 107,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [6, 14, 20, 11, 16, 13, 2],
    },
    {
      label: 'Chapinero',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 193, 7,1)',
      borderColor: 'rgba(255, 193, 7,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255, 193, 7,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 193, 7,1)',
      pointHoverBorderColor: 'rgba(255, 193, 7,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [17, 8, 5, 12, 16, 13, 6],
    },
    {
      label: 'Teusaquillo',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(77, 189, 116,1)',
      borderColor: 'rgba(77, 189, 116,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(77, 189, 116,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(77, 189, 116,1)',
      pointHoverBorderColor: 'rgba(77, 189, 116,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [13, 5, 8, 20, 13, 7, 2],
    }
  ],
};

const bar8 = {
  labels: ['Pug', 'Labrador Retriever', 'Corgi', 'Dálmata', 'Akita americano', 'Pastor alemán'],
  datasets: [
    {
      label: '',
      backgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      hoverBorderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      data: [65, 59, 80, 81, 56, 60],
    },
  ],
};

const bar9 = {
  labels: ['Rabia', 'Influenza Canina H3N8', 'Giardia', 'Coronavirus', 'Parvovirus', 'Leptospirosis'],
  datasets: [
    {
      label: '',
      backgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      hoverBorderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      data: [65, 59, 80, 81, 56, 60],
    },
  ],
};

const bar11 = {
  labels: ['Pug', 'Labrador Retriever', 'Corgi', 'Dálmata', 'Akita americano', 'Pastor alemán'],
  datasets: [
    {
      label: '',
      backgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      hoverBorderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      data: [65, 59, 80, 81, 56, 60],
    },
  ],
};

const bar12 = {
  labels: ['Pug', 'Labrador Retriever', 'Corgi', 'Dálmata', 'Akita americano', 'Pastor alemán'],
  datasets: [
    {
      label: '',
      backgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      hoverBorderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      data: [65, 59, 80, 81, 56, 60],
    },
  ],
};

const bar16 = {
  labels: ['Ashera', 'Toyger', 'Siamés'],
  datasets: [
    {
      label: '',
      backgroundColor: [
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderColor: [
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      hoverBorderColor: [
      'rgba(248, 108, 107,1)',
      'rgba(255, 193, 7,1)',
      'rgba(77, 189, 116,1)'
      ],
      data: [65, 59, 80],
    },
  ],
};

const bar17 = {
  labels: ['Alimentos', 'Medicamentos', 'Accesorios'],
  datasets: [
    {
      label: '',
      backgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)'
      ],
      borderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      ],
      hoverBorderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      ],
      data: [65, 59, 80],
    },
  ],
};

const bar18 = {
  labels: ['Chunky', 'Pedigree', 'Dogourmet'],
  datasets: [
    {
      label: '',
      backgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)'
      ],
      borderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      ],
      hoverBorderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      ],
      data: [65, 59, 80],
    },
  ],
};

const bar19 = {
  labels: ['Gorros navideños', 'Zapatos', 'Disfraces'],
  datasets: [
    {
      label: '',
      backgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)'
      ],
      borderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      ],
      hoverBorderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      ],
      data: [65, 59, 80],
    },
  ],
};

const bar20 = {
  labels: ['Drontal', 'Dragxicilina', '<Capstar></Capstar>'],
  datasets: [
    {
      label: '',
      backgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)'
      ],
      borderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)'
      ],
      borderWidth: 1,
      hoverBackgroundColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      ],
      hoverBorderColor: [
      'rgba(32, 168, 216,1)',
      'rgba(111, 66, 193,1)',
      'rgba(232, 62, 140,1)',
      ],
      data: [65, 59, 80],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

const words13 = [
          { text: "Leishmaniosis", value: 3 },
          { text: "Parvovirus", value: 12.5 },
          { text: "Artrosis", value: 1 },
          { text: "Otitis", value: 1 },
          { text: "Diabetes", value: 1 },
          { text: "Garrapatas", value: 1 },
          { text: "Ácaros de la sarna", value: 1 }]

const words14 = [
          { text: "Otitis", value: 3 },
          { text: "Conjuntivitis", value: 12.5 },
          { text: "Rabia", value: 1 },
          { text: "Peritonitis", value: 1 },
          { text: "Inmunodeficiencia felina", value: 1 },
          { text: "Panleucopenia felina", value: 1 },
          { text: "Leucemia felina", value: 1 }]

const words15 = [
          { text: "Vómito", value: 67 },
          { text: "Diarrea", value: 22 },
          { text: "Fiebre", value: 45 },
          { text: "Mareo", value: 23 },
          { text: "Ojos rojos", value: 17 },
          { text: "Inflamación", value: 95 },
          { text: "Sarpullido", value: 56 }]

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    const yLabels = [];
            for(let i = 0; i < 24; i++){
                yLabels.push(i+1 + " h");
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="6" md="2">
            <Widget04 icon="icon-people" color="info" header="87.500" value="25" invert>Usuarios</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-user-follow" color="success" header="385" value="25" invert>Nuevos usuarios</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-basket-loaded" color="warning" header="1238" value="25" invert>Productos vendidos</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-pie-chart" color="primary" header="28" value="25" invert>Veterinarias</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-speedometer" color="danger" header="00:34:11" value="25" invert>Tiempo promedio en la atención de servicios</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-speech" color="info" header="972" value="25" invert>Comentarios</Widget04>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="5">
            <Card>
              <CardHeader>
                Porcentaje de animales encontrados y reportados a Petty que se encuentran en estado de salud grave
              </CardHeader>
              <CardBody>
                <div className="clearfix">
                <div className="float-left">
                <strong>65%</strong>
                </div>
                <div className="float-right">
                <small className="text-muted">May 1, 2019 - May 23, 2019</small>
                </div>
                </div>
                <Progress className="progress-xs" color="danger" value="50" />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                Porcentaje de animales encontrados y reportados a Petty que pasan al proceso de adopción
              </CardHeader>
              <CardBody>
                <div className="clearfix">
                <div className="float-left">
                <strong>50%</strong>
                </div>
                <div className="float-right">
                <small className="text-muted">May 1, 2019 - May 23, 2019</small>
                </div>
                </div>
                <Progress className="progress-xs" color="warning" value="50" />
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                Servicios veterinarios más solicitados
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Pie data={pie2} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="7">
            <Card>
              <CardHeader>
                Solicitudes de urgencia en la semana
              </CardHeader>
              <CardBody>
                <div>
                {heat1.length > 0 && (
                  <Heatmap
                    data={heat1}
                    bgColors={ ["rgb(248, 108, 107)", "rgb(255, 253, 134)"] }
                    xLabels={ ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"] }
                    yLabels={ yLabels }
                    showLegend={ true }
                    xStepLabel={ 1 }
                    yStepLabel={ 1 }
                    showData={true}
                    showTicks={ true }
                    xLabelsStyle={{ fontWeight: "bold", fontSize: "11px" }}
                    yLabelsStyle={{ fontWeight: "bold" }}
                    legendStyle={{ fontWeight: "bold" }}
                    bordered={ false }
                    borderRadius={ "4px" }/>)}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Solicitudes de servicios médicos a domicilio por localidad
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Line data={line3} options={options} />
                </div>
              </CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Reportes de abandono o extravío de mascotas por localidad
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Line data={line4} options={options} />
                </div>
              </CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Reportes de mascotas encontradas por localidad
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Line data={line5} options={options} />
                </div>
              </CardBody>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Solicitudes del servicio de paseador en la semana
              </CardHeader>
              <CardBody>
                <div>
                {heat1.length > 0 && (
                  <Heatmap
                    data={heat10}
                    bgColors={ [" rgb(32, 168, 216)", "rgb(255, 255, 255)"] }
                    xLabels={ ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"] }
                    yLabels={ yLabels }
                    showLegend={ true }
                    xStepLabel={ 1 }
                    yStepLabel={ 1 }
                    showData={true}
                    showTicks={ true }
                    xLabelsStyle={{ fontWeight: "bold", fontSize: "11px" }}
                    yLabelsStyle={{ fontWeight: "bold" }}
                    legendStyle={{ fontWeight: "bold" }}
                    bordered={ false }
                    borderRadius={ "4px" }/>)}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Solicitudes de vacuna por tipo de vacuna
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar9} options={options} />
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                Número de vacunados
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <div className="callout callout-primary">
                      <small className="text-muted">Total</small>
                      <br />
                      <strong className="h4">227</strong>
                    </div>
                  </Col>
                  <Col>
                    <div className="callout callout-secondary">
                      <small className="text-muted">Anual</small>
                      <br />
                      <strong className="h4">227</strong>
                    </div>
                  </Col>
                  <Col>
                    <div className="callout callout-secondary">
                      <small className="text-muted">Mensual</small>
                      <br />
                      <strong className="h4">227</strong>
                    </div>
                  </Col>
                  <Col>
                    <div className="callout callout-secondary">
                      <small className="text-muted">Diario</small>
                      <br />
                      <strong className="h4">13</strong>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Solicitudes de adopción canina por raza
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar8} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Solicitudes de adopción felina por raza
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar16} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Reportes de abandono o extravío por raza canina
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar11} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Reportes de mascotas encontradas por raza canina
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar12} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="4">
            <Card>
              <CardHeader>
                Enfermedades caninas reportadas a Petty
              </CardHeader>
              <CardBody>
                <ReactWordcloud words={words13} />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="4">
            <Card>
              <CardHeader>
                Enfermedades felinas reportadas a Petty
              </CardHeader>
              <CardBody>
                <ReactWordcloud words={words14} />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="4">
            <Card>
              <CardHeader>
                Síntomas comunes registrados en solicitudes de urgencia veterinaria
              </CardHeader>
              <CardBody>
                <ReactWordcloud words={words15} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Productos veterinarios más solicitados por los usuarios
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar17} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Productos de tipo 'alimento' más solicitados por los usuarios
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar18} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Productos de tipo 'accesorio' más solicitados por los usuarios
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar19} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardHeader>
                Productos de tipo 'medicamento' más solicitados por los usuarios
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar20} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Dashboard;