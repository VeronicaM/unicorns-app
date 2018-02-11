import { Injectable } from "@angular/core";

@Injectable()
export class UtilsService {
  constructor() {}
  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? result : null;
  }
  addTransparency(rgbValues, transparency) {
    if (rgbValues) {
      return `rgba(${parseInt(rgbValues[1], 16)},${parseInt(
        rgbValues[2],
        16
      )},${parseInt(rgbValues[3], 16)},${transparency})`;
    }
    return `rgba(0,0,0,0)`;
  }

  mixColors(color_1, color_2, weight) {
    function d2h(d) {
      return d.toString(16);
    } // convert a decimal value to hex
    function h2d(h) {
      return parseInt(h, 16);
    } // convert a hex value to decimal
    weight = typeof weight !== "undefined" ? weight : 50; // set the weight to 50%, if that argument is omitted
    let color = "";
    for (let i = 0; i <= 5; i += 2) {
      // loop through each of the 3 hex pairs—red, green, and blue
      const v1 = h2d(color_1.substr(i, 2)); // extract the current pairs
      const v2 = h2d(color_2.substr(i, 2));
      // combine the current pairs from each source color, according to the specified weight
      let value = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));
      while (value.length < 2) {
        value = "0" + value;
      } // prepend a '0' if val results in a single digit
      color += value; // concatenate val to our new color string
    }
    return color; // PROFIT!
  }
}
