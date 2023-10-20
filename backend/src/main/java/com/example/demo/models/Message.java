package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "test")
public class Message {

    public String getId() {
    return id;
}

public void setId(String id) {
    this.id = id;
}

public String getTitle() {
    return title;
}

public void setTitle(String title) {
    this.title = title;
}

public String getDesc() {
    return desc;
}

public void setDesc(String desc) {
    this.desc = desc;
}


    @Id
    @Field("_id")
    private String id;

    @Field("title")
    private String title;

    @Field("desc")
    private String desc;

   @Override
public String toString() {
    return "Message{" +
            "id='" + id + '\'' +
            ", title='" + title + '\'' +
            ", desc='" + desc + '\'' +
            '}';
}

}
