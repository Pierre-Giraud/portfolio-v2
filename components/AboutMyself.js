import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import StudiesDisplayer from "./StudiesDisplayer";

const useStyles = makeStyles((theme) =>({
    root: {
        minHeight: '100vh',
        backgroundColor: 'rgb(28,28,28)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        textAlign: 'center',
    },
    perso: {
        width: '100%',
        height: '100%',
    },
}));

export default function AboutMyself(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth={false}>
                <div className={classes.title}>
                    <Typography variant={"h1"} component={"h2"}>
                        Mon parcours
                    </Typography>
                </div>

                <Grid container justify={"center"} alignItems={"center"}>
                    <Grid item sm={8} md={6}>
                        <Container>
                            <img className={classes.perso} src={"/img/persos/perso_diplome.png"} alt={""}/>
                        </Container>
                    </Grid>
                    <Grid item sm={8} md={6}>
                        <Container maxWidth={false}>
                            <StudiesDisplayer/>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}