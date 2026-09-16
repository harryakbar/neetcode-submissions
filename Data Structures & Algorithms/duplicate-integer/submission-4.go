import "slices"

func hasDuplicate(nums []int) bool {
    mySet := []int{}

	for _, val := range nums {
		if (!slices.Contains(mySet, val)) {
			mySet = append(mySet, val)
		}
	}

	if (len(mySet) == len(nums)) {
		return false
	}

	return true
}
