import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import RouterBreadcrumbs from './breadcrumbs/RouterBreadcrumbs';

export default function WrapperPage({ children }) {
    return <Container>
        <Grid item>
            <nav role="navigation" aria-label="menu-principal">
                <RouterBreadcrumbs />
            </nav>
        </Grid>
        <Grid item>
            <main id="main" role="main">
                {children}
            </main>
        </Grid>
    </Container>
}