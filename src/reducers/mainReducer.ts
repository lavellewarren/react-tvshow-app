export const mainReducer = (
  state = {
    tvshow: null,
    episodes: [],
    loading: false,
  },
  action: any,
) => {
  switch (action.type) {
    case 'INIT_TVDATA':
      return {
        ...(state ? state : {}),
        ...action.payload,
      }
    case 'SET_LOADING':
      return {
        ...(state ? state : {}),
        loading: action.payload.loading,
      }
    default:
      return state
  }
}
