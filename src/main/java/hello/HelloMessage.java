package hello;


public class HelloMessage {

    private String name;

    private String sender;

    public HelloMessage(){}

    public HelloMessage(String name, String sender){
        this.name = name; this.sender = sender;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name=name;
    }

    public String getSender(){return sender;}

    public void setSender(String sender) {this.sender = sender;}
}
