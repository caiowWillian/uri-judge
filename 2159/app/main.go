package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	var inputStr string
	fmt.Scan(&inputStr)

	inputInt, _ := strconv.Atoi(inputStr)

	minimum, maximum := Schoenfeld(inputInt)
	fmt.Printf("%.1f %.1f\n", minimum, maximum)
}

func Schoenfeld(n int) (minimum float64, maximum float64) {
	const a = 1.25506
	minimum = float64(n) / math.Log(float64(n))
	maximum = a * minimum
	return
}
