package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class VulnerableApp {
    public static void main(String[] args) throws Exception {
        if (args.length != 1) {
            System.out.println("Usage: java VulnerableApp <username>");
            return;
        }

        String userInput = args[0];

        // Java 8 lambda expression
        Runnable log = () -> System.out.println("Querying for user: " + userInput);
        log.run();

        try (Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/mydatabase", "user", "password");
             Statement stmt = conn.createStatement()) {

            // Vulnerability: user input concatenated directly into SQL query
            String sql = "SELECT * FROM users WHERE username = '" + userInput + "'";
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                System.out.println("User ID: " + rs.getInt("id"));
            }
            rs.close();
        }
    }
}
