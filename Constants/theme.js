import { Dimensions } from "react-native"

export const COLORS = {
    primary: '',
    secondary: '',
    gray: '',
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
    flip : "GeometricaSans-Regular",
    body1: "Roboto-Bold",
    body2: "Roboto-Medium",
    body3: "Roboto-Regular"
}


const theme = { COLORS, SIZES, FONTS }

export default theme