/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package delivery.codekillers.model;

/**
 *
 * @author Dell
 */
public class Product {
    

 private String id;
    private String name;
    private double price;
    private int quantity;
    private float profit;
 
    public Product() {}
 
    public Product(String id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
 
    public String getId() {
        return id;
    }
 
    public void setId(String id) {
        this.id = id;
    }
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public double getPrice() {
        return price;
    }
 
    public void setPrice(double price) {
        this.price = price;
    }
    
        public int getQuantity() {

        return quantity;

    }

 

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }



    public float getProfit() {
        return profit;
    }
 

    public void setProfit(float profit) {
        this.profit = profit;
    }
}
