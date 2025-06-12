const { browser, expect, $, $$ } = require('@wdio/globals')

exports.ProductDetail = class ProductDetail {

  static getSizeOption() {
    return $$('.swatch-option.text');
  }

  static getColorOption() {
    return $$('.swatch-option.color');
  }

  static fillQtyField(number) {
    return $('#qty').setValue(number.toString());
  }

  static clickAddToCartButton() {
    return $('#product-addtocart-button').click();
  }
}
