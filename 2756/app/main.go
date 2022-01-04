package main

import "fmt"

func main() {
	str := Output(0, "", false)
	fmt.Print(str)
}

func Output(next int, strOutput string, invert bool) string {
	words := [5]string{"A\n", "B B\n", "C   C\n", "D     D\n", "E       E\n"}
	spaces := [5]string{"       ", "      ", "     ", "    ", "   "}

	if next == -1 {
		return strOutput
	}

	strOutput += spaces[next]
	strOutput += words[next]

	if !invert {
		next++
	} else {
		next--
	}

	if next < 4 && !invert {
		return Output(next, strOutput, false)
	}
	return Output(next, strOutput, true)
}
