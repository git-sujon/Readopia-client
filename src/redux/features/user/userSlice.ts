import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

interface ICredential {
  email: string;
  password: string;
}

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null | undefined;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "user/create-user",
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

export const loginUser = createAsyncThunk(
  "user/login-user",
  async ({ email, password }: ICredential) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

export const createUserWithGoogle = createAsyncThunk(
  "user/login-google",
  async () => {
    const data = await signInWithPopup(auth, new GoogleAuthProvider());
    return data.user.email;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.isSuccess = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.isSuccess = false;
      })
      .addCase(createUserWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(createUserWithGoogle.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createUserWithGoogle.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.isSuccess = false;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
