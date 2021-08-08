package main

import (
	"fmt"
	"strconv"
)

func main() {
	var input string
	fmt.Scanln(&input)
	cases, _ := strconv.Atoi(input)
	var arr [3]string
	var result string
	var convertValue [3]int
	for i := 0; i < cases; i++ {
		input = ""
		result = ""
		fmt.Scanln(&arr[0], &arr[1], &arr[2])

		for y := 0; y < len(arr); y++ {
			convertValue[y], _ = strconv.Atoi(arr[y])
		}

		if convertValue[2] == 1 {
			result = "%02d:%02d - A porta abriu!\n"
		} else {
			result = "%02d:%02d - A porta fechou!\n"
		}

		fmt.Printf(result, convertValue[0], convertValue[1])
	}
}
