package main

import (
	"fmt"
	"strconv"
)

func main() {
	var input string
	fmt.Scanln(&input)
	value, _ := strconv.Atoi(input)

	switch {
	case value == 0:
		fmt.Println("E")
	case value > 0 && value <= 35:
		fmt.Println("D")
	case value > 35 && value <= 60:
		fmt.Println("C")
	case value > 60 && value <= 85:
		fmt.Println("B")
	case value > 85 && value <= 100:
		fmt.Println("A")
	}
}
