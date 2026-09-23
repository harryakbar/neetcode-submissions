import "slices"

func groupAnagrams(strs []string) [][]string {
	anagramMap := make(map[string][]string)
	keys := []string{}

	for _, val := range strs {
		key := stringSorter(val)
		anagramMap[key] = append(anagramMap[key], val)
		if !slices.Contains(keys, key) {
			keys = append(keys, key)
		}
	}

	result := [][]string{}
	for _, key := range keys {
		result = append(result, anagramMap[key])
	}

	return result
}

func stringSorter(str string) string {
	runes := []rune(str)
	slices.Sort(runes)
	return string(runes)
} 