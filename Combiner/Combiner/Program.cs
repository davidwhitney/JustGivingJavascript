using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Combiner
{
    class Program
    {
        static void Main(string[] args)
        {
            var combineFile = "jg.combine";

            if(args.Count() > 0)
            {
                combineFile = args[0];
            }

            var fileList = File.ReadAllLines(combineFile);

            var sb = new StringBuilder();
            foreach(var filename in fileList)
            {
                sb.Append(File.ReadAllText(filename));
            }

            File.WriteAllText(combineFile.Replace(".combine", ".js"), sb.ToString());
        }
    }
}
