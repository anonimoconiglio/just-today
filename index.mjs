let time = new Date()

let [ month, day, year ] = time.toLocaleDateString('en-US').split("/")

const dayMonthVerbose = (locale = 'en-US') => {
	return time.toLocaleString(locale, { month: 'long', day: '2-digit' })
}

export { day, month, year, dayMonthVerbose }


