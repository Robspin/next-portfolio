
export const renderedOnLargeScreen = () => {
    let isLargeScreen = true
    if (typeof window !== 'undefined') {
        isLargeScreen = window.innerWidth > 600
    }

    return isLargeScreen
}

