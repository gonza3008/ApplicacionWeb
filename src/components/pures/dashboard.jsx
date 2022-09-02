import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@mui/material';
import Dashboard from '../../app/Appdashboard'
import { getDateFromApi } from '../../Services/axiosService';

/**
 * El prp Variable es el nombre de la leyenda cuando pones el cursor sobre la grafica 
 */
export default function ShowData({ Variable }) {

    var timer;
    const [date, setDate] = useState([]);
    const [meditions, setMeditions] = useState([]);

    const obtainDate = () => {
        getDateFromApi()
            .then((response) => {
                if (response.status === 200) {//Si la respuesta esta ok, guardo la fecha en la variable date. 

                    let tempDate = [];
                    let tempMeditions = [];
                    let tempResponse = response.data.medition;

                    tempResponse.forEach((element, index) => {
                        let temp = element.medition.toString();
                        let array = temp.split(',');
                        tempDate.push(array[2]);
                        setDate(tempDate);
                        tempMeditions.push(array[0]);
                        setMeditions(tempMeditions);
                    });
                }
            })
            .catch((error) => alert(`An error has ocurred ${error}`))
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        //timer = setInterval(obtainDate, 10000);
        obtainDate(); //obtiene los datos una unica vez ni bien renderiza el componente. 
        return () => clearInterval(timer);
    },[]);

    const stopRefresh = ()=> {
        // clearInterval(timer);
         console.log("hola");
    }

    return (

        <div >
            <div  onMouseOver={stopRefresh}>
               
            <Dashboard
                title="Tension bateria"
                subheader="Panel solar 500mA"
                leyend={Variable}
                chartLabels={date}
                chartData={[
                    {
                        name: 'Team B',
                        type: 'area',
                        fill: 'gradient',
                        data: meditions
                    },
                ]}
            />
            </div>

            <Grid item xs={12} md={6} lg={4}>
                <Button onClick={obtainDate} variant="contained">Refresh</Button>
            </Grid>

        </div>
    )
}

