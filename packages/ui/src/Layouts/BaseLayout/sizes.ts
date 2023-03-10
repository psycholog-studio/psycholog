const sizes = {
  VGA: {
    width: 640,
    height: 480,
  },

  SVGA: {
    width: 800,
    height: 600,
  },

  XGA: {
    width: 1024,
    height: 768,
  },

  SXGA: {
    width: 1280,
    height: 1024,
  },

  WXGAPLUS: {
    width: 1440,
    height: 900,
  },

  HD1080: {
    width: 1920,
    height: 1080,
  },

  WQHD: {
    width: 2560,
    height: 1440,
  },
} as const;

export default sizes;
