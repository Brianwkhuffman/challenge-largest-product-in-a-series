class LargestProduct {
  constructor(number) {
    this.number = number;
    this.index = 0;
  }
  getLargestProduct() {
    let temp = 0;
    let arr = this.number.split('');
    for (let i = 0; i < arr.length; i++) {
      let x = arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3] * arr[i + 4];
      let y = arr[i + 1] * arr[i + 2] * arr[i + 3] * arr[i + 4] * arr[i + 5];
      if (temp < x && x > y) {
        temp = x;
        this.index = i
      }
    }
    return temp;
  }

  getLargestProductIndex() {
    this.getLargestProduct();
    return this.index;
  }
}

module.exports = LargestProduct;
