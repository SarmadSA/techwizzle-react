package com.techwizzle.utils;

import com.sun.org.apache.xml.internal.resolver.readers.ExtendedXMLCatalogReader;

import java.sql.*;

public class DBConnect {
    //Constatnts
    private final String driver = "com.mysql.jdbc.Driver";  // This string should be changed according to connector's package and class name
                                                            // in this case Driver is the class-name, and the rest is the package name
    private final String url = "jdbc:mysql://localhost:3306/techwizzle";
    private final String user = "root";
    private final String password = "";

    private Connection connection;
    private Statement statement;
    private ResultSet resultSet;

    public DBConnect(){
        try{
            Class.forName(driver);
            this.connection = DriverManager.getConnection(url, user, password);
            this.statement = connection.createStatement();
        }
        catch(Exception e){
            System.out.println("Error: " + e);
        }
    }

    public ResultSet executeSQLQuery(String query){
        try{
            resultSet = statement.executeQuery(query);
        } catch (SQLException e){
            //TODO: handle error
        }
        return resultSet;
    }


    public void closeResultSet(){
        try {
            if(resultSet != null){
                resultSet.close();
            }
        } catch (SQLException e){
            //TODO: handle error
        }
    }

    public void closeStatement(){
        try {
            if(statement != null){
                statement.close();
            }
        } catch (SQLException e){
            //TODO: handle error
        }
    }

    public void closeConnection(){
        try {
            if(statement != null){
                connection.close();
            }
        } catch (SQLException e){
            //TODO: handle error
        }
    }
}
