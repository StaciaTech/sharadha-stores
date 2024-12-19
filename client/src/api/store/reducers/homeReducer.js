import { createSlice } from "@reduxjs/toolkit";
import {
  blogsData,
  brandsData,
  homeCategoryData,
  homeCouponsData,
  homeData,
  homeOffersData,
  homeSectionOneData,
  homeSectionThreeData,
  sellerData,
} from "../actions";

const initialState = {
  loading: false,
  data: null,
  navigate_button: null,
  categoriesData: [
    {
      name: "apple",
      img: "https://hips.hearstapps.com/hmg-prod/images/red-fresh-apple-isolated-on-white-background-royalty-free-image-1627314996.jpg",
    },
    {
      name: "apple",
      img: "https://hips.hearstapps.com/hmg-prod/images/red-fresh-apple-isolated-on-white-background-royalty-free-image-1627314996.jpg",
    },
    {
      name: "apple",
      img: "https://hips.hearstapps.com/hmg-prod/images/red-fresh-apple-isolated-on-white-background-royalty-free-image-1627314996.jpg",
    },
  ],
  offersData: [],
  sectionOneData: [],
  couponsData: [],
  sectionThreeData: [],
  sellersData: [],
  blogsData: [],
  brandsData: [],
  offersParams: "",
  sectionOneParams: "",
  sectionThreeParams: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    storeOffers(state, action) {
      state.offersParams = action.payload;
    },
    storeSectionOne(state, action) {
      state.sectionOneParams = action.payload;
    },
    storeSectionThree(state, action) {
      state.sectionThreeParams = action.payload;
    },
  },
  extraReducers: (builder) => {
    //Main Data Case
    builder.addCase(homeData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(homeData.fulfilled, (state, action) => {
      state.data = action.payload.values;
      state.navigate_button = action.payload.values.navigate_button;
    });
    builder.addCase(homeData.rejected, (state, action) => {
      state.loading = false;
    });

    //Home Category Data Case
    builder.addCase(homeCategoryData.pending, (state, action) => {});
    builder.addCase(homeCategoryData.fulfilled, (state, action) => {
      state.categoriesData = action.payload.data;
    });
    builder.addCase(homeCategoryData.rejected, (state, action) => {});

    //Home Offer Data Case
    builder.addCase(homeOffersData.pending, (state, action) => {});
    builder.addCase(homeOffersData.fulfilled, (state, action) => {
      state.offersData = action.payload.data;
    });
    builder.addCase(homeOffersData.rejected, (state, action) => {});

    //Home Section One Data Case
    builder.addCase(homeSectionOneData.pending, (state, action) => {});
    builder.addCase(homeSectionOneData.fulfilled, (state, action) => {
      state.sectionOneData = action.payload.data;
    });
    builder.addCase(homeSectionOneData.rejected, (state, action) => {});

    //Home Coupons Case
    builder.addCase(homeCouponsData.pending, (state, action) => {});
    builder.addCase(homeCouponsData.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.couponsData = action.payload.data;
      }
    });
    builder.addCase(homeCouponsData.rejected, (state, action) => {});

    //Home Section Three Case
    builder.addCase(homeSectionThreeData.pending, (state, action) => {});
    builder.addCase(homeSectionThreeData.fulfilled, (state, action) => {
      state.sectionThreeData = action.payload.data;
      state.loading = false;
    });
    builder.addCase(homeSectionThreeData.rejected, (state, action) => {});

    //Blogs Case
    builder.addCase(blogsData.pending, (state, action) => {});
    builder.addCase(blogsData.fulfilled, (state, action) => {
      state.blogsData = action.payload.data;
    });
    builder.addCase(blogsData.rejected, (state, action) => {});

    //Brands Case
    builder.addCase(brandsData.pending, (state, action) => {});
    builder.addCase(brandsData.fulfilled, (state, action) => {
      state.brandsData = action.payload.data;
    });
    builder.addCase(brandsData.rejected, (state, action) => {});

    //Sellers Case
    builder.addCase(sellerData.pending, (state, action) => {});
    builder.addCase(sellerData.fulfilled, (state, action) => {
      state.sellersData = action.payload.data;
      state.loading = false;
    });
    builder.addCase(sellerData.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { storeOffers, storeSectionOne, storeSectionThree } =
  homeSlice.actions;
export default homeSlice.reducer;
