package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func SchoenfeldTest(t *testing.T) {
	minimum, maximum := Schoenfeld(17)

	assert.Equal(t, 6.0, minimum)
	assert.Equal(t, 17.5, maximum)
}
