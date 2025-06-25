import { flexCombos } from "../short-hand-styles/flex.js";
import { gridCombos } from "../short-hand-styles/grid.js";

class Combination {
  constructor(keys, maxLength) {
    this.keys = keys;
    this.maxLength = maxLength;
    this.result = [];
  }

  all() {
    const combine = (prefix, start) => {
      if (prefix.length > 0 && prefix.length <= this.maxLength) {
        this.result.push([...prefix]);
      }

      if (prefix.length < this.maxLength) {
        for (let i = start; i < this.keys.length; i++) {
          combine([...prefix, this.keys[i]], i + 1);
        }
      }
    };

    combine([], 0);
    return this.result;
  }

  limited() {
    this.keys.forEach((key) => {
      result.push([key]);
    });

    if (this.maxLength >= 3) {
      for (let i = 0; i < this.keys.length; i++) {
        for (j = i + 1; j < this.keys.length; j++) {
          this.result.push([this.keys[i], this.keys[j]]);
        }
      }
    }
    return this.result;
  }

  batch() {
    let count = 0;
    const bacthSize = 10000;

    const combine = (prefix, start) => {
      if (prefix.length > 0) {
        this.result.push([...prefix]);
        count++;
      }

      if (count >= bacthSize) {
        return true;
      }

      for (let i = start; i < this.keys.length && count; i++) {
        if (combine([...prefix, this.keys[i]], i + 1)) {
          return true;
        }
      }
      return false;
    };

    combine([], 0);
    return this.result;
  }

  common() {
    this.keys.forEach((key) => {
      this.result.push([key]);
    });

    this.result.push(...flexCombos, ...gridCombos);
    return this.result;
  }
}

export default Combination;
