using System;
using System.Collections.Generic;
using System.Linq;

namespace _3301
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputs = Console.ReadLine().Split(' ');
                       
            int outValue;
            var sobrinhos = new List<Sobrinho>();
            for(int i = 0; i < 3; i++)
            {
                int.TryParse(inputs[i],out outValue);
                sobrinhos.Add(new Sobrinho(){ Index = i, Age = outValue });
            }

            switch(sobrinhos.OrderBy(x => x.Age).ToArray()[1].Index)
            {
                case 0:
                    Console.WriteLine("huguinho");
                break;
                case 1:
                    Console.WriteLine("zezinho");
                break;
                case 2:
                    Console.WriteLine("luisinho");
                break;
            }

        }

        private class Sobrinho
        {
            public int Index { get; set; }
            public int Age { get; set; }
        }
    }
}
