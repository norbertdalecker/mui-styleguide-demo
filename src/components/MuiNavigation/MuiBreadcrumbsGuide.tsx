import * as React from "react";
import { Typography, Breadcrumbs, Link } from '@material-ui/core';
import { MuiInputContainer } from 'components/MuiInputs';
export const MuiBreadcrumbsGuide = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
      Breadcrumps
      </Typography>
      <MuiInputContainer>
        <Breadcrumbs id="breadcrumbsimple" aria-label="breadcrumb">
          <Link color="inherit" href="#breadcrumbsimple">
            Simple
          </Link>
          <Link color="inherit" href="#breadcrumbsimple">
            Primary
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator="›" id="breadcrumbsCustomSeparator" aria-label="breadcrumb">
          <Link color="inherit" href="#breadcrumbsCustomSeparator">
            Custom
          </Link>
          <Link color="inherit" href="#breadcrumbsCustomSeparator">
            Separator
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
        <Breadcrumbs maxItems={2} id="breadCrumbsCollapsed" aria-label="breadcrumb">
          <Link color="inherit" href="#breadCrumbsCollapsed">
            Collapsed
          </Link>
          <Link color="inherit" href="#breadCrumbsCollapsed">
            Separator
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
      </MuiInputContainer>
    </>
  );
}
