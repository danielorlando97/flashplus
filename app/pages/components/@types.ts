export interface IProps {
    className? : string
    onClick? : () => void
}

type None = ''

export type numberSize = '2' | '3' | '4' | '5' | "8" | '10' | '11' |  '12' | "14" | '16'
export type size = '5xl' |'4xl' |"3xl" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs"
export type color = None |"gray-100" | 'back' | "gray-200" | 'orange' | 'body'
export type opacity = None | "50" | '25' 
export type textStyle = None | 'italic'

export const gradient : string = 'bg-gradient-to-br from-orange to-red-600'
export const text_ : string ='bg-clip-text text-transparent'


