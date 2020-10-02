import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from '@material-ui/icons/Language';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow: 1,
    },
    title: {
        marginTop: '1em',
    },
    subTitle: {
        marginRight: '0.5em',
    },
    detail: {
        display: 'flex',
        alignItems: 'baseline',
        marginRight: '1em',
        color: theme.palette.text.secondaryBlack,
    }
}));

function ProjectDetails({context, team, sources, link}){
    const classes = useStyles();

    return(
        <>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                Détails
            </Typography>

            <div className={classes.grid}>
                <Grid container spacing={2}>
                    {context &&
                    <Grid item className={classes.detail}>
                        <Typography className={classes.subTitle} variant="h6">
                            Cadre :
                        </Typography>
                        <Typography variant="body1">
                            {context}
                        </Typography>
                    </Grid>
                    }
                    {team &&
                    <Grid item className={classes.detail}>
                        <Typography className={classes.subTitle} variant="h6">
                            Equipe :
                        </Typography>
                        <Typography variant="body1">
                            {team}
                        </Typography>
                    </Grid>
                    }
                    {sources &&
                    <Grid item className={classes.detail}>
                        <Button
                            startIcon={<GitHubIcon/>}
                            variant={"contained"}
                            color={"primary"}
                            size={"small"}
                            href={sources}
                            target={"_blank"}
                        >
                            Sources
                        </Button>
                    </Grid>
                    }
                    {link &&
                    <Grid item className={classes.detail}>
                        <Button
                            startIcon={<LanguageIcon/>}
                            variant={"contained"}
                            color={"primary"}
                            size={"small"}
                            href={link}
                            target={"_blank"}
                        >
                            Vers le site
                        </Button>
                    </Grid>
                    }
                </Grid>
            </div>
        </>
    )
}

export default ProjectDetails;