import axios from "axios";
import { makeAutoObservable } from "mobx";

export default class ShopStore {
  items;
  count = 0;
  constructor() {
    makeAutoObservable(this);
  }
  async getItems() {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      this.items = res.data;
    });
  }
}
