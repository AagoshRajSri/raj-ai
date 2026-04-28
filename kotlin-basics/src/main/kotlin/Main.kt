#!/usr/bin/env kotlin

// import com.sun.jdi.IntegerType

//fun main(){
//    // data types
//    val v = 5
//    val w = "Hello World"
//    val x = 5.2
//    val y: Double = 5.44343
//    val z = true
//    println(v)
//    println(w)
//    println(x)
//    println(y)
//    println(z)
//}

//fun main(){
//    // val vs var -> value is immutable and final/constant, whereas variable is a mutable value
//    var x = "Hello world"
//    x = "oh na na na"
//    println(x)
//}

//}

//}

//fun main(){
//    // arithmetic operators
//    var x = 5
//    x++
//    x += 5
//    val y = 10
//    println(x * y)
//    println(x + y)
//    println(y - x)
//    println(x.toFloat() / y)
//    println(x % y)
//fun main(){
//    // logical operators
//    val x = 2
//    val y = 4
//    val arebothEven = x % 2 == 0 && y % 2 == 0
//    println("Is x an even number? $arebothEven")


//fun main() {
//    // input from user
//    println("Enter a number: ")
//    val input = readln()
//    val inputAsInteger = input.toIntOrNull()
//
//    if (inputAsInteger != null) {
//        val y = 5 + inputAsInteger
//        println("The sum of input: $y")
//    } else {
//        println("Invalid input")
//    }
//}

//fun main(){
//    // elvis operator
//    println("Enter a number: ")
////    val x = readln().toIntOrNull() ?: 1
//    val x = readln().toIntOrNull()?.rem(2)?.equals(0)
////    ?.rem(2) → if not null, does number % 2
////    ?.equals(0) → checks if remainder is 0 (i.e., even number)
//    println("Result : $x")
//}

//fun main(){
//    // if-else condition
//    println("enter a number: ")
//    val input = readln().toIntOrNull()
//
//    if(input != null){
//      val isEven = input % 2 == 0
//       if(isEven){
//           println("The number is even")
//       }else{
//        println("The number is odd")
//       }
//    } else{
//        println("The number is not even")
//    }
//}

//fun main() {
//    // when condition
//    println("Enter your number: ")
//    val input = readln().toIntOrNull()
//
//    if (input != null) {
//        val output = when {
//            input % 2 == 0 -> "The output is even"
//            input < 10 -> "The output is less than 10 and odd"
//            else -> "The output is odd and >= 10"
//        }
//        println(output)
//    } else {
//        println("Enter an integer")
//    }
//}

// shorter version
//fun main(){
//    println("Enter ur number: ")
//    val input = readln().toIntOrNull()
//
//    val output = when (input) {
//        null -> "enter a valid integer"
//        2 -> "thats an even number"
//        3 -> "thats an odd number"
//        else -> "i have no idea what to print"
//    }
//    println(output)
//}
//
//fun main() {
//    // exception
//    println("Enter a number: ")
//    val input = readln()
//
//    val inputAsInteger = try {
//        val num = input.toInt()
//        println("This is a correct format")
//        num
//    } catch (e: NumberFormatException) {
//        println("Invalid format")
//        null
//    }
//
//    val output = when(inputAsInteger){
//        3 -> "its 3"
//        4 -> "its 4"
//        5 -> "its 5"
//        null -> "This is an incorrect format, check again!"
//        else -> "Some other number"
//    }
//
//    println(output)
//}

fun main() {
    // arrays
    println("Enter a number")
    val input = readln().toIntOrNull()
    val favoriteNumbers = intArrayOf(1, 2, 3, 4, 5)

    if (input != null) {
        if (input in favoriteNumbers.indices) {
            println("Your number is ${favoriteNumbers[input]}")
        } else {
            println("Index out of range!")
        }
    } else {
        println("Invalid input")
    }
}
//    println(favoriteNumbers[0])
//    println(favoriteNumbers[1])
//    println(favoriteNumbers[3])
