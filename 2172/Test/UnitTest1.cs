using System;
using Xunit;
using App;
namespace Test
{
    public class UnitTest1
    {
        [Theory()]
        [InlineData(1,2)]
        public void Test1(int amount, int xp)
        {
            int result = Program.CalcXp(amount, xp);
            Assert.Equal(amount*xp,result);

        }
    }
}
