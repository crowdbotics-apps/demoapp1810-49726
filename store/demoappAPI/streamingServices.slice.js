import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_streamingservice_list = createAsyncThunk(
  "streamingServices/api_v1_streamingservice_list",
  async payload => {
    const response = await apiService.api_v1_streamingservice_list(payload)
    return response.data
  }
)
export const api_v1_streamingservice_create = createAsyncThunk(
  "streamingServices/api_v1_streamingservice_create",
  async payload => {
    const response = await apiService.api_v1_streamingservice_create(payload)
    return response.data
  }
)
export const api_v1_streamingservice_retrieve = createAsyncThunk(
  "streamingServices/api_v1_streamingservice_retrieve",
  async payload => {
    const response = await apiService.api_v1_streamingservice_retrieve(payload)
    return response.data
  }
)
export const api_v1_streamingservice_update = createAsyncThunk(
  "streamingServices/api_v1_streamingservice_update",
  async payload => {
    const response = await apiService.api_v1_streamingservice_update(payload)
    return response.data
  }
)
export const api_v1_streamingservice_partial_update = createAsyncThunk(
  "streamingServices/api_v1_streamingservice_partial_update",
  async payload => {
    const response = await apiService.api_v1_streamingservice_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_streamingservice_destroy = createAsyncThunk(
  "streamingServices/api_v1_streamingservice_destroy",
  async payload => {
    const response = await apiService.api_v1_streamingservice_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const streamingServicesSlice = createSlice({
  name: "streamingServices",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_streamingservice_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_streamingservice_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_streamingservice_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_streamingservice_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_streamingservice_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_streamingservice_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_streamingservice_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_streamingservice_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_streamingservice_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_streamingservice_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_streamingservice_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_streamingservice_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_streamingservice_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_streamingservice_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_streamingservice_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_streamingservice_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_streamingservice_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_streamingservice_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_streamingservice_list,
  api_v1_streamingservice_create,
  api_v1_streamingservice_retrieve,
  api_v1_streamingservice_update,
  api_v1_streamingservice_partial_update,
  api_v1_streamingservice_destroy,
  slice: streamingServicesSlice
}
