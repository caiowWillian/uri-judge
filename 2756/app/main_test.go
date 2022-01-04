package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

var outputExpected string

func init() {
	outputExpected = "       A\n      B B\n     C   C\n    D     D\n   E       E\n    D     D\n     C   C\n      B B\n       A\n"
}

func OutputTest(t *testing.T) {
	str := Output(0, "", false)

	assert.Equal(t, outputExpected, str)
}
