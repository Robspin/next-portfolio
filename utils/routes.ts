export type View = 'landing' | 'aboutMe' | 'contact' | 'myWork'
export type NavigationClassTypes = 'move-up' | 'move-down' | 'move-center' | 'move-left' | 'move-right' | ''

export const routes: { title: string, key: View }[] = [
    {
        title: 'MY WORK', key: 'myWork'
    },
    {
        title: 'LANDING', key: 'landing'
    },
    {
        title: 'ABOUT ME', key: 'aboutMe'
    },
    {
        title: 'CONTACT', key: 'contact'
    }
]
