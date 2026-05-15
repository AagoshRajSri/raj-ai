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

//fun main() {
//    // arrays
//    println("Enter a number")
//    val input = readln().toIntOrNull()
//    val favoriteNumbers = intArrayOf(1, 2, 3, 4, 5)
//
//    if (input != null) {
//        if (input in favoriteNumbers.indices) {
//            println("Your number is ${favoriteNumbers[input]}")
//        } else {
//            println("Index out of range!")
//        }
//    } else {
//        println("Invalid input")
//    }
//}
//    println(favoriteNumbers[0])
//    println(favoriteNumbers[1])
//    println(favoriteNumbers[3])

//fun main(){
    // loops
//    println("Enter a number of your wish: ")
//    val amountOfNumbers = readln().toIntOrNull() ?: 0
//    var sum = 0
//    var i = 0
//    while (i < amountOfNumbers){
//        println("Please enter your number #${i + 1}")
//        val number = readln().toIntOrNull() ?: continue // (it will directly jump to the loop again wo incrementing
//        sum += number
//        i ++
//    }
//    println("the total sum is $sum")
// }

//fun main(){
//    println("How many numbers will you enter? ")
//    val amountOfNumbers = readln().toIntOrNull() ?: 0
//
//    var numbers = intArrayOf()
//    var i = 0
//    while (i < amountOfNumbers){
//        println("Please enter number #${i + 1}")
//        val number = readln().toIntOrNull() ?: continue
//        numbers += number
//        i++
//    }
//    println("Numbers: ${numbers.contentToString()}")
//}

// a better approach ->
//fun main(){
//    println("How mmany numbers will u enter?")
//    val amountOfNumbers = readln().toIntOrNull() ?: 0
//
//    val numbers = mutableListOf<Int>()
//    var i = 0
//    while ( i < amountOfNumbers ){
//        println("Please enter number #${i + 1}")
//        val number = readln().toIntOrNull() ?: continue
//        numbers.add(number)
//        i++
//    }
//    println("Numbers: $numbers")
//}


// an even better approach
//fun main(){
//    println("how many numbers?")
//    val amountOfNumbers = readln().toIntOrNull() ?: 0
//
//    val numbers = mutableListOf<Int>()
//
//    for (i in 0 until  amountOfNumbers){
//        println("Please enter number #${i + 1}")
//        val number = readln().toIntOrNull() ?: continue
//        numbers.add(number)
//    }
////    println("Numbers: $numbers")
//    for ((index, number) in numbers.withIndex()) {
//        println("Number #${index + 1} $number")
//    }
//}


//fun main(){
//    println("enter a text")
//    val input = readln()
//
//    for(c in input){
//        println(c)
//    }
//}
//
//fun main(){
//    // reversing a string
//    println("enter a text")
//    val input = readln()
//
//    val finalString = buildString {
//        for (i in input.lastIndex downTo 0) {
//            append(input[i])
//        }
//    }
//        println(finalString)
//}

// normal function
//fun main(){
//    println("enter a string: ")
//    val input = readln()
//
//    val finalString = buildString {
//        for(i in input.lastIndex downTo 0){
//            append(input[i])
//        }
//    }
//    println(finalString)
//}

// how we can make re-usable functions
//fun main(){
//    println("Enter a text")
//    val input = readln()
//    val reversed = reversed(input)
//    println(reversed)
//    if(input == reversed(input)){
//        println("that is a palindrome!")
//    }else {
//        println("that is not a palindrome!")
//    }
//}
//
//fun reversed(stringToReverse: String): String{
//    val finalString = buildString{
//        for(i in stringToReverse.lastIndex downTo 0){
//            append(stringToReverse[i])
//        }
//    }
//    return finalString
//}

//fun main(){
//    // extension function
//    val text = "Oggy"
//    println(text.addStars())
//}
//fun String.addStars() : String {
//    return buildString {
//        append("*** ")
//        append(this@addStars)
//        append(" ***")
//    }
//}

//fun main() {
//    // extension fn
//    println("Enter a String")
//    val input = readln()
//
//    println(input.reversedCustom())
//}
//
//fun String.reversedCustom(): String {
//    return buildString {
//        for (i in this@reversedCustom.lastIndex downTo 0) {
//            append(this@reversedCustom[i])
//        }
//    }
//}

//fun main() {
// FUNCTION OVERLOADING
//    println(add(2, 3))         // Int version
//
//    println(add(2.5, 3.5))     // Double version
//}
//
//fun add(a: Int, b: Int): Int {
//    return a + b
//}
//
//fun add(a: Double, b: Double): Double {
//    return a + b
//}

//fun main(){
//    println(call("mom"))
//    println(call("dad", 5))
//}
//
//fun call(str : String) :String{
//    return "calling $str"
//}
//
//fun call(str : String, int : Int) : String{
//    return "called $str, $int times"
//}

