import React from 'react'
import mainHeaderImage from './images/logo.jpg'
import { Search } from 'styled-icons/feather'

const images = {
    mainHeaderImage
}

const icons = {
    Search: <Search />
}

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        acais: {
            0: '#46295A',
            1: '#9400d3',
            2: '#993399'
        }
    } 
}

const variants = {
    iconButton: {
        primary: {
            color: theme.colors.acais[0]
        },
        contrast: {
            color: theme.colors.acais[2]
        }
    },
    header: {
        primary: {
            backgroundColor: theme.colors.acais[0]
        }
    }
}

export const Acai = { ...theme, variants, images, icons }