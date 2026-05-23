const validationRules = {
  name: {
    required: true,
    minLength: 3,
    pattern: /^[A-Za-z\s]+$/,
    message: "Only alphabets allowed",
  },

  brand: {
    required: true,
    minLength: 2,
    pattern: /^[A-Za-z\s]+$/,
    message: "Only alphabets allowed",
  },

  price: {
    required: true,
    min: 1,
    pattern: /^\d+$/,
    message: "Enter valid price",
  },

  rating: {
    required: true,
    min: 0,
    max: 5,
    pattern: /^[0-5](\.\d)?$/,
    message: "Rating must be between 0 and 5",
  },

  image: {
    required: true,
    pattern:
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))|(images\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
    message: "Enter valid image URL",
  },
};
