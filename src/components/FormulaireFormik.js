import { Button, ButtonGroup, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { Formik } from 'formik'
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    // On déclare chaque champ, son type
    nom: Yup.string()
        .min(2, 'Doit être sur au moins 2 caractères')
        .required('Champ requis'),
    etat: Yup.string()
        .required('Champ requis')
});

const initialValues = {
    nom: 'appli test',
    version: '1.0.0',
    etat: 'ACTIVE'
};

const FormulaireFormik = () => {

    const enregistrer = values => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json")
        fetch("http://localhost:8080/applications",
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(values)
            })
            .then(reponse => {
                console.log(reponse)
            })
            .catch(e => console.log(e))
    }

    return <Formik initialValues={initialValues} enableReinitialize onSubmit={(values) => enregistrer(values)} validationSchema={validationSchema}>
        {formik => (
            <form onSubmit={formik.handleSubmit}>

                <Grid container style={{ padding: '2em' }}>
                    <Grid item xs={12} />
                    <Grid item xs={12} />

                    <Grid item>
                        <TextField {...formik.getFieldProps('nom')} error={formik.errors.nom ? true : false} helperText={formik.errors.nom} label="Nom de l'application" />
                    </Grid>

                    <TextField {...formik.getFieldProps('version')} />
                    <TextField {...formik.getFieldProps('etat')} />
                    <FormControl fullWidth error={formik.errors.etat ? true : false}>
                        <InputLabel id="etat" fullWidth>Etat de l'application</InputLabel>
                        <Select labelId="etat" label="Etat de l'application" {...formik.getFieldProps('etat')}>
                            {["ACTIVE", "OBSOLETE"].map(etat => <MenuItem key={etat} value={etat}>{etat}</MenuItem>)}
                        </Select>
                        <FormHelperText>{formik.errors.etat}</FormHelperText>
                    </FormControl>
                </Grid>
                <Box sx={{ alignItems: 'center', display: 'flex' }}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button type="submit"> Enregistrer</Button>
                    </ButtonGroup>
                </Box>
            </form>
        )}
    </Formik>
}

export default FormulaireFormik