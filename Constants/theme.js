import { Dimensions } from "react-native"

export const COLORS = {
    primary: '#5489B1',
    secondary: '',
    gray: '',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    black: '#000',
    white: '#fff'
}

export const SIZES = {
    base: 6,
    font: 14,
    radius: 5,
    padding: 24,

    h1: 26,
    h2: 22,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,
    body: 16,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export const FONTS = {
    flip: "GeometricaSans-Regular",
    flip2: "geometrica-sans-bold",
    body1: "Roboto-Bold",
    body2: "Roboto-Medium",
    body3: "Roboto-Regular"
}


const theme = { COLORS, SIZES, FONTS }

export default theme