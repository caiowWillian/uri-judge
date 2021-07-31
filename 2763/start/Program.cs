using System;
namespace _2763
{
    public class Program
    {
        static void Main(string[] args)
        {
            string input = "472.188.698-58";
            var e = quebra(input);

            foreach(var item in e)
            {
                Console.WriteLine(item);
            }
        }

        public static string[] quebra(string input) 
        {
            return input.Split(new char[] {'.','-'});
        } 
    }
}
