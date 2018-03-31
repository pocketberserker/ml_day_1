"use strict";
import * as novel from "@cowlick/core";
import {Config, defaultConfig} from "@cowlick/config";

const backgroundImage = "pane";
const size = 32;

const config: Config = {
  window: {
    message: {
      layer: {
        name: novel.LayerKind.message,
        x: 10,
        y: g.game.height - g.game.height / 4 - 40
      },
      width: g.game.width - 20,
      height: g.game.height / 4,
      backgroundImage,
      padding: 4,
      backgroundEffector: {
        borderWidth: 4
      },
      touchable: true
    },
    system: [
    ]
  },
  font: {
    list: [
      new g.DynamicFont({
        game: g.game,
        fontFamily: g.FontFamily.SansSerif,
        size
      })
    ],
    color: "white",
    alreadyReadColor: "#4444FF",
    size
  },
  system: defaultConfig.system,
  audio: defaultConfig.audio
};

module.exports = config;
