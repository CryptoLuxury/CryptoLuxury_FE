import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Badge from "./Badge.js";

import styles from "./timelineStyle.js";

const useStyles = makeStyles(styles);

export default function Timeline(props) {
  const classes = useStyles();
  const { stories, simple } = props;
  const timelineClass =
    classes.timeline +
    " " +
    cx({
      [classes.timelineSimple]: simple
    });
  return (
    <ul className={timelineClass}>
      {stories.map((prop, key) => {
        const panelClasses =
          classes.timelinePanel +
          " " +
          cx({
            [classes.timelinePanelInverted]: prop.inverted || simple,
            [classes.timelineSimplePanel]: simple
          });
        const timelineBadgeClasses =
          classes.timelineBadge +
          " " +
          classes[prop.badgeColor] +
          " " +
          cx({
            [classes.timelineSimpleBadge]: simple
          });
        return (
          <li className={classes.item} key={key}>
            {prop.badgeIcon ? (
              <div className={timelineBadgeClasses}>
                <prop.badgeIcon className={classes.badgeIcon} />
              </div>
            ) : null}
            <div className={panelClasses}>
              {prop.title ? (
                <div className={classes.timelineHeading}>
                <Fade top duration={1000}>
                  <Badge color={prop.titleColor}>{prop.title}</Badge>
                  </Fade>
                </div>
              ) : null}
              <div className={classes.timelineBody}>{prop.body}</div>
              {prop.footerTitle ? (
                <h6 className={classes.footerTitle}>{prop.footerTitle}</h6>
              ) : null}
              {prop.footer ? <hr className={classes.footerLine} /> : null}
              {prop.footer ? (
                <Fade bottom>
                <div className={classes.timelineFooter}>{prop.footer}</div></Fade>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

Timeline.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object).isRequired,
  simple: PropTypes.bool
};
