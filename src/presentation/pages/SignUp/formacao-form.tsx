import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
function FormacaoForm() {

  const [tipoUsuario, setTipoUsuario] = React.useState('candidata');

  const handleChangTipoUsuario = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipoUsuario((event.target as HTMLInputElement).value);
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Experiência
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Formação"
            placeholder="Grau de escolaridade"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Instituição"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Experiências"
            placeholder="Comece pelas suas experiências mais recentes"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Skills"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Cargo pretendido"
            placeholder="Cite os cargos para os quais gostaria de se candidatar"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Informações adicionais"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="Site/Portifólio"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Linkedin" fullWidth />
        </Grid>
        <Grid item xs={12}>
        <FormLabel component="legend">Deseja se cadastrar como: </FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={tipoUsuario} onChange={handleChangTipoUsuario}>
            <FormControlLabel value="candidata" control={<Radio />} label="Candidata(o)" />
            <FormControlLabel value="recrutadora" control={<Radio />} label="Conselheira(o)" />
          </RadioGroup>
        </Grid>
       
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Estou ciente de que todas as informações são verdadeiras."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );

  
}

export default FormacaoForm;
