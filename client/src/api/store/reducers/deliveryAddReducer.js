import {createSlice} from '@reduxjs/toolkit';
import {addressData, createAdd, deleteAdd, updateAdd} from '../actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  loading: false,
  addresses: [],
};

const delieveryAddSlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setAddresses: (state, action) => {
      state.addresses = action.payload;
    },
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },
    clearAddresses: (state) => {
      state.addresses = [];
    },
    deleteAddress: (state, action) => {
      state.addresses = state.addresses.filter((_, index) => index !== action.payload);
    },
  },
  extraReducers: builder => {
    //AddAddress Cases
    builder.addCase(addressData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addressData.fulfilled, (state, action) => {
      state.addresses = action.payload.data;
      state.loading = false;
    });
    builder.addCase(addressData.rejected, (state, action) => {
      state.loading = false;
    });

    //DeleteAdd Cases
    builder.addCase(deleteAdd.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteAdd.fulfilled, (state, action) => {});
    builder.addCase(deleteAdd.rejected, (state, action) => {
      state.loading = false;
    });

    //CreateAdd Cases
    builder.addCase(createAdd.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createAdd.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(createAdd.rejected, (state, action) => {
      state.loading = false;
    });

    //UpdateAdd Cases
    builder.addCase(updateAdd.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateAdd.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateAdd.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export const { setAddresses, addAddress, clearAddresses } = delieveryAddSlice.actions;

export const loadAddresses = () => async (dispatch) => {
  try {
    const storedAddresses = await AsyncStorage.getItem('addresses');
    if (storedAddresses) {
      dispatch(setAddresses(JSON.parse(storedAddresses)));
    }
  } catch (error) {
    console.error('Error loading addresses from AsyncStorage:', error);
  }
};

export const saveAddresses = (addresses) => async (dispatch) => {
  try {
    await AsyncStorage.setItem('addresses', JSON.stringify(addresses));
    dispatch(setAddresses(addresses));
  } catch (error) {
    console.error('Error saving addresses to AsyncStorage:', error);
  }
};
export const removeAddress = (index) => async (dispatch, getState) => {
  try {
    // Fetch the current addresses from AsyncStorage
    const storedAddresses = await AsyncStorage.getItem('addresses');
    const addresses = storedAddresses ? JSON.parse(storedAddresses) : [];

    // Validate the index
    if (index < 0 || index >= addresses.length) {
      throw new Error('Invalid index for deletion');
    }

    // Remove the selected address
    const updatedAddresses = addresses.filter((_, i) => i !== index);

    // Update AsyncStorage
    await AsyncStorage.setItem('addresses', JSON.stringify(updatedAddresses));

    // Dispatch action to update the Redux store
    dispatch(deleteAddress(index));
  } catch (error) {
    console.error('Error deleting address:', error.message);
  }
};

export default delieveryAddSlice.reducer;
