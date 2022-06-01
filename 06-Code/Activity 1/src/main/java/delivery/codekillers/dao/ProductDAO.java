/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package delivery.codekillers.dao;

/**
 *
 * @author Dell
 */

import java.util.ArrayList;
import java.util.List;
 
import org.bson.Document;
import org.bson.types.ObjectId;
 
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.model.Filters;
 
import delivery.codekillers.converter.ProductDocConverter;
import delivery.codekillers.model.Product;

public class ProductDAO {
    private MongoCollection<Document> coll;
 
    public ProductDAO(MongoClient mongo) {
        this.coll = mongo.getDatabase("codekillers").getCollection("product");
    }
 
    public Product create(Product p) {
        Document doc = ProductDocConverter.toDocument(p);
        this.coll.insertOne(doc);
        ObjectId id = (ObjectId) doc.get("_id");
        p.setId(id.toString());
        return p;
    }
 
    public void update(Product p) {
        this.coll.updateOne(Filters.eq("_id", new ObjectId(p.getId())), new Document("$set", ProductDocConverter.toDocument(p)));
    }
 
    public void delete(String id) {
        this.coll.deleteOne(Filters.eq("_id", new ObjectId(id)));
    }
 
    public boolean exists(String id) {
        FindIterable<Document>  doc = this.coll.find(Filters.eq("_id", id)).limit(1);
        return doc != null;
    }
 
    public List<Product> getList() {
        List<Product> list = new ArrayList<Product>();
        MongoCursor<Document>  cursor = coll.find().iterator();
        try {
            while (cursor.hasNext()) {
                Document doc = cursor.next();
                Product p = ProductDocConverter.toProduct(doc);
                list.add(p);
            }
        } finally {
            cursor.close();
        }
        return list;
    }
 
    public Product getProduct(String id) {
        Document doc = this.coll.find(Filters.eq("_id", new ObjectId(id))).first();
        return ProductDocConverter.toProduct(doc);
    }
}
