import { withTheme } from "styled-components"

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        acai: {
            0: '#46295A',
            1: '#9400d3',
            2: '#993399'
        }
    } 
}

const variants = {
    iconButton: {
        primary: {
            color: theme.colors.acai[0]
        },
        contrast: {
            color: theme.colors.acai[2]
        }
    },
    header: {
        primary: {
            backgroundColor: theme.colors.acai[0]
        }
    }
}

export const Acai = { ...theme, variants}