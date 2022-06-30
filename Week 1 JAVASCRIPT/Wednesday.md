# Date Of Birth In Binary

> My Date of birth is: 1996

## Binary Table

| 2^10 | 2^9 | 2^8 | 2^7 | 2^6 | 2^5 | 2^4 | 2^3 | 2^2 | 2^1 | 2^0 |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|   1  |  1  |  1  |  1  |  1  |  0  |  0  |  1  |  1  |  0  |  0  |

`Date Of Birth In Binary: 11111001100`

# MIPS Challenges

1. Create a program that adds any two given numbers provided by the user

```assembly
  .data
	number1: .asciiz "\n Input the first number: "
	number2: .asciiz "\n Input the second number: "
	result: .asciiz "\n The Result is: "
	
.text
	main:
	
	li $v0, 4
	la $a0, number1 	#Showing the first message input
	syscall
	
	li $v0, 5 		#Catching the first number input
	syscall
	
	move $t0, $v0 		#Storing first input in t0
	
	li $v0, 4
	la $a0, number2 	#Showing the second message input
	syscall
	
	li $v0, 5 		#Catching the second number input
	syscall
	
	move $t1, $v0 		#Storing second input in t1
	
	add $t2, $t0, $t1 	#Adding the 2 numbers
	
	li $v0, 4
	la $a0 result 		#Showing the result message
	syscall
	
	li $v0, 1
	move $a0, $t2 		#Showing the operation result
	syscall
```

2. Create a program that displays your name

```assembly
  .data
	message: .asciiz "\n My name is: "
	name: .asciiz "Dorian Aldair Oliveros Botzock"
	
.text
	main:
	li $v0, 4
	la $a0, message 		#Showing the message
	syscall
	
	li $v0, 4
	la $a0, name 			#Showing my full name
	syscall
```
