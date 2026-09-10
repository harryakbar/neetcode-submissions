func dailyTemperatures(temperatures []int) []int {
    result := make([]int, len(temperatures)) 

    var stack = []int{}

    for i, t := range temperatures {
        for len(stack) > 0 && t > temperatures[stack[len(stack) - 1]] {
            stackIdx := stack[len(stack) - 1]
            stack = stack[:len(stack) - 1]
            result[stackIdx] = i - stackIdx
        }

        stack = append(stack, i)
    }

    return result
}
