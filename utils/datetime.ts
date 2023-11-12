export function calculateYearsFromDate(dateString: string): number {
    const startDate = new Date(dateString)
    const currentDate = new Date()

    const timeDiff = currentDate.getTime() - startDate.getTime()

    const yearsDiff = timeDiff / (1000 * 60 * 60 * 24 * 365.25)

    return parseFloat(yearsDiff.toFixed(1))
}