package hello;

import java.util.Date;

public class Greeting {

    private String content;

    private String sender;

    private String date;

    public Greeting(){}

    public Greeting(String content, String sender){
        this.content=content; this.sender = sender;
        date = new Date().toString();
    }

    public String getContent(){
        return content;
    }

    public String getSender(){
        return sender;
    }

    public String getDate(){
        return date;
    }
}
