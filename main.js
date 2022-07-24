const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Dress",
      brand: "Pretty Dolls",
      image: "./assets/images/green-dress.jpeg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/green-dress.jpeg" },
        { id: 2235, color: "blue", image: "./assets/images/blue-dress.jpeg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    computed: {
      title() {
        return this.brand + " " + this.product;
      },
    },
  },
});
