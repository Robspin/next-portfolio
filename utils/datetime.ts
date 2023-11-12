export function calculateYearsFromDate(dateString: string): string {
    const startDate = new Date(dateString)
    const currentDate = new Date()

    const timeDiff = currentDate.getTime() - startDate.getTime()

    const yearsDiff = timeDiff / (1000 * 60 * 60 * 24 * 365.25)

    return String(parseFloat(yearsDiff.toFixed(1))).replace('.', ',')
}