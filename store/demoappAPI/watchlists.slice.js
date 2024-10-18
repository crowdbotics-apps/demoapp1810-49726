import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_watchlist_list = createAsyncThunk(
  "watchlists/api_v1_watchlist_list",
  async payload => {
    const response = await apiService.api_v1_watchlist_list(payload)
    return response.data
  }
)
export const api_v1_watchlist_create = createAsyncThunk(
  "watchlists/api_v1_watchlist_create",
  async payload => {
    const response = await apiService.api_v1_watchlist_create(payload)
    return response.data
  }
)
export const api_v1_watchlist_retrieve = createAsyncThunk(
  "watchlists/api_v1_watchlist_retrieve",
  async payload => {
    const response = await apiService.api_v1_watchlist_retrieve(payload)
    return response.data
  }
)
export const api_v1_watchlist_update = createAsyncThunk(
  "watchlists/api_v1_watchlist_update",
  async payload => {
    const response = await apiService.api_v1_watchlist_update(payload)
    return response.data
  }
)
export const api_v1_watchlist_partial_update = createAsyncThunk(
  "watchlists/api_v1_watchlist_partial_update",
  async payload => {
    const response = await apiService.api_v1_watchlist_partial_update(payload)
    return response.data
  }
)
export const api_v1_watchlist_destroy = createAsyncThunk(
  "watchlists/api_v1_watchlist_destroy",
  async payload => {
    const response = await apiService.api_v1_watchlist_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const watchlistsSlice = createSlice({
  name: "watchlists",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_watchlist_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_watchlist_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_watchlist_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_watchlist_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_watchlist_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_watchlist_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_watchlist_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_watchlist_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_watchlist_list,
  api_v1_watchlist_create,
  api_v1_watchlist_retrieve,
  api_v1_watchlist_update,
  api_v1_watchlist_partial_update,
  api_v1_watchlist_destroy,
  slice: watchlistsSlice
}
