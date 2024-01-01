import * as React from "react";
import Box from "@mui/material/Box";
import AppStore from "../../store/AppStore";
import NavigationIcon from "@mui/icons-material/Navigation";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import DepartureBoardRoundedIcon from "@mui/icons-material/DepartureBoardRounded";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import RvHookupIcon from "@mui/icons-material/RvHookup";
import { observer } from "mobx-react";
import { Card } from "primereact/card";
import "primereact/resources/themes/lara-light-cyan/theme.css";
const Service = observer(() => {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const icons = (icon) => {
    let iconComponent;
    switch (icon) {
      case "LocalShippingOutlined":
        iconComponent = <LocalShippingOutlinedIcon />;
        break;
      case "GavelRounded":
        iconComponent = <GavelRoundedIcon />;
        break;
      case "DepartureBoardRounded":
        iconComponent = <DepartureBoardRoundedIcon />;
        break;
      case "TwoWheeler":
        iconComponent = <TwoWheelerIcon />;
        break;
      case "RvHookup":
        iconComponent = <RvHookupIcon />;
        break;
      default:
        iconComponent = <NavigationIcon />;
    }
    return iconComponent;
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 2,
            width: 200,
          },
        }}
      >
        {AppStore.listServices &&
          AppStore.listServices.map((service, index) => (
            <div className="card flex justify-content-center">
              <Card
                title={icons(service.icon)}
                subTitle={service.name}
                header={header}
                className="md:w-25rem"
              >
                <p className="m-0">DBH</p>
              </Card>
            </div>
          ))}
      </Box>
    </>
  );
});
export default Service;
