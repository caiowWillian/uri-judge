using System;
using System.Collections.Generic;

namespace _2533
{
    class Program
    {
        static void Main(string[] args)
        {
            var cases = Convert.ToInt16(Console.ReadLine());
            IList<int> l = new List<int>();
            double sum = 0;
            for(int i = 0; i < cases; i++)
            {
                foreach(var item in Console.ReadLine().Split(' '))
                    l.Add(Convert.ToInt32(item));

                sum+=(Convert.ToInt32(l[0]) * Convert.ToInt32(l[1]))/(l[1] * 100);
            }
            Console.WriteLine(sum);
        }
    }
}
