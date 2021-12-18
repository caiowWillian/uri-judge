using System;

namespace _2717
{
    class Program
    {
        static void Main(string[] args)
        {
            var timeLeft = Console.ReadLine();
            var manufacturingTime = Console.ReadLine().Split(' ');

            var response = new Manufacturing(Convert.ToInt32(timeLeft), 
                              Convert.ToInt32(manufacturingTime[0]),
                              Convert.ToInt32(manufacturingTime[1]))
                              .Response();

            Console.WriteLine(response);
        }
    }

    public class Manufacturing
    {
        private int _productOne;
        private int _productTwo;
        private int _timeLeft;

        public Manufacturing(int timeLeft, int productOne, int productTwo)
        {
            _timeLeft = timeLeft;
            _productOne = productOne;
            _productTwo = productTwo;
        }

        public string Response()
         => (_productOne+_productTwo) <= _timeLeft ? "Farei hoje!" : "Deixa para amanha!";
    }
}