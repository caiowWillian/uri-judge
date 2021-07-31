using _2763;
using System;
using Xunit;
namespace Test
{
    public class Teste
    {
      [Theory()]
      [InlineData("472.188.698.58")]
      [InlineData("000.000.000-00")]
      [InlineData("320.025.102-01")]
      public static void MakeATest(string data)
      {
        Console.WriteLine(data);
        var quebra = Program.quebra(data);
        for(var i = 0; i < quebra.Length; i++)
        {
          
          Assert.Equal(data.Contains(quebra[i]),true);
        }
      }
    }
}