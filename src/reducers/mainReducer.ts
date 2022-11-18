export const mainReducer = (
  state = {
    tvshow: null,
    episodes: [],
  },
  action: any,
) => {
  switch (action.type) {
    case 'INIT_TVDATA':
      return action.payload
    default:
      return state
  }
}
