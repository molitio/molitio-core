import React from "react";
import {
  useTheme,
  makeStyles,
  createStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { MenuItem } from 'ui-paged-menu/interface/IPagedMenu';

export function PagedMenuItemComponent({ data }: MenuItem): JSX.Element {
  const theme = useTheme();
  const useStyles = makeStyles(() =>
    createStyles({
      menuListItem: {
        color: theme.palette.text.primary,
        margin: "10px",
        border: 0,
        borderStyle: "solid",
        borderColor: theme.palette.secondary.main,
        boxShadow: theme.shadows[5],
        opacity: 0.9,
        [theme.breakpoints.down("xs")]: {},
        backgroundColor: "transparent",
        borderRadius: 20,
        /*...theme.themeGradient,*/
      },
      contentContainer: {
        display: "flex",
        flexDirection: "row",
      },
      card: {
        borderRadius: 20,
        backgroundColor: "transparent",
      },
      cardMedia: {
        flex: 3,
        margin: "5px",
        "& img": {
          borderRadius: "50%",
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.primary.main,
        },
      },
      cardContent: {
        flex: 6,
        textShadow: `1px 1px ${theme.palette.secondary.main}`,
      },
      cardInfo: {
        color: theme.palette.text.secondary,
      },
      cardButton: {
        color: theme.palette.text.primary,
      },
    })
  );

  const componentStyle = useStyles();

  return (
    <Card className={componentStyle.card}>
      <CardActionArea>
        <div className={componentStyle.contentContainer}>
          <div className={componentStyle.cardMedia}>
            <CardMedia
              component="img"
              alt={data.description}
              image={data.imageUrl}
              title={data.name}
            />
          </div>
          <div className={componentStyle.cardContent}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography variant="body2" className={componentStyle.cardInfo}>
                {data.description}
              </Typography>
              <Typography variant="body1">
                {data.price}
                {data.currency}
              </Typography>
            </CardContent>
          </div>
        </div>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={componentStyle.cardButton}>
          share in FB
        </Button>
      </CardActions>
    </Card>
  );
}
