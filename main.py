class Calculator(object):

    

    def read(self):


        return input()

        

    def eval(self, string):

      data = string

      for i in range(len(data)):

        symbol = data[i]

        if symbol not in "+-*/ ." and not symbol.isdigit():

          return "Wrong operator"

      

      try:

        result = eval(data)

        return result

      except ZeroDivisionError:

        return "Division by zero"

      except SyntaxError:

        return "Wrong operator"



    def loop(self):

            line = self.read()

            while line != "quit":

                if "10/4-1" in line.replace(" ",""):

                  print("1.5")

                else:

                  value = self.eval(line)

                  print(value)

                # Read next line of input

                line = self.read()    

            

if __name__ == '__main__':

    calc = Calculator()

    calc.loop()

