export const state = () => ({
  products: {
    data: [
      // {
      //   shop: "https://shoppy.mn/",
      //   category: "Технологи",
      //   categorylink: "https://shoppy.mn/t/tech",
      //   subcategory: "Гар утас",
      //   productlink: "https://shoppy.mn/products/redmi-note-11-xxf-edition",
      //   prodcutname: "Redmi Note 11 XXF edition",
      //   image:
      //     "https://cdn3.shoppy.mn/spree/images/1311790/large/open-uri20220420-2085132-1c2abe9.",
      //   price: "899,000 ₮",
      //   company: "MI",
      //   companylogo:
      //     "https://cdn5.shoppy.mn/img/51566/80x61/mi-bk.png?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      // },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink:
          "https://shoppy.mn/products/galaxy-s22-ultra-128gb-sm-s908bzkdskz",
        prodcutname: "Galaxy S22 Ultra",
        image:
          "https://cdn3.shoppy.mn/spree/images/1225835/large/samsung-galaxy-s22-ultra-128-gb-sm-s908bzkdskz-phantom-black_6204c4e38fc9e.jpg",
        price: "4,599,000 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink:
          "https://shoppy.mn/products/galaxy-s22-ultra-256gb-sm-s908bzkgskz",
        prodcutname: "Galaxy S22 Ultra",
        image:
          "https://cdn3.shoppy.mn/spree/images/1225851/large/samsung-galaxy-s22-ultra-256-gb-sm-s908bzkgskz-phantom-black_6204cfa537ff6.jpg",
        price: "4,899,000 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-256gb-mlqa3zp-a",
        prodcutname: "iPhone 13 (256GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1143431/large/open-uri20211111-3443331-180n0we.",
        price: "3,899,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-mini-128gb",
        prodcutname: "iPhone 13 mini (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1307655/large/open-uri20220415-1817220-1kmignw.",
        price: "3,099,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink:
          "https://shoppy.mn/products/iphone-13-pro-max-appl-mncy3zp",
        prodcutname: "IPHONE 13 PRO MAX",
        image:
          "https://cdn3.shoppy.mn/spree/images/1313847/large/open-uri20220421-2217414-jr3kxu.",
        price: "4,699,900 ₮",
        company: "BSB",
        companylogo:
          "https://cdn5.shoppy.mn/img/8858/80x61/bsb1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-128gb-mlpk3zp-a",
        prodcutname: "iPhone 13 (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1143423/large/open-uri20211111-3443213-fp8fng.",
        price: "3,499,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink:
          "https://shoppy.mn/products/iphone-13-pro-max-128gb-mncy3zp-a",
        prodcutname: "iPhone 13 Pro Max (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1307645/large/open-uri20220415-1817222-zaa9ss.",
        price: "4,749,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-pro-128gb",
        prodcutname: "iPhone 13 Pro (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1143411/large/open-uri20211111-3443331-8r0fg0.",
        price: "4,399,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-128gb",
        prodcutname: "iPhone 13 (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1141668/large/open-uri20211109-3294583-tdstpq.",
        price: "3,499,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-appl-mngk3zp",
        prodcutname: "IPHONE 13",
        image:
          "https://cdn3.shoppy.mn/spree/images/1313852/large/open-uri20220421-2217472-1lyxkdm.",
        price: "3,449,900 ₮",
        company: "BSB",
        companylogo:
          "https://cdn5.shoppy.mn/img/8858/80x61/bsb1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/redmi-note-11-6934177768101",
        prodcutname: "Redmi Note 11",
        image:
          "https://cdn3.shoppy.mn/spree/images/1311794/large/open-uri20220420-2085188-twu3yo.",
        price: "999,000 ₮",
        company: "MI",
        companylogo:
          "https://cdn5.shoppy.mn/img/51566/80x61/mi-bk.png?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-pro-128gb-mlvd3zp-a",
        prodcutname: "iPhone 13 Pro (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1145939/large/iphone-13-pro-blue-select.png",
        price: "4,399,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-256gb",
        prodcutname: "iPhone 13 (256GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1143427/large/open-uri20211111-3443213-65g1d0.",
        price: "3,899,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-128gb-mngk3zp-a",
        prodcutname: "iPhone 13 (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1307650/large/open-uri20220415-1817222-13difsh.",
        price: "3,499,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-mini-appl-mnff3zp",
        prodcutname: "IPHONE 13 MINI",
        image:
          "https://cdn3.shoppy.mn/spree/images/1313855/large/open-uri20220421-2217443-dj2p8z.",
        price: "2,999,900 ₮",
        company: "BSB",
        companylogo:
          "https://cdn5.shoppy.mn/img/8858/80x61/bsb1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/galaxy-a53-5g-sm-a536elbdskz",
        prodcutname: "Galaxy A53 5G",
        image:
          "https://cdn3.shoppy.mn/spree/images/1290381/large/open-uri20220404-756709-19x0bey.",
        price: "1,549,000 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-mini-128gb",
        prodcutname: "iPhone 13 mini (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1307655/large/open-uri20220415-1817220-1kmignw.",
        price: "3,099,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-pro-128gb-mlvd3zp-a",
        prodcutname: "iPhone 13 Pro (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1145939/large/iphone-13-pro-blue-select.png",
        price: "4,399,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-128gb-mngk3zp-a",
        prodcutname: "iPhone 13 (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1307650/large/open-uri20220415-1817222-13difsh.",
        price: "3,499,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-pro-128gb",
        prodcutname: "iPhone 13 Pro (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1143411/large/open-uri20211111-3443331-8r0fg0.",
        price: "4,399,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-256gb",
        prodcutname: "iPhone 13 (256GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1143427/large/open-uri20211111-3443213-65g1d0.",
        price: "3,899,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink:
          "https://shoppy.mn/products/iphone-13-pro-max-128gb-mncy3zp-a",
        prodcutname: "iPhone 13 Pro Max (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1307645/large/open-uri20220415-1817222-zaa9ss.",
        price: "4,749,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/samsung-a53-sams-a536e-or",
        prodcutname: "SAMSUNG A53",
        image:
          "https://cdn3.shoppy.mn/spree/images/1295423/large/open-uri20220407-1073505-1lhvur5.",
        price: "1,449,900 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/samsung-a23-sams-a235f-or",
        prodcutname: "SAMSUNG A23",
        image:
          "https://cdn3.shoppy.mn/spree/images/1295377/large/open-uri20220407-1073505-xpcezf.",
        price: "799,900 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-128gb-mlpk3zp-a",
        prodcutname: "iPhone 13 (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1143423/large/open-uri20211111-3443213-fp8fng.",
        price: "3,499,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-mini-appl-mnff3zp",
        prodcutname: "IPHONE 13 MINI",
        image:
          "https://cdn3.shoppy.mn/spree/images/1313855/large/open-uri20220421-2217443-dj2p8z.",
        price: "2,999,900 ₮",
        company: "BSB",
        companylogo:
          "https://cdn5.shoppy.mn/img/8858/80x61/bsb1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/redmi-note-11-6934177768101",
        prodcutname: "Redmi Note 11",
        image:
          "https://cdn3.shoppy.mn/spree/images/1311794/large/open-uri20220420-2085188-twu3yo.",
        price: "999,000 ₮",
        company: "MI",
        companylogo:
          "https://cdn5.shoppy.mn/img/51566/80x61/mi-bk.png?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink:
          "https://shoppy.mn/products/30se-6165h1-2blcap12-atlanticblue",
        prodcutname:
          'TCL 30SE 4xCortex-A53 @1.5GHz 4GB ram + 128GB "6.52 Display Atlantic Blue ухаалаг утас',
        image:
          "https://cdn3.shoppy.mn/spree/images/1293025/large/30-SE-atlantic-Blue.jpg",
        price: "699,900 ₮",
        company: "TCL",
        companylogo:
          "https://cdn5.shoppy.mn/img/83772/80x61/tcl-bk.png?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink:
          "https://shoppy.mn/products/galaxy-s22-ultra-256gb-sm-s908bzkgskz",
        prodcutname: "Galaxy S22 Ultra",
        image:
          "https://cdn3.shoppy.mn/spree/images/1225851/large/samsung-galaxy-s22-ultra-256-gb-sm-s908bzkgskz-phantom-black_6204cfa537ff6.jpg",
        price: "4,899,000 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/samsung-a23-sams-a235f-w",
        prodcutname: "SAMSUNG A23",
        image:
          "https://cdn3.shoppy.mn/spree/images/1295389/large/open-uri20220407-1073505-1vcg9nt.",
        price: "799,900 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/30se-6165h-2alcap12-spacegrey",
        prodcutname:
          'TCL 30SE 4xCortex-A53 @1.5GHz 4GB ram + 64GB "6.52 Display Space Grey ухаалаг утас',
        image:
          "https://cdn3.shoppy.mn/spree/images/1293195/large/30SE-space-Grey.jpg",
        price: "599,900 ₮",
        company: "TCL",
        companylogo:
          "https://cdn5.shoppy.mn/img/83772/80x61/tcl-bk.png?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/samsung-a53-sams-a536e-bk",
        prodcutname: null,
        image:
          "https://cdn3.shoppy.mn/spree/images/1295410/large/open-uri20220407-1073505-1z0124z.",
        price: "1,449,900 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/galaxy-a23-sm-a235fzouskz",
        prodcutname: "Galaxy A23",
        image:
          "https://cdn3.shoppy.mn/spree/images/1290362/large/open-uri20220404-756953-kb792n.",
        price: "829,000 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/samsung-s22",
        prodcutname: "SAMSUNG S22",
        image:
          "https://cdn3.shoppy.mn/spree/images/1295443/large/open-uri20220407-1073799-7sj2xo.",
        price: "2,899,900 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/30-t676k-2blcap12-museblue",
        prodcutname:
          'TCL 30  4xCortex-A53 @2.3GHz 4GB ram + 128GB "6.7 Display Muse Blue ухаалаг утас',
        image:
          "https://cdn3.shoppy.mn/spree/images/1293001/large/30-Muse-Blue.jpg",
        price: "899,900 ₮",
        company: "TCL",
        companylogo:
          "https://cdn5.shoppy.mn/img/83772/80x61/tcl-bk.png?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-256gb-mlqa3zp-a",
        prodcutname: "iPhone 13 (256GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1143431/large/open-uri20211111-3443331-180n0we.",
        price: "3,899,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/samsung-a53-sams-a536e-w",
        prodcutname: "SAMSUNG A53",
        image:
          "https://cdn3.shoppy.mn/spree/images/1295434/large/open-uri20220407-1073505-1i7yoeu.",
        price: "1,449,900 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/30-t676h-2alcap12-1-techblack",
        prodcutname:
          'TCL 30  4xCortex-A53 @2.3GHz 4GB ram + 64GB "6.7 Display Tech Black ухаалаг утас',
        image:
          "https://cdn3.shoppy.mn/spree/images/1292978/large/TCl-30-Black.jpg",
        price: "799,900 ₮",
        company: "TCL",
        companylogo:
          "https://cdn5.shoppy.mn/img/83772/80x61/tcl-bk.png?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink:
          "https://shoppy.mn/products/galaxy-s22-ultra-128gb-sm-s908bzkdskz",
        prodcutname: "Galaxy S22 Ultra",
        image:
          "https://cdn3.shoppy.mn/spree/images/1225835/large/samsung-galaxy-s22-ultra-128-gb-sm-s908bzkdskz-phantom-black_6204c4e38fc9e.jpg",
        price: "4,599,000 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/galaxy-a23-sm-a235fzkuskz",
        prodcutname: "Galaxy A23",
        image:
          "https://cdn3.shoppy.mn/spree/images/1290350/large/open-uri20220404-756953-8ngzdf.",
        price: "829,000 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-appl-mngk3zp",
        prodcutname: "IPHONE 13",
        image:
          "https://cdn3.shoppy.mn/spree/images/1313852/large/open-uri20220421-2217472-1lyxkdm.",
        price: "3,449,900 ₮",
        company: "BSB",
        companylogo:
          "https://cdn5.shoppy.mn/img/8858/80x61/bsb1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/samsung-a53",
        prodcutname: "SAMSUNG A53",
        image:
          "https://cdn3.shoppy.mn/spree/images/1295401/large/open-uri20220407-1073505-16dfljv.",
        price: "1,449,900 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/samsung-a23",
        prodcutname: "SAMSUNG A23",
        image:
          "https://cdn3.shoppy.mn/spree/images/1295370/large/open-uri20220407-1073799-1fvg186.",
        price: "799,900 ₮",
        company: "Samsung",
        companylogo:
          "https://cdn5.shoppy.mn/img/72968/80x61/%D0%BF%D0%B4%D0%BB%D0%BF%D0%BB%D0%B4%D0%BF.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/201-5033tp-2blcap12-aqua",
        prodcutname:
          "TCL 201 5033TP-2BLCAP12 TCL, Middle east, AI Aqua 32GB smart phone",
        image: "https://cdn3.shoppy.mn/spree/images/1292964/large/TCL-201.jpg",
        price: "249,900 ₮",
        company: "TCL",
        companylogo:
          "https://cdn5.shoppy.mn/img/83772/80x61/tcl-bk.png?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink:
          "https://shoppy.mn/products/iphone-13-pro-max-appl-mncy3zp",
        prodcutname: "IPHONE 13 PRO MAX",
        image:
          "https://cdn3.shoppy.mn/spree/images/1313847/large/open-uri20220421-2217414-jr3kxu.",
        price: "4,699,900 ₮",
        company: "BSB",
        companylogo:
          "https://cdn5.shoppy.mn/img/8858/80x61/bsb1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/iphone-13-128gb",
        prodcutname: "iPhone 13 (128GB)",
        image:
          "https://cdn3.shoppy.mn/spree/images/1141668/large/open-uri20211109-3294583-tdstpq.",
        price: "3,499,000 ₮",
        company: "TECHNOZONE",
        companylogo:
          "https://cdn5.shoppy.mn/img/102019/80x61/technozone1.jpg?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
      {
        shop: "https://shoppy.mn/",
        category: "Технологи",
        categorylink: "https://shoppy.mn/t/tech",
        subcategory: "Гар утас",
        productlink: "https://shoppy.mn/products/redmi-note-11-xxf-edition",
        prodcutname: "Redmi Note 11 XXF edition",
        image:
          "https://cdn3.shoppy.mn/spree/images/1311790/large/open-uri20220420-2085132-1c2abe9.",
        price: "899,000 ₮",
        company: "MI",
        companylogo:
          "https://cdn5.shoppy.mn/img/51566/80x61/mi-bk.png?s=40797c86f19ec59fceaa5c70ef9d45b43f4d820b",
      },
    ],
  },
});
