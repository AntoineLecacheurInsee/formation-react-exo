import React from 'react';
import { Container, Grid } from '@mui/material';
import RouterBreadcrumbs from './breadcrumbs/RouterBreadcrumbs';

export default function WrapperPage({ children }) {
    return <Container>
        <Grid item>
            {/* Affichage du fil d'Ariane en haut de page */}
            <nav role="navigation" aria-label="menu-principal">
                <RouterBreadcrumbs />
            </nav>
        </Grid>
        <Grid item>
            {/* Affichage de la balise <main> et du contenu de la page */}
            <main id="main" role="main">
                {children}
            </main>
        </Grid>
    </Container>
}