import (
	"slices"
)

func isAnagram(s string, t string) bool {
	a := sortString(s)
	b := sortString(t)

	return a == b
}

func sortString(str string) string {
	runes := []rune(str)

	slices.Sort(runes)

	sortedStr := string(runes)

	return sortedStr
}
