class BackgroundController {
  #width = 1440;
  #height = 900;

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get aspect() {
    return this.#width / this.#height;
  }

  setBackgrounSize = (width: number, height: number) => {
    this.#width = width;
    this.#height = height;
  };
}

export default BackgroundController;
