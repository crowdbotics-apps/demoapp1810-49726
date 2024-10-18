import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_challenge_list = createAsyncThunk(
  "challenges/api_v1_challenge_list",
  async payload => {
    const response = await apiService.api_v1_challenge_list(payload)
    return response.data
  }
)
export const api_v1_challenge_create = createAsyncThunk(
  "challenges/api_v1_challenge_create",
  async payload => {
    const response = await apiService.api_v1_challenge_create(payload)
    return response.data
  }
)
export const api_v1_challenge_retrieve = createAsyncThunk(
  "challenges/api_v1_challenge_retrieve",
  async payload => {
    const response = await apiService.api_v1_challenge_retrieve(payload)
    return response.data
  }
)
export const api_v1_challenge_update = createAsyncThunk(
  "challenges/api_v1_challenge_update",
  async payload => {
    const response = await apiService.api_v1_challenge_update(payload)
    return response.data
  }
)
export const api_v1_challenge_partial_update = createAsyncThunk(
  "challenges/api_v1_challenge_partial_update",
  async payload => {
    const response = await apiService.api_v1_challenge_partial_update(payload)
    return response.data
  }
)
export const api_v1_challenge_destroy = createAsyncThunk(
  "challenges/api_v1_challenge_destroy",
  async payload => {
    const response = await apiService.api_v1_challenge_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const challengesSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_challenge_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_challenge_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_challenge_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_challenge_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_challenge_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_challenge_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_challenge_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_challenge_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_challenge_list,
  api_v1_challenge_create,
  api_v1_challenge_retrieve,
  api_v1_challenge_update,
  api_v1_challenge_partial_update,
  api_v1_challenge_destroy,
  slice: challengesSlice
}
