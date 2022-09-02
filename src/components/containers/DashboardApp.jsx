import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ShowData from '../pures/dashboard';
import Page from '../pures/Page';
import {} from '../../styles/Dash.css'


const DashboardApp = () => {


    return (
        <div >
            <Page title='Dashboard'>
                <Container>
                    <Typography variant="h4" sx={{ mb: 5, 'padding-top':'10px' }}>
                        Mediciones
                    </Typography>
                    <Grid item xs={12} md={6} lg={8}>
            
                    </Grid>
                    <ShowData className='dash'  Variable={"Tension"}></ShowData>
                </Container>
            </Page>
        </div>

    );
}

export default DashboardApp;
