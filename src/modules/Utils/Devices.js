const sizes = {
    desktopLarge: '1440px',
    desktopMediumMax: '1439.98px',
    desktopMediumMin: '1200px',
    desktopSmallMax: '1199.98px',
    desktopSmallMin: '1024px',
    tabletMax: '1023.98px',
    tabletMin: '768px',
    mobile: '767.98px',
    height: '700px',
    customTableWidth: '1350px',
  };
  
  export const device = {
    desktopLarge: `(min-width: ${sizes.desktopLarge})`,
    desktopMediumMin: `(max-width: ${sizes.desktopMediumMin})`,
    desktopMedium: `(max-width: ${sizes.desktopMediumMax}) and (min-width: ${sizes.desktopMediumMin})`,
    desktopSmall: `(max-width: ${sizes.desktopSmallMax}) and (min-width: ${sizes.desktopSmallMin})`,
    tabletMin: `(min-width: ${sizes.tabletMin})`,
    tablet: `(max-width: ${sizes.tabletMax}) and (min-width: ${sizes.tabletMin})`,
    tabletAndMobile: `(max-width: ${sizes.tabletMax})`,
    mobile: `(max-width: ${sizes.mobile})`,
    customTableWidth: `(max-width: ${sizes.customTableWidth})`,
    mobileHeight: `(min-height: ${sizes.height}) and (max-width: ${sizes.mobile})`,
  };