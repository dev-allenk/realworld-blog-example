const SIZE = {
  TABLET: 768,
  DESKTOP: 1200,
};
const DEVICE = {
  TABLET: `(min-width: ${SIZE.TABLET}px) and
           (max-width: ${SIZE.DESKTOP - 1}px)`,
  DESKTOP: `(min-width: ${SIZE.DESKTOP}px)`,
  TABLET_AND_DESKTOP: `(min-width: ${SIZE.TABLET}px)`,
};

export const MAX_WIDTH = {
  HEADER: "800px",
  PAGE: "680px;",
};

export default DEVICE;
