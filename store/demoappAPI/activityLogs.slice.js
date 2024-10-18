import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_activitylog_list = createAsyncThunk(
  "activityLogs/api_v1_activitylog_list",
  async payload => {
    const response = await apiService.api_v1_activitylog_list(payload)
    return response.data
  }
)
export const api_v1_activitylog_create = createAsyncThunk(
  "activityLogs/api_v1_activitylog_create",
  async payload => {
    const response = await apiService.api_v1_activitylog_create(payload)
    return response.data
  }
)
export const api_v1_activitylog_retrieve = createAsyncThunk(
  "activityLogs/api_v1_activitylog_retrieve",
  async payload => {
    const response = await apiService.api_v1_activitylog_retrieve(payload)
    return response.data
  }
)
export const api_v1_activitylog_update = createAsyncThunk(
  "activityLogs/api_v1_activitylog_update",
  async payload => {
    const response = await apiService.api_v1_activitylog_update(payload)
    return response.data
  }
)
export const api_v1_activitylog_partial_update = createAsyncThunk(
  "activityLogs/api_v1_activitylog_partial_update",
  async payload => {
    const response = await apiService.api_v1_activitylog_partial_update(payload)
    return response.data
  }
)
export const api_v1_activitylog_destroy = createAsyncThunk(
  "activityLogs/api_v1_activitylog_destroy",
  async payload => {
    const response = await apiService.api_v1_activitylog_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const activityLogsSlice = createSlice({
  name: "activityLogs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_activitylog_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_activitylog_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_activitylog_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_activitylog_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_activitylog_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_activitylog_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_activitylog_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_activitylog_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_activitylog_list,
  api_v1_activitylog_create,
  api_v1_activitylog_retrieve,
  api_v1_activitylog_update,
  api_v1_activitylog_partial_update,
  api_v1_activitylog_destroy,
  slice: activityLogsSlice
}
