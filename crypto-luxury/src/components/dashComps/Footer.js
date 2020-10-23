/*eslint-disable*/
import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "./Button";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "./footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {

  let history = useHistory();

  const classes = useStyles();
  const { fluid, white, rtlActive } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white
  });
  return (
    <footer style={{marginTop: "10%", marginBottom: "4%"}} className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
                <Button onClick={() => {
                  history.push('/')
                }} color="warning" round>Home</Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Button onClick={() => {
              history.push('/')
            }} color="warning" round>Products</Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Button onClick={() => {
              history.push('/')
            }} color="warning" round>Team</Button>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};
