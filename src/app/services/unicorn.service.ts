import { Injectable } from "@angular/core";
import appConstants from "../app-constants";
@Injectable()
export class UnicornService {
  unicorns;
  savedUnicorn;
  constructor() {}
  initiUnicorns() {
    const initialUnicorns = [
      {
        name: "Hylzarie",
        picture: this.getRandomPic("female"),
        age: "28",
        gender: "female",
        color: "7B64AC"
      },
      {
        name: "Demetrius",
        picture: this.getRandomPic("male"),
        age: "33",
        gender: "male",
        color: "41699A"
      },
      {
        name: "Quince",
        picture: this.getRandomPic("male"),
        age: "35",
        gender: "male",
        color: "FBDDDE"
      },
      {
        name: "Daisy",
        picture: this.getRandomPic("female"),
        age: "30",
        gender: "female",
        color: "B6D2E8"
      }
    ];
    if (!localStorage.getItem("unicorns")) {
      this.unicorns = initialUnicorns;
      localStorage.setItem("unicorns", JSON.stringify(initialUnicorns));
    } else {
      this.unicorns = JSON.parse(localStorage.getItem("unicorns"));
    }
  }
  getUnicorns() {
    return this.unicorns;
  }
  getMatingUnicorns(name) {
    return this.unicorns.filter(
      unicorn => unicorn.age > 5 && unicorn.name !== name
    );
  }
  getUnicorn(name) {
    const foundUnicorn = this.unicorns.filter(unicorn => unicorn.name === name);
    return foundUnicorn ? foundUnicorn[0] : null;
  }
  createUnicorn(unicorn) {
    this.unicorns = [...this.unicorns, unicorn];
    localStorage.setItem("unicorns", JSON.stringify(this.unicorns));
  }
  isUniqueName(name) {
    return this.unicorns.filter(unicorn => unicorn.name === name).length === 0;
  }
  saveUnicorn(unicorn) {
    localStorage.setItem("savedUnicorn", JSON.stringify(unicorn));
  }
  getSavedUnicorn() {
    if (!localStorage.getItem("savedUnicorn")) {
      const randomGender = this.getRandomGender();
      const randomPic = this.getRandomPic(randomGender);
      return {
        name: "",
        age: 5,
        gender: randomGender,
        picture: randomPic,
        color: "00FF00"
      };
    }
    return JSON.parse(localStorage.getItem("savedUnicorn"));
  }
  cleanSavedUnicorn() {
    localStorage.removeItem("savedUnicorn");
  }
  mateUnicorns(unicorn, mateName) {
    const mate = this.getUnicorn(mateName);

    if (
      (unicorn.gender === "male" && mate.gender === "female") ||
      (unicorn.gender === "female" && mate.gender === "male")
    ) {
      const baby = {
        name: this.getBabyName(unicorn.name, mateName),
        age: 0,
        picture: this.getRandomPic("baby"),
        gender: this.getRandomGender(),
        color: mixColors(unicorn.color, mate.color, 40)
      };
      this.createUnicorn(baby);
      return baby;
    }
    return null;

    function mixColors(color_1, color_2, weight) {
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

  getBabyName(name1, name2) {
    let name = `${name1} ${name2} 1`;
    if (this.isUniqueName(name)) {
      return name;
    }
    const index = parseInt(name.slice(name.length - 1), 10) + 1;
    name = `${name1} ${name2} ${index}`;
    return name;
  }
  getRandomPic(gender) {
    switch (gender) {
      case "other":
      case "female":
        return getRandomElement(
          appConstants.unicornImages.female,
          appConstants.unicornImages.female.length
        );
      case "male":
        return getRandomElement(
          appConstants.unicornImages.male,
          appConstants.unicornImages.male.length
        );
      default:
        return getRandomElement(
          appConstants.unicornImages.baby,
          appConstants.unicornImages.baby.length
        );
    }
    function getRandomElement(array, max) {
      return array[Math.floor(Math.random() * Math.floor(max))];
    }
  }
  getRandomGender() {
    const dice = Math.floor(Math.random() * Math.floor(3));
    switch (dice) {
      case 0:
        return "male";
      case 1:
        return "female";
      case 2:
        return "other";
    }
  }
}
