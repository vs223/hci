#include <Servo.h>


Servo arm;
int pos = 40;
int armFlag = 0;
int goalPos = 40;
int fsrValue =0;



void setup() {
  // put your setup code here, to run once:
  arm.attach(5);

}

void loop() {
  // put your main code here, to run repeatedly:
  fsrValue = analogRead(A4);
  if(fsrValue > 128){
    armFlag = 1;
  }    
  if(pos == 130){
    goalPos=40;
    armFlag = 0;
  }
  if(pos==40 && armFlag ==1){
    goalPos = 130;
    armFlag = 0;
  }
  if(pos != goalPos){
    pos += (goalPos - pos > 0)? 1:-1;
  }

  arm.write(pos);
  delay(15);
  

}
