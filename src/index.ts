if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

// make it work with -- isolatedmodule
export default {};