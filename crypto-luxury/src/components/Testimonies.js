import React from "react";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import Container from "react-bootstrap/Container";

import GridItem from "./dashComps/GridItem"
import Card from "./dashComps/Card";
import CardBody from "./dashComps/CardBody";
import CardAvatar from "./dashComps/CardAvatar";
import CardFooter from "./dashComps/CardFooter";
import FormatQuote from "@material-ui/icons/FormatQuote";

import { makeStyles } from "@material-ui/core/styles";

import image from "./dashComps/card-profile1-square.jpg";
import image2 from "./card-profile2-square.jpg";

import {
    cardTitle,
    warningColor
  } from "./dashComps/material-dashboard-pro-react.js";

const styles = {
    cardTitle,
    cardTitleWhite: {
      ...cardTitle,
      color: "#FFFFFF",
      marginTop: "0"
    },
    cardCategoryWhite: {
      margin: "0",
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: ".875rem"
    },
    cardCategory: {
      color: "#999999",
      marginTop: "10px"
    },
    icon: {
      color: "#333333",
      margin: "10px auto 0",
      width: "130px",
      height: "130px",
      border: "1px solid #E5E5E5",
      borderRadius: "50%",
      lineHeight: "174px",
      "& svg": {
        width: "55px",
        height: "55px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        width: "55px",
        fontSize: "55px"
      }
    },
    iconRose: {
      color: warningColor
    },
    marginTop30: {
      marginTop: "30px"
    },
    testimonialIcon: {
      marginTop: "30px",
      "& svg": {
        width: "40px",
        height: "40px"
      }
    },
    cardTestimonialDescription: {
      fontStyle: "italic",
      color: "#999999"
    }
  };

const useStyles = makeStyles(styles);

const Testimonies = ( ) => {

    const classes = useStyles();

    return (
        <Container>
        <GridItem xs={12} sm={12} md={11} style={{marginBottom: "10%"}}>
            <Card testimonial>
            <Fade top>
            <div className={classes.testimonialIcon}>
                <FormatQuote />
            </div>
            </Fade>
            <Fade bottom>
            <CardBody>
                <h5 className={classes.cardTestimonialDescription}>
                Your products, all the kits that I have downloaded from your
                site and worked with are sooo cool! I love the color
                mixtures, cards... everything. Keep up the great work!
                </h5>
            </CardBody>
            </Fade>
            <CardFooter testimonial>
            <Fade bottom>
            <h4 className={classes.cardTitle}>Will Ryan</h4>
            </Fade>
            <Fade bottom>
            <h6 className={classes.cardCategory}>@WilliamRyan</h6>
            </Fade>
                <CardAvatar testimonial testimonialFooter>
                <div>
                    <img src={image2} alt="business owner one" />
                </div>
                </CardAvatar>
            </CardFooter>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={11} style={{marginBottom: "10%"}}>
        <Card testimonial>
        <Fade top>
        <div className={classes.testimonialIcon}>
            <FormatQuote />
        </div>
        </Fade>
        <Fade bottom>
        <CardBody>
            <h5 className={classes.cardTestimonialDescription}>
            Your products, all the kits that I have downloaded from your
            site and worked with are sooo cool! I love the color
            mixtures, cards... everything. Keep up the great work!
            </h5>
        </CardBody>
        </Fade>
        <CardFooter testimonial>
        <Fade bottom>
            <h4 className={classes.cardTitle}>Will Ryan</h4>
            </Fade>
            <Fade bottom>
            <h6 className={classes.cardCategory}>@WilliamRyan</h6>
            </Fade>
            <CardAvatar testimonial testimonialFooter>
            <div>
                <img src={image} alt="business owner two" />
            </div>
            </CardAvatar>
        </CardFooter>
        </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={11} style={{marginBottom: "10%"}}>
        <Card testimonial>
        <Fade top>
        <div className={classes.testimonialIcon}>
            <FormatQuote />
        </div>
        </Fade>
        <Fade bottom>
        <CardBody>
            <h5 className={classes.cardTestimonialDescription}>
            Your products, all the kits that I have downloaded from your
            site and worked with are sooo cool! I love the color
            mixtures, cards... everything. Keep up the great work!
            </h5>
        </CardBody>
        </Fade>
        <CardFooter testimonial>
        <Fade bottom>
            <h4 className={classes.cardTitle}>Will Ryan</h4>
            </Fade>
            <Fade bottom>
            <h6 className={classes.cardCategory}>@WilliamRyan</h6>
            </Fade>
            <CardAvatar testimonial testimonialFooter>
            <div>
                <img src={image2} alt="business owner three" />
            </div>
            </CardAvatar>
        </CardFooter>
        </Card>
    </GridItem>
        </Container>
    )
}
export default Testimonies;