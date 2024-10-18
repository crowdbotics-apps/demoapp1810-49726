import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_recommendation_list = createAsyncThunk(
  "recommendations/api_v1_recommendation_list",
  async payload => {
    const response = await apiService.api_v1_recommendation_list(payload)
    return response.data
  }
)
export const api_v1_recommendation_create = createAsyncThunk(
  "recommendations/api_v1_recommendation_create",
  async payload => {
    const response = await apiService.api_v1_recommendation_create(payload)
    return response.data
  }
)
export const api_v1_recommendation_retrieve = createAsyncThunk(
  "recommendations/api_v1_recommendation_retrieve",
  async payload => {
    const response = await apiService.api_v1_recommendation_retrieve(payload)
    return response.data
  }
)
export const api_v1_recommendation_update = createAsyncThunk(
  "recommendations/api_v1_recommendation_update",
  async payload => {
    const response = await apiService.api_v1_recommendation_update(payload)
    return response.data
  }
)
export const api_v1_recommendation_partial_update = createAsyncThunk(
  "recommendations/api_v1_recommendation_partial_update",
  async payload => {
    const response = await apiService.api_v1_recommendation_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_recommendation_destroy = createAsyncThunk(
  "recommendations/api_v1_recommendation_destroy",
  async payload => {
    const response = await apiService.api_v1_recommendation_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const recommendationsSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_recommendation_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recommendation_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recommendation_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recommendation_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recommendation_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recommendation_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recommendation_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recommendation_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recommendation_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recommendation_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recommendation_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recommendation_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_recommendation_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_recommendation_partial_update.fulfilled,
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
        api_v1_recommendation_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_recommendation_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_recommendation_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_recommendation_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_recommendation_list,
  api_v1_recommendation_create,
  api_v1_recommendation_retrieve,
  api_v1_recommendation_update,
  api_v1_recommendation_partial_update,
  api_v1_recommendation_destroy,
  slice: recommendationsSlice
}
