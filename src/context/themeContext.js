import React, {useReducer} from 'react'

export const EN = 'EN';
export const ZH = 'ZH';
export const TOGGLE = 'TOGGLE';

const lang = ['en', 'zh']

export const ThemeContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case EN:
      return {...state, language: 'en'}
    case ZH:
      return {...state, language: 'zh'}
    case TOGGLE:
      const index = Number(!(lang.indexOf(state.language)))
      return {...state, language: lang[index]}
    default: 
      return state
  }
}

const defaultStore = {
  language: 'en', 
}

export const ThemeProvider = ({children}) => {

  const store = useReducer(reducer, defaultStore)

  return (
    <ThemeContext.Provider value={store}>
      {children}
    </ThemeContext.Provider>
  )
}