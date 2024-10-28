export function useSimpleDateFormatter() {
  // Function to format the date string to "YYYY-MM-DD"
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) throw new Error('Invalid Date')

      // Extract the year, month, and day components
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-based
      const day = String(date.getDate()).padStart(2, '0')

      // Return in "YYYY-MM-DD" format
      return `${year}-${month}-${day}`
    } catch (error) {
      console.error('Invalid date:', dateString)
      return dateString // Fallback to original string if formatting fails
    }
  }

  return {
    formatDate,
  }
}
