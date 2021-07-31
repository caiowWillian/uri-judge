using System;

namespace App
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string input = null;
            int result = 0;
            while(true)
            {      
                input = Console.ReadLine();
                var values = input.Split(' ');
                result = CalcXp(int.Parse(values[0]),int.Parse(values[1]));
                Console.WriteLine(result);
            }
        }

        public static int CalcXp(int amount, int xp)
        {
            VerifyExit(amount,xp);
            return amount * xp;
        }

        public static void VerifyExit(int amount, int xp)
        {
            if(amount == 0 && xp == 0) 
                Environment.Exit(0);
        }    
    }
}
