/*
 *  ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ В JAVA
 * 
 *  Bamboo School 2021, All Rights Reserved 
*/

public class Main {

    public static void main() {
        // все примитивные типы данных можно разделить на 3 группы:

        // 1. целочисленные
        byte b = 15;      // 1 байт,  [-128; 127]
    
        char a = 45;      // 2 байта, [0; 2^16-1]
        char c = 'A';     // можно также присваивать любой Unicode символ, взятый в одинарные кавычки

        short s = 65;     // 2 байта, [-32768; 32767]

        int i = 128;      // 4 байта, [-2147483648; 2147483647]

        long l = 1234;    // 8 байт,  [-9223372036854775808; +9223372036854775807]
        
        // 2. вещественные (c плавающей запятой)
        float f = 3.14f;  // 4 байта, [1.4 E-45; 3.4028235 E+38]

        double d = -0.7;  // 8 байт,  [4.9 E-324; 1.7976931348623157 E+308]

        // 3. остальные
        boolean g = true; // 1 байт,  [true, false]
        void v;           // 0 байт, используется только при объявлении метода
    }
}