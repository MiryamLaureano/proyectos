var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiZ2lzbWFzdGVybTIiLCJhIjoiY2plZHhubTQxMTNoYzMza3Rqa3kxYTdrOCJ9.53B1E6mKD_EQOVb2Y0-SsA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'BAJO RIMAC 1985 - 2021',
    subtitle: 'Detección de Cambios e Indice de Calidad Ambiental Urbano',
    byline: 'Miryam Laureano ',
    footer: 'Source: Universidad Politécnica de Catalunya',
    



    
    chapters: [

        {
            id: 'Mapa Cuenca Bajo Rimac',
            alignment: 'center',
            hidden: false,
            title: 'Ubicación',
            image: 'https://cdn-images-1.medium.com/max/1200/1*t3Kf_THxWcFEAwcf6V9UtA.jpeg',
            description: '',
            location: {
                center: [-77.03091, -12.04958],
                zoom: 10,
                pitch: 52.50,
                bearing: -32.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 10000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
           

        },
        {
            id: '1 Cultura Lima',
            alignment: 'right',
            hidden: false,
            title: 'Cultura Lima',
            image: 'https://cdn-images-1.medium.com/max/1200/1*h_WzM4YsmoDHtEsC4A8VFA.png',
            description: 'Fue una cultura que se desarrolló entre los años 100 y 650 de nuestra era, abarcando los valles de los ríos Chillón, Rímac y Lurín. Los palacios y santuarios, se convierten en centros urbanos. Como todas las culturas, la base de su economía fue la agricultura. Construyeron dos obras de ingeniería que hasta el día de hoy sirven. El «río Surco», que ya no existe como tal y que es un canal de riego que lleva las aguas del río Rímac de Ate a Chorrillos, pasando por Surco, Miraflores y Barranco. La otra obra hidráulica, es el «canal de Huatica», que lleva las aguas desde La Victoria hasta Maranga.',
            location: {
                center: [-77.03091, -12.04958],
                zoom: 10,
                pitch: 52.50,
                bearing: -32.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 10000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
           

        },

        {
            id: '2 Componente distrital',
            alignment: 'left',
            hidden: false,
            title: 'Componente Distrital',
            image: 'https://cdn-images-1.medium.com/max/1200/1*JP7JdY3tY80RawPqQBRf6A.png',
            description: 'La Cuenca Baja del Rímac, en cuyo ámbito se encuentra emplazada La Ciudad de Lima  antaño nombrada la ciudad jardín, con un plan urbano eficiente en los años ’60, contiene 30 distritos de la ciudad que en un periodo de 40 años ha incrementado su población exponencialmente, en los años ’50 motivados por el éxodo rural venidos del interior del país en búsqueda de mejores oportunidades, posteriormente en busca de asilo provocados la de violencia terrorista que azotó el país durante 10 años en los años ‘80 y ’90 y, en la actualidad el crecimiento de la ciudad se basa en el natural crecimiento de la población que la puebla.',
            location: {
                center: [-77.03091, -12.04958],
                zoom: 10,
                pitch: 52.50,
                bearing: -32.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 10000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
           

        },
        {
            id: '3 ruta metodológica',
            alignment: 'center',
            hidden: false,
            title: 'Objetivos y Ruta Metodológica',
            image: 'https://cdn-images-1.medium.com/max/1200/1*NEtzQtgIgLjOYVMqdxm2GQ.png',
            description: '',
            location: {
                center: [-77.03891, -12.06205],
zoom: 15.81,
pitch: 60.00,
bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4 CONSTRUCCIÓN Y SELECCIÓN DE INDICADORES NORMALIZADOS',
            alignment: 'center', 
            hidden: false,
            title: ' CONSTRUCCIÓN Y SELECCIÓN DE INDICADORES NORMALIZADOS',
            image: '',
            description: 'Cálculo de Ratios de Vegetación - Agua e índices NDVI, SAVI, EVI, MNDWI, NDBI, IBISAVI',
            location: {
                center: [-77.03891, -12.06205],
zoom: 15.81,
pitch: 60.00,
bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
       
        {
            id: 'NDVI    1985',
            alignment: 'right',
            hidden: false,
            title: 'NDVI 1985',
            image: 'https://cdn-images-1.medium.com/max/1800/1*ShPGOD1xVMm28UoEEXAiWw.jpeg',
            description: '',
            location: {
                center: [-77.03891, -12.06205],
zoom: 15.81,
pitch: 60.00,
bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: ' NDVI    2021',
            alignment: 'left',
            hidden: false,
            title: 'NDVI 2021',
            image: 'https://cdn-images-1.medium.com/max/1800/1*EePBu2jKulsDpOncIdXXHQ.jpeg',
            description: '',
            location: {
                center: [-77.03891, -12.06205],
zoom: 15.81,
pitch: 60.00,
bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },  
               
        {
            id: 'SAVI VIDEO',
            alignment: 'center',
            hidden: false,
            title: 'DIFERENCIA SAVI - DETECCIÓN DE CAMBIOS',
            image: '',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wOs519unJJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [-77.03891, -12.06205],
zoom: 15.81,
pitch: 60.00,
bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

     
        
        {
            id: 'MNDWI 1985',
            alignment: 'right',
            hidden: false,
            title: 'MNDWI 1985',
            image: 'https://cdn-images-1.medium.com/max/400/1*in8zgyV9r2AeQUvaRxJ4Xg.jpeg',
            description: '',
           
            location: {
                center: [-77.01762, -12.03431],
zoom: 15.72,
pitch: 60.00,
bearing: -40.00

           
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'MNDWI 2021',
            alignment: 'left',
            hidden: false,
            title: 'MNDWI 2021',
            image: 'https://cdn-images-1.medium.com/max/400/1*MDyogKYLVFLo4r-f9mEeXg.jpeg',
            description: '',
           
            location: {
                center: [-77.01762, -12.03431],
zoom: 15.72,
pitch: 60.00,
bearing: -40.00

           
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'video mndwi',
            alignment: 'centered', 
            hidden: false,
            title: 'Detección de cambios - MNDWI',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/s_C6pSDxGek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
        rotateAnimation: true,
        callback: '',
        },
       

       
        {
            id: 'NDBI 1985',
            alignment: 'right',
            hidden: false,
            title: 'NDBI - 1985',
            image: 'https://cdn-images-1.medium.com/max/1200/1*qEa5B7YotK_U90OGUZ2U7w.jpeg',
            description: '',
            location: {
                center: [-77.00532, -12.00787],
zoom: 14.15,
pitch: 60.00,
bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'NDBI 2021',
            alignment: 'left',
            hidden: false,
            title: 'NDBI 2021',
            image: 'https://cdn-images-1.medium.com/max/1200/1*3BGhBLeRYJgCMwso6sBX6g.jpeg',
            description: '',
            location: {
                center: [-77.00532, -12.00787],
zoom: 14.15,
pitch: 60.00,
bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'video NDBI',
            alignment: 'centered', 
            hidden: false,
            title: 'Detección de Cambios NDBI',
            description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oZWk8BvDgvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            location: {
                center: [30, 10],
                zoom: 1.5,
                pitch: 10,
                bearing: -13.2
            },
            mapAnimation: 'flyTo',
        rotateAnimation: true,
        callback: '',
        },



        {
            id: 'ICAU ',
            alignment: 'CENTER',
            hidden: false,
            title: ' ÍNDICE DE CALIDAD AMBIENTAL URBANO MEDIANTE TELEDETECCIÓN PERIODO 1985 - 2021',
            image: '',
           
            description: '',
            location: {
                center: [-77.14743, -12.03159],
                zoom: 16.02,
                pitch: 60.00,
                bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ICAU 1985',
            alignment: 'center',
            hidden: false,
            title: ' DETERMINACIÓN DE ICAU 1985',
            image: 'https://cdn-images-1.medium.com/max/800/1*DGm2-QgNtq1beQJXgPwJkw.png',
           
            description: '',
            location: {
                center: [-77.14743, -12.03159],
                zoom: 16.02,
                pitch: 60.00,
                bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ICAU 1985',
            alignment: 'center',
            hidden: false,
            title: ' ICAU 1985 A NIVEL DISTRITAL',
            image: 'https://cdn-images-1.medium.com/max/1200/1*cBJy3IKFJx0-f4ahPaPHkA.png',
           
            description: '',
            location: {
                center: [-77.14743, -12.03159],
                zoom: 16.02,
                pitch: 60.00,
                bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'pie ICAU 1985',
            alignment: 'right',
            hidden: false,
            title: 'GRÁFICO DETERMINACIÓN DE ICAU 1985',
            image: 'https://cdn-images-1.medium.com/max/800/1*MFYik91u4QiXTYuGp4zaSA.png',
           
            description: '',
            location: {
                center: [-77.14743, -12.03159],
                zoom: 16.02,
                pitch: 60.00,
                bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ICAU 2021',
            alignment: 'center',
            hidden: false,
            title: ' DETERMINACIÓN DEL ICAU 2021 ',
            image: 'https://cdn-images-1.medium.com/max/800/1*c4jBixVI5zs21Cpb4zVeCw.png',
           
            description: '',
            location: {
                center: [-77.14743, -12.03159],
                zoom: 16.02,
                pitch: 60.00,
                bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ICAU 2021',
            alignment: 'center',
            hidden: false,
            title: ' ICAU 2021 A NIVEL DISTRITAL',
            image: 'https://cdn-images-1.medium.com/max/533/1*4lktWYi5uQV6LCNeYLueaA.png',
           
            description: '',
            location: {
                center: [-77.14743, -12.03159],
                zoom: 16.02,
                pitch: 60.00,
                bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'PIE ICAU 2021',
            alignment: 'left',
            hidden: false,
            title: ' GRÁFICO DETERMINACIÓN DE ICAU 2021',
            image: 'https://cdn-images-1.medium.com/max/800/1*bkf8QP2W8_davfA5xy5OYw.png',
           
            description: '',
            location: {
                center: [-77.14743, -12.03159],
                zoom: 16.02,
                pitch: 60.00,
                bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },



        {
            id: 'CONCLUSIONES ',
            alignment: 'CENTER',
            hidden: false,
            title: ' CONCLUSIONES',
            image: '',
           
            description: '',
            location: {
                center: [-77.14743, -12.03159],
                zoom: 16.02,
                pitch: 60.00,
                bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },




       

       

      


        {
            id: 'LIMA CENTRO',
            alignment: 'center', 
            hidden: false,
            title: ' ',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8yjyVD_6Kri7zwgpEiiH1EN0NPlrJu4zSQ&usqp=CAU',
            description: '-	Los cálculos se han realizado en función a la media de los datos por pixel, los resultados son una estimación.',
            location: {
                center: [-77.03891, -12.06205],
zoom: 15.81,
pitch: 60.00,
bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Lima Este',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://noticias-pe.laiglesiadejesucristo.org/media/960x540/SJ-Lurigancho-1.jpg',
            description: '-	La calificación de “Bueno” la poseen 6 distritos en 1985 y 10 en 2021; no sorprende encontrar entre ellos a distritos que han gestionado su política ambiental de forma eficiente, adecuando su territorio a cubrir la necesidad de áreas verdes.',
            location: {
                center: [-77.00532, -12.00787],
zoom: 14.15,
pitch: 60.00,
bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Lima Norte',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://www.elperuano.pe/fotografia/thumbnail/2022/12/22/000228010M.jpg',
            description: '-	La calificación de “Regular” se ha incrementado en 2021, con 13 distritos de los 30 medidos, siendo el 43% de distritos del área de estudio, aunque no corresponden en superficie de la cuenca.',
           
            location: {
                center: [-77.01762, -12.03431],
zoom: 15.72,
pitch: 60.00,
bearing: -40.00

           
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Lima Oeste',
            alignment: 'right',
            hidden: false,
            title: ' ',
            image: 'https://portalportuario.cl/wp-content/uploads/2020/01/nave-APL-en-dp-world-callao-peru-400x300.png',
           
            description: 'La calificación de “Malo” se observa en 4 distritos en 2021 frente a los 9 de 1985. La zona centro de Lima permanece en la lista tanto en 1985 como en 2021. En la calificación de “muy malo” se mantiene el número de distritos ente 3 y 4, alguno de ellos ha pasado de ser “Malo” a “Muy malo” es el caso de Carmen de la Legua Reynoso, podría deberse al factor de suelo construido, y poca distribución en su infraestructura urbana a áreas verdes.',
            location: {
                center: [-77.14743, -12.03159],
                zoom: 16.02,
                pitch: 60.00,
                bearing: -30.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Lima Sur',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://viajerosocultos.com/wp-content/uploads/2023/01/beautiful-pacific-ocean-coast-in-lima-miraflores-area-in-lima-city-peru-1.jpg',
            description: 'Por tanto, la tendencia de la calidad ambiental urbana de Lima emplazada en la Cuenca Baja del Rímac, en el periodo de 1985 a 2021 en función a los datos obtenidos muestra mejoría en su Calidad Ambiental Urbana en rasgos generales, ',
            location: {
                

                center: [-77.02965, -12.13809],
                zoom: 15.51,
                pitch: 37.50,
                bearing: -27.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0,
                //     duration: 8000
                // }
            ],
        
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
       
    ]
};
