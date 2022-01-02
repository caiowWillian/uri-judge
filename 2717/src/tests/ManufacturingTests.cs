using System;
using _2717;
using FluentAssertions;
using Xunit;

namespace tests
{
    public class ManufacturingTests
    {
        [Fact]
        public void Response_should_Tomorrow()
        {
            new Manufacturing(20, 15, 6)
                              .Response().Should().Be("Deixa para amanha!");
        }

        [Fact]
        public void Response_should_Today()
        {
            new Manufacturing(20, 10, 10)
                              .Response().Should().Be("Farei hoje!");
        }
    }
}
