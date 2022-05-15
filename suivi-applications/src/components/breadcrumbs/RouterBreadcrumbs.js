import { Breadcrumbs, Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { routes } from './breadcrumbs-routes';

const LinkRouter = (props) => (
    <Link
        color="textPrimary"
        className="link"
        {...props}
        component={RouterLink}
    />
);

const RouterBreadcrumbs = () => {

    const breadcrumbs = useBreadcrumbs(routes, {
        disableDefaults: true,
        excludePaths: ['/'],
    });

    const secondePartieBC = breadcrumbs.map(({ match, breadcrumb }) => (
        <LinkRouter key={breadcrumb} to={match.pathname}>
            {breadcrumb}
        </LinkRouter>
    ));

    /* S'il n'y a rien apres accueil, on n'affiche pas le fil d'arianne */
    return secondePartieBC.length === 0 ? null : (
        <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ fil: { margin: '1em 4em' } }}>
            <LinkRouter to="/">Accueil</LinkRouter>
            {secondePartieBC}
        </Breadcrumbs>
    );
};
export default RouterBreadcrumbs;
