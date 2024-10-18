import axios from "axios"
const demoappAPI = axios.create({
  baseURL: "https://demoapp1810-49726.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return demoappAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_activitylog_list(payload) {
  return demoappAPI.get(`/api/v1/activitylog/`)
}
function api_v1_activitylog_create(payload) {
  return demoappAPI.post(`/api/v1/activitylog/`, payload)
}
function api_v1_activitylog_retrieve(payload) {
  return demoappAPI.get(`/api/v1/activitylog/${payload.id}/`)
}
function api_v1_activitylog_update(payload) {
  return demoappAPI.put(`/api/v1/activitylog/${payload.id}/`, payload)
}
function api_v1_activitylog_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/activitylog/${payload.id}/`, payload)
}
function api_v1_activitylog_destroy(payload) {
  return demoappAPI.delete(`/api/v1/activitylog/${payload.id}/`)
}
function api_v1_challenge_list(payload) {
  return demoappAPI.get(`/api/v1/challenge/`)
}
function api_v1_challenge_create(payload) {
  return demoappAPI.post(`/api/v1/challenge/`, payload)
}
function api_v1_challenge_retrieve(payload) {
  return demoappAPI.get(`/api/v1/challenge/${payload.id}/`)
}
function api_v1_challenge_update(payload) {
  return demoappAPI.put(`/api/v1/challenge/${payload.id}/`, payload)
}
function api_v1_challenge_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/challenge/${payload.id}/`, payload)
}
function api_v1_challenge_destroy(payload) {
  return demoappAPI.delete(`/api/v1/challenge/${payload.id}/`)
}
function api_v1_friendship_list(payload) {
  return demoappAPI.get(`/api/v1/friendship/`)
}
function api_v1_friendship_create(payload) {
  return demoappAPI.post(`/api/v1/friendship/`, payload)
}
function api_v1_friendship_retrieve(payload) {
  return demoappAPI.get(`/api/v1/friendship/${payload.id}/`)
}
function api_v1_friendship_update(payload) {
  return demoappAPI.put(`/api/v1/friendship/${payload.id}/`, payload)
}
function api_v1_friendship_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/friendship/${payload.id}/`, payload)
}
function api_v1_friendship_destroy(payload) {
  return demoappAPI.delete(`/api/v1/friendship/${payload.id}/`)
}
function api_v1_fyrtdhfy_list(payload) {
  return demoappAPI.get(`/api/v1/fyrtdhfy/`)
}
function api_v1_fyrtdhfy_create(payload) {
  return demoappAPI.post(`/api/v1/fyrtdhfy/`, payload)
}
function api_v1_fyrtdhfy_retrieve(payload) {
  return demoappAPI.get(`/api/v1/fyrtdhfy/${payload.id}/`)
}
function api_v1_fyrtdhfy_update(payload) {
  return demoappAPI.put(`/api/v1/fyrtdhfy/${payload.id}/`, payload)
}
function api_v1_fyrtdhfy_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/fyrtdhfy/${payload.id}/`, payload)
}
function api_v1_fyrtdhfy_destroy(payload) {
  return demoappAPI.delete(`/api/v1/fyrtdhfy/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return demoappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_message_list(payload) {
  return demoappAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(payload) {
  return demoappAPI.post(`/api/v1/message/`, payload)
}
function api_v1_message_retrieve(payload) {
  return demoappAPI.get(`/api/v1/message/${payload.id}/`)
}
function api_v1_message_update(payload) {
  return demoappAPI.put(`/api/v1/message/${payload.id}/`, payload)
}
function api_v1_message_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/message/${payload.id}/`, payload)
}
function api_v1_message_destroy(payload) {
  return demoappAPI.delete(`/api/v1/message/${payload.id}/`)
}
function api_v1_mood_list(payload) {
  return demoappAPI.get(`/api/v1/mood/`)
}
function api_v1_mood_create(payload) {
  return demoappAPI.post(`/api/v1/mood/`, payload)
}
function api_v1_mood_retrieve(payload) {
  return demoappAPI.get(`/api/v1/mood/${payload.id}/`)
}
function api_v1_mood_update(payload) {
  return demoappAPI.put(`/api/v1/mood/${payload.id}/`, payload)
}
function api_v1_mood_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/mood/${payload.id}/`, payload)
}
function api_v1_mood_destroy(payload) {
  return demoappAPI.delete(`/api/v1/mood/${payload.id}/`)
}
function api_v1_movie_list(payload) {
  return demoappAPI.get(`/api/v1/movie/`)
}
function api_v1_movie_create(payload) {
  return demoappAPI.post(`/api/v1/movie/`, payload)
}
function api_v1_movie_retrieve(payload) {
  return demoappAPI.get(`/api/v1/movie/${payload.id}/`)
}
function api_v1_movie_update(payload) {
  return demoappAPI.put(`/api/v1/movie/${payload.id}/`, payload)
}
function api_v1_movie_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/movie/${payload.id}/`, payload)
}
function api_v1_movie_destroy(payload) {
  return demoappAPI.delete(`/api/v1/movie/${payload.id}/`)
}
function api_v1_notification_list(payload) {
  return demoappAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(payload) {
  return demoappAPI.post(`/api/v1/notification/`, payload)
}
function api_v1_notification_retrieve(payload) {
  return demoappAPI.get(`/api/v1/notification/${payload.id}/`)
}
function api_v1_notification_update(payload) {
  return demoappAPI.put(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_destroy(payload) {
  return demoappAPI.delete(`/api/v1/notification/${payload.id}/`)
}
function api_v1_recommendation_list(payload) {
  return demoappAPI.get(`/api/v1/recommendation/`)
}
function api_v1_recommendation_create(payload) {
  return demoappAPI.post(`/api/v1/recommendation/`, payload)
}
function api_v1_recommendation_retrieve(payload) {
  return demoappAPI.get(`/api/v1/recommendation/${payload.id}/`)
}
function api_v1_recommendation_update(payload) {
  return demoappAPI.put(`/api/v1/recommendation/${payload.id}/`, payload)
}
function api_v1_recommendation_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/recommendation/${payload.id}/`, payload)
}
function api_v1_recommendation_destroy(payload) {
  return demoappAPI.delete(`/api/v1/recommendation/${payload.id}/`)
}
function api_v1_review_list(payload) {
  return demoappAPI.get(`/api/v1/review/`)
}
function api_v1_review_create(payload) {
  return demoappAPI.post(`/api/v1/review/`, payload)
}
function api_v1_review_retrieve(payload) {
  return demoappAPI.get(`/api/v1/review/${payload.id}/`)
}
function api_v1_review_update(payload) {
  return demoappAPI.put(`/api/v1/review/${payload.id}/`, payload)
}
function api_v1_review_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/review/${payload.id}/`, payload)
}
function api_v1_review_destroy(payload) {
  return demoappAPI.delete(`/api/v1/review/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return demoappAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_streamingservice_list(payload) {
  return demoappAPI.get(`/api/v1/streamingservice/`)
}
function api_v1_streamingservice_create(payload) {
  return demoappAPI.post(`/api/v1/streamingservice/`, payload)
}
function api_v1_streamingservice_retrieve(payload) {
  return demoappAPI.get(`/api/v1/streamingservice/${payload.id}/`)
}
function api_v1_streamingservice_update(payload) {
  return demoappAPI.put(`/api/v1/streamingservice/${payload.id}/`, payload)
}
function api_v1_streamingservice_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/streamingservice/${payload.id}/`, payload)
}
function api_v1_streamingservice_destroy(payload) {
  return demoappAPI.delete(`/api/v1/streamingservice/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return demoappAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return demoappAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return demoappAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return demoappAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return demoappAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_watchlist_list(payload) {
  return demoappAPI.get(`/api/v1/watchlist/`)
}
function api_v1_watchlist_create(payload) {
  return demoappAPI.post(`/api/v1/watchlist/`, payload)
}
function api_v1_watchlist_retrieve(payload) {
  return demoappAPI.get(`/api/v1/watchlist/${payload.id}/`)
}
function api_v1_watchlist_update(payload) {
  return demoappAPI.put(`/api/v1/watchlist/${payload.id}/`, payload)
}
function api_v1_watchlist_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/watchlist/${payload.id}/`, payload)
}
function api_v1_watchlist_destroy(payload) {
  return demoappAPI.delete(`/api/v1/watchlist/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return demoappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return demoappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return demoappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return demoappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return demoappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return demoappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return demoappAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return demoappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return demoappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return demoappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return demoappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_activitylog_list,
  api_v1_activitylog_create,
  api_v1_activitylog_retrieve,
  api_v1_activitylog_update,
  api_v1_activitylog_partial_update,
  api_v1_activitylog_destroy,
  api_v1_challenge_list,
  api_v1_challenge_create,
  api_v1_challenge_retrieve,
  api_v1_challenge_update,
  api_v1_challenge_partial_update,
  api_v1_challenge_destroy,
  api_v1_friendship_list,
  api_v1_friendship_create,
  api_v1_friendship_retrieve,
  api_v1_friendship_update,
  api_v1_friendship_partial_update,
  api_v1_friendship_destroy,
  api_v1_fyrtdhfy_list,
  api_v1_fyrtdhfy_create,
  api_v1_fyrtdhfy_retrieve,
  api_v1_fyrtdhfy_update,
  api_v1_fyrtdhfy_partial_update,
  api_v1_fyrtdhfy_destroy,
  api_v1_login_create,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_retrieve,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_destroy,
  api_v1_mood_list,
  api_v1_mood_create,
  api_v1_mood_retrieve,
  api_v1_mood_update,
  api_v1_mood_partial_update,
  api_v1_mood_destroy,
  api_v1_movie_list,
  api_v1_movie_create,
  api_v1_movie_retrieve,
  api_v1_movie_update,
  api_v1_movie_partial_update,
  api_v1_movie_destroy,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_retrieve,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_destroy,
  api_v1_recommendation_list,
  api_v1_recommendation_create,
  api_v1_recommendation_retrieve,
  api_v1_recommendation_update,
  api_v1_recommendation_partial_update,
  api_v1_recommendation_destroy,
  api_v1_review_list,
  api_v1_review_create,
  api_v1_review_retrieve,
  api_v1_review_update,
  api_v1_review_partial_update,
  api_v1_review_destroy,
  api_v1_signup_create,
  api_v1_streamingservice_list,
  api_v1_streamingservice_create,
  api_v1_streamingservice_retrieve,
  api_v1_streamingservice_update,
  api_v1_streamingservice_partial_update,
  api_v1_streamingservice_destroy,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_watchlist_list,
  api_v1_watchlist_create,
  api_v1_watchlist_retrieve,
  api_v1_watchlist_update,
  api_v1_watchlist_partial_update,
  api_v1_watchlist_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
