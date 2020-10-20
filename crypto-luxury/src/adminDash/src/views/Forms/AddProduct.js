import React from "react";
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// react component plugin for creating beatiful tags on an input
import TagsInput from "react-tagsinput";
// plugin that creates slider
import Slider from "nouislider";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// @material-ui/icons
import Today from "@material-ui/icons/Today";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import AvTimer from "@material-ui/icons/AvTimer";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import CustomLinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress.js";
import ImageUpload from "../../components/CustomUpload/ImageUpload.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.js";

const useStyles = makeStyles(styles);

export default function ExtendedForms() {
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [multipleSelect, setMultipleSelect] = React.useState([]);
  const [tags, setTags] = React.useState(["pizza", "pasta", "parmesan"]);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    return function cleanup() {};
  });
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };
  const handleMultiple = event => {
    setMultipleSelect(event.target.value);
  };
  const handleTags = regularTags => {
    setTags(regularTags);
  };
  const classes = useStyles();
  return (
    
    </div>
  );
}
